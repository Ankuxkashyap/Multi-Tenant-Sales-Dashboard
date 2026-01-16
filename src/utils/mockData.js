export const MOCK_DATA = {
  'org-a': {
    name: 'Organization A',
    leads: [
      { id: 1, name: 'John Smith', phone: '+1-555-0101', status: 'New' },
      { id: 2, name: 'Sarah Johnson', phone: '+1-555-0102', status: 'Contacted' },
      { id: 3, name: 'Mike Wilson', phone: '+1-555-0103', status: 'Qualified' },
      { id: 4, name: 'Emily Brown', phone: '+1-555-0104', status: 'Lost' },
    ],
    callLogs: [
      { id: 1, leadName: 'John Smith', date: '2025-01-15', time: '10:30 AM', duration: '5m 23s', outcome: 'Interested' },
      { id: 2, leadName: 'Sarah Johnson', date: '2025-01-14', time: '02:15 PM', duration: '12m 45s', outcome: 'Follow-up needed' },
      { id: 3, leadName: 'Mike Wilson', date: '2025-01-13', time: '11:00 AM', duration: '8m 10s', outcome: 'Not interested' },
    ]
  },
  'org-b': {
    name: 'Organization B',
    leads: [
      { id: 1, name: 'David Lee', phone: '+1-555-0201', status: 'New' },
      { id: 2, name: 'Lisa Anderson', phone: '+1-555-0202', status: 'Contacted' },
      { id: 3, name: 'Tom Martinez', phone: '+1-555-0203', status: 'Qualified' },
    ],
    callLogs: [
      { id: 1, leadName: 'David Lee', date: '2025-01-16', time: '09:00 AM', duration: '3m 15s', outcome: 'Voicemail left' },
      { id: 2, leadName: 'Lisa Anderson', date: '2025-01-15', time: '03:30 PM', duration: '15m 20s', outcome: 'Demo scheduled' },
    ]
  }
};

export const LEAD_STATUSES = ['New', 'Contacted', 'Qualified', 'Lost'];