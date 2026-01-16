import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import Badge from '../common/Badge';

const RoleSwitcher = () => {
  const { currentUser, switchRole } = useAuth();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="flex items-center gap-2 px-3 py-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
      >
        <span className="text-sm">{currentUser.name}</span>
        <Badge variant={currentUser.role}>{currentUser.role}</Badge>
        <ChevronDown className="w-4 h-4" />
      </button>
      {showMenu && (
        <div className="absolute top-full mt-2 right-0 bg-white border rounded-lg shadow-lg z-10 min-w-45">
          <button
            onClick={() => { switchRole('admin'); setShowMenu(false); }}
            className="w-full px-4 py-2 text-left hover:bg-gray-50 text-sm"
          >
            Switch to Admin
          </button>
          <button
            onClick={() => { switchRole('agent'); setShowMenu(false); }}
            className="w-full px-4 py-2 text-left hover:bg-gray-50 text-sm"
          >
            Switch to Agent
          </button>
        </div>
      )}
    </div>
  );
};

export default RoleSwitcher;