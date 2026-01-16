import React from 'react';
import { LogOut } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import TenantSwitcher from '../auth/TenantSwitcher';
import RoleSwitcher from '../auth/RoleSwitcher';

const Header = () => {
  const { logout } = useAuth();

  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h1 className="text-xl font-bold text-gray-900">Sales Dashboard</h1>
          <TenantSwitcher />
        </div>

        <div className="flex items-center gap-4">
          <RoleSwitcher />
          <button
            onClick={logout}
            className="p-2 hover:bg-gray-100 rounded-lg transition"
            title="Logout"
          >
            <LogOut className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;