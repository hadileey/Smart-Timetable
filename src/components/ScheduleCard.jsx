
import React from 'react';
import { FiEdit2, FiTrash2, FiClock, FiMapPin, FiCalendar, FiBookOpen } from 'react-icons/fi';
import StatusBadge from './StatusBadge';
import { getClassStatus } from '../utils/timeHelpers';

const ScheduleCard = ({ schedule, onDelete, onEdit }) => {
 const { id, subject, day, startTime, endTime, location, notes } = schedule;
 
 const status = getClassStatus(day, startTime, endTime);

 const getTheme = () => {
  const themes = [
   { bg: 'bg-[#2ED47A]', text: 'text-white', iconBg: 'bg-white/20', hover: 'hover:bg-white/30' },
   { bg: 'bg-[#4A3B7A]', text: 'text-white', iconBg: 'bg-white/20', hover: 'hover:bg-white/30' }, 
   { bg: 'bg-[#FFC312]', text: 'text-white', iconBg: 'bg-white/20', hover: 'hover:bg-white/30' }, 
   { bg: 'bg-[#FF7E8B]', text: 'text-white', iconBg: 'bg-white/20', hover: 'hover:bg-white/30' }, 
   { bg: 'bg-[#00D2D3]', text: 'text-white', iconBg: 'bg-white/20', hover: 'hover:bg-white/30' }, 
  ];
  const index = subject.charCodeAt(0) % themes.length;
  return themes[index];
 };

 const theme = getTheme();

 return (
  <div className={`${theme.bg} rounded-2xl p-5 transform hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full text-white relative overflow-hidden group border-0`}>

   <div className="absolute top-0 right-0 w-24 h-24 bg-white opacity-5 rounded-bl-full pointer-events-none transform translate-x-4 -translate-y-4"></div>

   <div className="flex justify-between items-start mb-4 gap-2 relative z-10">
    <div className="flex flex-col items-center">
     <div className={`w-12 h-12 ${theme.iconBg} flex flex-col justify-center items-center rounded-xl text-white mb-3 `}>
      <span className="text-xs font-bold  google">{day.substring(0, 3)}</span>
     </div>
    </div>
    
    <div className="flex space-x-1 flex-shrink-0">
     <button 
      onClick={() => onEdit(schedule)}
      className={`p-1.5 text-white/70 ${theme.hover} rounded-lg transition-colors`}
      title="Edit"
     >
      <FiEdit2 size={16} />
     </button>
     <button 
      onClick={() => onDelete(id)}
      className={`p-1.5 text-white/70 ${theme.hover} rounded-lg transition-colors`}
      title="Delete"
     >
      <FiTrash2 size={16} />
     </button>
    </div>
   </div>

   <div className="text-center w-full mb-3 relative z-10 flex-1 flex flex-col justify-center">
    <h3 className="text-lg font-bold leading-snug mx-auto mb-1 line-clamp-2">
     {subject}
    </h3>
    <p className="text-xs opacity-80 font-medium">
     {location || 'No Location'}
    </p>
   </div>

   <div className="mt-auto pt-3 border-t border-white/20 relative z-10 text-center">
    <div className="inline-flex items-center gap-2 font-bold text-sm bg-white/10 px-3 py-1.5 rounded-lg ">
     <img src="https://img.icons8.com/?size=100&id=2YPST59G2xJZ&format=png&color=000000" alt="clock"  className='w-5'/>
     <span className='google'>{startTime} - {endTime}</span>
    </div>
   </div>
  </div>
 );
};

export default ScheduleCard;
