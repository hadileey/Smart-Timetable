// src/pages/Home.jsx
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiBookOpen, FiCalendar, FiClock } from 'react-icons/fi'; 
import { getSchedules } from '../utils/storage';
import { getCurrentDay, getClassStatus } from '../utils/timeHelpers';
import CalendarWidget from '../components/CalendarWidget';

const Home = () => {
 useEffect(() => {
  document.title = "Home | Smart Timetable";
 }, []);

 const schedules = getSchedules();
 const totalClasses = schedules.length;

 const todayClasses = schedules.filter(s => s.day === getCurrentDay());

 const upcomingClasses = schedules.filter(s => {
  const status = getClassStatus(s.day, s.startTime, s.endTime);
  return status === "Upcoming" || status === "Ongoing";
 }).length;

 return (
  <div className="space-y-6">
   <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div className="bg-white rounded-2xl p-6 border border-gray-100 flex items-center justify-between group hover: transition-">
     <div className="flex items-center gap-4">
      <div className="w-14 h-14 rounded-xl bg-orange-100 text-orange-500 flex items-center justify-center text-2xl">
       <img src="https://img.icons8.com/?size=100&id=qk6EKKDxdVwc&format=png&color=000000" alt="book" />
      </div>
      <div>
       <p className="text-gray-500 text-sm font-medium">Total Classes</p>
       <h3 className="text-2xl font-bold text-gray-800">{totalClasses}</h3>
      </div>
     </div>
     <div className="h-10 w-1 bg-gray-100 rounded-full group-hover:bg-orange-200 transition-colors"></div>
    </div>

    <div className="bg-white rounded-2xl p-6 border border-gray-100 flex items-center justify-between group hover: transition-">
     <div className="flex items-center gap-4">
      <div className="w-14 h-14 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center text-2xl">
      <img src="https://img.icons8.com/?size=100&id=2YPST59G2xJZ&format=png&color=000000" alt="clock" />
      </div>
      <div>
       <p className="text-gray-500 text-sm font-medium">Upcoming Next</p>
       <h3 className="text-2xl font-bold text-gray-800">{upcomingClasses}</h3>
      </div>
     </div>
     <div className="h-10 w-1 bg-gray-100 rounded-full group-hover:bg-purple-200 transition-colors"></div>
    </div>

    <div className="bg-white rounded-2xl p-6 border border-gray-100 flex items-center justify-between group hover: transition-">
     <div className="flex items-center gap-4">
      <div className="w-14 h-14 rounded-xl bg-emerald-100 text-emerald-500 flex items-center justify-center text-2xl">
       <img src="https://img.icons8.com/?size=100&id=UpnwZDa50fGv&format=png&color=000000" alt="calendar" />
      </div>
      <div>
       <p className="text-gray-500 text-sm font-medium">Today's Content</p>
       <h3 className="text-2xl font-bold text-gray-800">{todayClasses.length}</h3>
      </div>
     </div>
     <div className="h-10 w-1 bg-gray-100 rounded-full group-hover:bg-emerald-200 transition-colors"></div>
    </div>
   </div>

   <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
    <div className="bg-white rounded-2xl p-8 border border-gray-100">
     <h2 className="text-2xl font-bold text-gray-800 mb-4">Smart Timetable Organizer</h2>
     <p className="text-gray-500 mb-8 leading-relaxed max-w-lg">
      Never miss a class again. Manage schedules, track upcoming lectures, and stay productive. An elegant solution designed for students who want to stay top of their daily tasks.
     </p>
     
     <div className="flex flex-wrap items-center gap-4">
      <Link 
       to="/dashboard" 
       className="bg-[#4A3B7A] text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#3d3166] transition-colors flex items-center gap-2"
      >
       View Dashboard
       <FiArrowRight />
      </Link>
      <Link 
       to="/add" 
       className="bg-white border-2 border-[#4A3B7A] text-[#4A3B7A] px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#f4f6fa] transition-colors"
      >
       Add Schedule
      </Link>
     </div>
    </div>

    <CalendarWidget schedules={schedules} />
   </div>
  </div>
 );
};

export default Home;
