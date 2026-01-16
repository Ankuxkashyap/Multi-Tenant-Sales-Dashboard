import { useMemo } from 'react';
import { useAuth } from '../context/AuthContext';
import { MOCK_DATA } from '../utils/mockData';

export const useTenantData = () => {
  const { currentUser } = useAuth();
  
  const tenantData = useMemo(() => {
    return MOCK_DATA[currentUser.tenant];
  }, [currentUser.tenant]);

  return { tenantData, currentUser };
};