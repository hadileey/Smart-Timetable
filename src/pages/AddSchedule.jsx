
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AddScheduleForm from '../components/AddScheduleForm';
import { addSchedule } from '../utils/storage';
import { FiPlusCircle } from 'react-icons/fi';

const AddSchedule = () => {
 useEffect(() => {
  document.title = "Add Schedule | Smart Timetable";
 }, []);

 const navigate = useNavigate();

 const handleSave = (newSchedule) => {
  addSchedule(newSchedule);
  navigate('/dashboard');
 };

 return (
  <div className="max-w-4xl pt-6 h-full">
   <div className="mb-6 flex items-center gap-3">
    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#4A3B7A]">
     <FiPlusCircle className="text-xl" />
    </div>
    <div>
     <h1 className="text-2xl font-bold text-gray-800">Create New Schedule</h1>
     <p className="text-gray-500 text-sm mt-0.5">Fill out the details below to add a new class to your timetable.</p>
    </div>
   </div>

   <div className="flex">
    <AddScheduleForm onSave={handleSave} onCancel={() => navigate('/dashboard')} />
   </div>
  </div>
 );
};

export default AddSchedule;
