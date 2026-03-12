
import React from 'react';
import { getSchedules } from '../utils/storage';
import { FiClock, FiMapPin } from 'react-icons/fi';

const TimetableGrid = () => {
 const schedules = getSchedules();
 const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

 const timeSlots = Array.from({ length: 11 }, (_, i) => {
  const hour = i + 8;
  return `${hour.toString().padStart(2, '0')}:00`;
 });

 const getCellClasses = (day, time) => {
  return schedules.filter(s => {
   const classStart = parseInt(s.startTime.split(':')[0]);
   const classEnd = parseInt(s.endTime.split(':')[0]);
   const slotHour = parseInt(time.split(':')[0]);
   
   return s.day === day && slotHour >= classStart && slotHour < classEnd;
  });
 };

 const colors = [
  'bg-[#4A3B7A] text-white',
  'bg-[#FF7E8B] text-white',
  'bg-[#00D2D3] text-white',
  'bg-[#FFC312] text-white',
  'bg-[#7A69B5] text-white',
 ];

 return (
  <div className="bg-white rounded-xl border border-gray-100 overflow-hidden flex-1 flex flex-col relative w-full overflow-x-auto">
   <div className="min-w-[800px] w-full flex-1">
    <div className="grid grid-cols-6 border-b border-gray-100 bg-white">
     <div className="p-4 flex items-center justify-center border-r border-gray-100 font-semibold text-gray-500 text-sm">
      <FiClock className="mr-2" /> Time
     </div>
     {days.map(day => (
      <div key={day} className="p-4 text-center font-semibold text-gray-700 border-r border-gray-100 last:border-0 text-sm">
       {day}
      </div>
     ))}
    </div>

    {timeSlots.map((time, index) => (
     <div key={time} className={`grid grid-cols-6 border-b border-gray-50 transition-colors hover:bg-gray-50/50 ${index === timeSlots.length - 1 ? 'border-b-0' : ''}`}>

      <div className="p-3 border-r border-gray-100 text-xs font-medium text-gray-400 flex items-center justify-center bg-gray-50/30">
       {time}
      </div>
      
      {days.map((day, dayIndex) => {
       const classesForSlot = getCellClasses(day, time);
       return (
        <div key={`${day}-${time}`} className="p-1.5 border-r border-gray-100 last:border-r-0 min-h-[80px]">
         {classesForSlot.map((cls, idx) => {
          const colorClass = colors[(idx + dayIndex) % colors.length];
          return (
           <div key={cls.id} className={`p-2.5 rounded-lg ${colorClass} mb-1 h-full flex flex-col justify-between overflow-hidden cursor-default whitespace-normal`}>
            <div className="font-semibold text-xs leading-tight line-clamp-2">{cls.subject}</div>
            <div className="mt-1 flex flex-col space-y-0.5 opacity-90">
              <span className="font-medium text-[10px]">{cls.startTime} - {cls.endTime}</span>
              {cls.location && (
               <span className="flex items-center text-[10px] mt-0.5">
                <FiMapPin className="mr-1" />{cls.location}
               </span>
              )}
            </div>
           </div>
          );
         })}
        </div>
       );
      })}
     </div>
    ))}
   </div>
  </div>
 );
};

export default TimetableGrid;
