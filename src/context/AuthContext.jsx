import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({
    tenant: 'org-a',
    role: 'admin', 
    name: 'Admin User'
  });

  const switchTenant = (tenantId) => {
    setCurrentUser(prev => ({ ...prev, tenant: tenantId }));
  };

  const switchRole = (role) => {
    setCurrentUser(prev => ({ 
      ...prev, 
      role, 
      name: role === 'admin' ? 'Admin User' : 'Agent User' 
    }));
  };

  const logout = () => {
    setCurrentUser({ tenant: 'org-a', role: 'admin', name: 'Admin User' });
  };

  return (
    <AuthContext.Provider value={{ currentUser, switchTenant, switchRole, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};