import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { MOCK_DATA } from '../../utils/mockData';

const TenantSwitcher = () => {
  const { currentUser, switchTenant } = useAuth();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition"
      >
        <span className="text-sm font-medium">{MOCK_DATA[currentUser.tenant].name}</span>
        <ChevronDown className="w-4 h-4" />
      </button>
      {showMenu && (
        <div className="absolute top-full mt-2 bg-white border rounded-lg shadow-lg z-10 min-w-[200px]">
          <button
            onClick={() => { switchTenant('org-a'); setShowMenu(false); }}
            className="w-full px-4 py-2 text-left hover:bg-gray-50 text-sm"
          >
            Organization A
          </button>
          <button
            onClick={() => { switchTenant('org-b'); setShowMenu(false); }}
            className="w-full px-4 py-2 text-left hover:bg-gray-50 text-sm"
          >
            Organization B
          </button>
        </div>
      )}
    </div>
  );
};

export default TenantSwitcher;