
import React, { useState, useEffect } from "react";
import ScheduleCard from "../components/ScheduleCard";
import SearchBar from "../components/SearchBar";
import AddScheduleForm from "../components/AddScheduleForm";
import { getSchedules, deleteSchedule, updateSchedule } from "../utils/storage";
import { sortSchedulesByTime, getClassStatus } from "../utils/timeHelpers";
import { FiInbox, FiFilter, FiActivity } from "react-icons/fi";

const Dashboard = () => {
 useEffect(() => {
  document.title = "Dashboard | Smart Timetable";
 }, []);

 const [schedules, setSchedules] = useState([]);
 const [filteredSchedules, setFilteredSchedules] = useState([]);
 const [searchTerm, setSearchTerm] = useState("");
 const [filterDay, setFilterDay] = useState("All");
 const [editingSchedule, setEditingSchedule] = useState(null);

 useEffect(() => {
  loadSchedules();
 }, []);

 const loadSchedules = () => {
  const data = getSchedules();
  const sorted = sortSchedulesByTime(data);
  setSchedules(sorted);
  setFilteredSchedules(sorted);
 };

 useEffect(() => {
  let result = schedules;

  if (searchTerm) {
   const lowercasedTerm = searchTerm.toLowerCase();
   result = result.filter(
    (s) =>
     s.subject.toLowerCase().includes(lowercasedTerm) ||
     s.day.toLowerCase().includes(lowercasedTerm) ||
     (s.location && s.location.toLowerCase().includes(lowercasedTerm))
   );
  }

  if (filterDay !== "All") {
   result = result.filter((s) => s.day === filterDay);
  }

  setFilteredSchedules(sortSchedulesByTime(result));
 }, [searchTerm, filterDay, schedules]);

 const handleDelete = (id) => {
  if (window.confirm("Are you sure you want to delete this schedule?")) {
   deleteSchedule(id);
   loadSchedules();
  }
 };

 const dayOptions = ["All", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

 return (
  <div className="w-full relative h-full flex flex-col">
   <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
    <div>
     <h1 className="text-xl font-bold text-gray-800 flex items-center gap-2">
      <FiActivity className="text-[#4A3B7A]" />
      My Dashboard
     </h1>
     <p className="text-gray-500 mt-1 max-w-sm text-xs">Manage all your academic schedules in one place.</p>
    </div>

    <div className="w-full md:w-auto flex items-center gap-3">
     <div className="flex-1 md:w-64">
      <SearchBar onSearch={setSearchTerm} />
     </div>
     <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg border border-gray-100 flex-shrink-0 cursor-pointer hover:bg-gray-50 transition-colors">
      <FiFilter className="text-[#4A3B7A] text-sm" />
      <select
       value={filterDay}
       onChange={(e) => setFilterDay(e.target.value)}
       className="bg-transparent border-0 focus:ring-0 text-sm text-gray-700 font-semibold py-0.5 outline-none cursor-pointer"
      >
       {dayOptions.map(day => (
        <option key={day} value={day}>{day}</option>
       ))}
      </select>
     </div>
    </div>
   </div>

   {editingSchedule ? (
    <div className="mb-12">
     <AddScheduleForm 
      initialData={editingSchedule} 
      onSave={(updated) => {
       updateSchedule(updated);
       setEditingSchedule(null);
       loadSchedules();
      }}
      onCancel={() => setEditingSchedule(null)}
     />
    </div>
   ) : (
    <div className="relative flex-1">
     {filteredSchedules.length > 0 ? (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
       {filteredSchedules.map((schedule) => (
        <ScheduleCard
         key={schedule.id}
         schedule={schedule}
         onDelete={handleDelete}
         onEdit={setEditingSchedule}
        />
       ))}
      </div>
     ) : (
      <div className="flex flex-col items-center justify-center p-16 text-center bg-white rounded-2xl border border-gray-100 border-dashed h-64">
       <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4">
        <FiInbox className="text-gray-300 text-3xl" />
       </div>
       <h3 className="text-lg font-bold text-gray-700 mb-1">No Schedules Found</h3>
       <p className="text-gray-500 max-w-sm text-sm">
        You haven't added any schedules yet, or none match your search criteria. Add a new class to get started.
       </p>
      </div>
     )}
    </div>
   )}
  </div>
 );
};

export default Dashboard;
