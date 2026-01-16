import React from 'react';

const Badge = ({ children, variant = 'default' }) => {
  const colors = {
    default: 'bg-gray-100 text-gray-800',
    New: 'bg-blue-100 text-blue-800',
    Contacted: 'bg-yellow-100 text-yellow-800',
    Qualified: 'bg-green-100 text-green-800',
    Lost: 'bg-red-100 text-red-800',
    admin: 'bg-purple-100 text-purple-800',
    agent: 'bg-orange-100 text-orange-800'
  };

  return (
    <span className={`px-2 py-1 rounded text-xs font-medium ${colors[variant] || colors.default}`}>
      {children}
    </span>
  );
};

export default Badge;