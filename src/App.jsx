import React, { useState } from 'react';
import { AuthProvider } from './context/AuthContext';
import Header from './components/layout/Header';
import Navigation from './components/layout/Navigation';
import LeadsModule from './modules/leads/LeadsModule';
import CallLogsModule from './modules/callLogs/CallLogsModule';
import SettingsModule from './modules/settings/SettingsModule';

const App = () => {
  const [activeTab, setActiveTab] = useState('leads');

  return (
    <AuthProvider>
      <div className="min-h-screen bg-gray-50">
        <Header />
        
        <div className="max-w-7xl mx-auto px-6 py-8">
          <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />

          {activeTab === 'leads' && <LeadsModule />}
          {activeTab === 'calls' && <CallLogsModule />}
          {activeTab === 'settings' && <SettingsModule />}
        </div>
      </div>
    </AuthProvider>
  );
};

export default App;