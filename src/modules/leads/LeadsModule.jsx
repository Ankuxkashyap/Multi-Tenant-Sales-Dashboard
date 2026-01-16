import React, { useState, useMemo } from 'react';
import { Users, Filter, Edit2 } from 'lucide-react';
import { useTenantData } from '../../hooks/useTenantData';
import { hasPermission } from '../../utils/permissions';
import { LEAD_STATUSES } from '../../utils/mockData';
import Badge from '../../components/common/Badge';

const LeadsModule = () => {
  const { tenantData, currentUser } = useTenantData();
  const [statusFilter, setStatusFilter] = useState('All');
  const [editingLead, setEditingLead] = useState(null);
  
  const canEdit = hasPermission(currentUser.role, 'canEditLeads');

  const filteredLeads = useMemo(() => {
    if (statusFilter === 'All') return tenantData.leads;
    return tenantData.leads.filter(lead => lead.status === statusFilter);
  }, [tenantData.leads, statusFilter]);

  const handleStatusChange = (leadId, newStatus) => {
    console.log(`Lead ${leadId} status changed to ${newStatus}`);
    setEditingLead(null);
  };

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Users className="w-5 h-5 text-gray-600" />
            <h2 className="text-lg font-semibold text-gray-900">Leads</h2>
            <Badge>{filteredLeads.length}</Badge>
          </div>
          
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-gray-500" />
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-3 py-1 border border-gray-300 rounded-lg text-sm"
            >
              <option>All</option>
              {LEAD_STATUSES.map(status => (
                <option key={status}>{status}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Phone</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
              {canEdit && <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredLeads.length === 0 ? (
              <tr>
                <td colSpan={canEdit ? 4 : 3} className="px-6 py-8 text-center text-gray-500">
                  No leads found
                </td>
              </tr>
            ) : (
              filteredLeads.map(lead => (
                <tr key={lead.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900">{lead.name}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{lead.phone}</td>
                  <td className="px-6 py-4">
                    {editingLead === lead.id && canEdit ? (
                      <select
                        value={lead.status}
                        onChange={(e) => handleStatusChange(lead.id, e.target.value)}
                        onBlur={() => setEditingLead(null)}
                        className="px-2 py-1 border border-gray-300 rounded text-xs"
                        autoFocus
                      >
                        {LEAD_STATUSES.map(status => (
                          <option key={status}>{status}</option>
                        ))}
                      </select>
                    ) : (
                      <Badge variant={lead.status}>{lead.status}</Badge>
                    )}
                  </td>
                  {canEdit && (
                    <td className="px-6 py-4">
                      <button
                        onClick={() => setEditingLead(lead.id)}
                        className="p-1 hover:bg-gray-200 rounded transition"
                        title="Edit status"
                      >
                        <Edit2 className="w-4 h-4 text-gray-600" />
                      </button>
                    </td>
                  )}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeadsModule;