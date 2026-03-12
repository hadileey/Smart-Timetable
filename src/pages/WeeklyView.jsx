
import React, { useEffect } from 'react';
import TimetableGrid from '../components/TimetableGrid';
import { FiCalendar } from 'react-icons/fi';

const WeeklyView = () => {
 useEffect(() => {
  document.title = "Weekly View | Smart Timetable";
 }, []);

 return (
  <div className="h-full flex flex-col pt-2">
   <div className="mb-6 flex items-center gap-3">
    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#4A3B7A]">
     <FiCalendar className="text-xl" />
    </div>
    <div>
     <h1 className="text-2xl font-bold text-gray-800">Weekly Timetable</h1>
     <p className="text-gray-500 text-sm mt-0.5">A visual overview of your entire week's schedule.</p>
    </div>
   </div>

   <div className="bg-white p-6 rounded-2xl border border-gray-100 flex-1 overflow-hidden flex flex-col google">
    <TimetableGrid />
   </div>
  </div>
 );
};

export default WeeklyView;
