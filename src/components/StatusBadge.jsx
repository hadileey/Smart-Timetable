
import React from 'react';

const StatusBadge = ({ status }) => {
 const getColors = () => {
  switch (status) {
   case 'Upcoming':
    return 'bg-blue-100 text-blue-800 border-blue-200';
   case 'Ongoing':
    return 'bg-green-100 text-green-800 border-green-200 animate-pulse';
   case 'Completed':
    return 'bg-gray-100 text-gray-800 border-gray-200 opacity-70';
   default:
    return 'bg-purple-100 text-purple-800 border-purple-200';
  }
 };

 return (
  <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getColors()}`}>
   {status}
  </span>
 );
};

export default StatusBadge;
