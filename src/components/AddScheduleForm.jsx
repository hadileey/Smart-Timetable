
import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { FiSave, FiX, FiCheckCircle } from "react-icons/fi";

const AddScheduleForm = ({ onSave, initialData, onCancel }) => {
 const [formData, setFormData] = useState({
  subject: "",
  day: "Monday",
  startTime: "",
  endTime: "",
  location: "",
  notes: "",
 });
 const [successMsg, setSuccessMsg] = useState(false);

 useEffect(() => {
  if (initialData) {
   setFormData(initialData);
  }
 }, [initialData]);

 const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData((prev) => ({ ...prev, [name]: value }));
 };

 const handleSubmit = (e) => {
  e.preventDefault();
  if (!formData.subject || !formData.day || !formData.startTime || !formData.endTime) {
   alert("Please fill out all required fields.");
   return;
  }

  const payload = initialData ? formData : { ...formData, id: uuidv4() };
  
  setSuccessMsg(true);
  setTimeout(() => {
   onSave(payload);
   setSuccessMsg(false);
  }, 1200);
 };

 const dayOptions = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

 return (
  <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 max-w-2xl w-full">
   
   <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center border-b border-gray-50 pb-4">
    {initialData ? "Edit Schedule" : "Add New Schedule"}
   </h2>
   
   {successMsg && (
    <div className="mb-6 p-3 bg-green-50 border border-green-100 text-green-700 text-sm rounded-lg flex items-center">
     <FiCheckCircle className="mr-2 text-lg" />
     Schedule successfully saved!
    </div>
   )}

   <form onSubmit={handleSubmit} className="space-y-5">
    <div className="space-y-1.5">
     <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Subject Name *</label>
     <input
      type="text"
      name="subject"
      value={formData.subject}
      onChange={handleChange}
      placeholder="e.g., Computer Science 101"
      className="w-full px-4 py-2.5 bg-gray-50 rounded-lg border border-gray-100 focus:bg-white focus:ring-1 focus:ring-[#4A3B7A]/30 focus:border-[#4A3B7A]/30 outline-none transition-all text-sm font-medium"
      required
     />
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
     <div className="space-y-1.5">
      <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Day of Week *</label>
      <select
       name="day"
       value={formData.day}
       onChange={handleChange}
       className="w-full px-4 py-2.5 bg-gray-50 rounded-lg border border-gray-100 focus:bg-white focus:ring-1 focus:ring-[#4A3B7A]/30 focus:border-[#4A3B7A]/30 outline-none transition-all text-sm font-medium"
      >
       {dayOptions.map(day => (
        <option key={day} value={day}>{day}</option>
       ))}
      </select>
     </div>
     <div className="space-y-1.5">
      <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Location</label>
      <input
       type="text"
       name="location"
       value={formData.location}
       onChange={handleChange}
       placeholder="e.g., Room 402"
       className="w-full px-4 py-2.5 bg-gray-50 rounded-lg border border-gray-100 focus:bg-white focus:ring-1 focus:ring-[#4A3B7A]/30 focus:border-[#4A3B7A]/30 outline-none transition-all text-sm font-medium"
      />
     </div>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
     <div className="space-y-1.5">
      <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Start Time *</label>
      <input
       type="time"
       name="startTime"
       value={formData.startTime}
       onChange={handleChange}
       className="w-full px-4 py-2.5 bg-gray-50 rounded-lg border border-gray-100 focus:bg-white focus:ring-1 focus:ring-[#4A3B7A]/30 focus:border-[#4A3B7A]/30 outline-none transition-all text-sm font-medium"
       required
      />
     </div>

     <div className="space-y-1.5">
      <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">End Time *</label>
      <input
       type="time"
       name="endTime"
       value={formData.endTime}
       onChange={handleChange}
       className="w-full px-4 py-2.5 bg-gray-50 rounded-lg border border-gray-100 focus:bg-white focus:ring-1 focus:ring-[#4A3B7A]/30 focus:border-[#4A3B7A]/30 outline-none transition-all text-sm font-medium"
       required
      />
     </div>
    </div>

    <div className="space-y-1.5">
     <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Notes (Optional)</label>
     <textarea
      name="notes"
      value={formData.notes}
      onChange={handleChange}
      placeholder="e.g., Don't forget laptop, bring assignment..."
      rows="3"
      className="w-full px-4 py-2.5 bg-gray-50 rounded-lg border border-gray-100 focus:bg-white focus:ring-1 focus:ring-[#4A3B7A]/30 focus:border-[#4A3B7A]/30 outline-none transition-all text-sm font-medium resize-none"
     ></textarea>
    </div>

    <div className="flex gap-3 pt-2">
     <button
      type="submit"
      className="flex-1 bg-[#4A3B7A] hover:bg-[#3d3166] text-white font-semibold py-2.5 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 text-sm"
     >
      <FiSave />
      Save Schedule
     </button>
     
     {onCancel && (
      <button
       type="button"
       onClick={onCancel}
       className="px-6 bg-white border border-gray-200 hover:bg-gray-50 text-gray-600 font-semibold py-2.5 rounded-lg transition-all flex items-center justify-center gap-2 text-sm"
      >
       Cancel
      </button>
     )}
    </div>
   </form>
  </div>
 );
};

export default AddScheduleForm;
