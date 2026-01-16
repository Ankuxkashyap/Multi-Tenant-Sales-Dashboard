import React from 'react';
import { PhoneCall } from 'lucide-react';
import { useTenantData } from '../../hooks/useTenantData';
import Badge from '../../components/common/Badge';

const CallLogsModule = () => {
  const { tenantData } = useTenantData();

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <PhoneCall className="w-5 h-5 text-gray-600" />
          <h2 className="text-lg font-semibold text-gray-900">Call Logs</h2>
          <Badge>{tenantData.callLogs.length}</Badge>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Lead Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Time</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Duration</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Outcome</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {tenantData.callLogs.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-6 py-8 text-center text-gray-500">
                  No call logs found
                </td>
              </tr>
            ) : (
              tenantData.callLogs.map(log => (
                <tr key={log.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{log.leadName}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{log.date}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{log.time}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{log.duration}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{log.outcome}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CallLogsModule;