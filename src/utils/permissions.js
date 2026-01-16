export const PERMISSIONS = {
  admin: {
    canEditLeads: true,
    canViewSettings: true,
    canDeleteLeads: true,
    canExportData: true,
  },
  agent: {
    canEditLeads: false,
    canViewSettings: false,
    canDeleteLeads: false,
    canExportData: false,
  }
};

export const hasPermission = (role, permission) => {
  return PERMISSIONS[role]?.[permission] || false;
};