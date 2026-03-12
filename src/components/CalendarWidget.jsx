import React, { useState } from 'react';
import { FiChevronLeft, FiChevronRight, FiClock, FiMapPin } from 'react-icons/fi';
import { sortSchedulesByTime } from '../utils/timeHelpers';

const CalendarWidget = ({ schedules }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const shortDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const days = new Date(year, month + 1, 0).getDate();
    return days;
  };

  const getFirstDayOfMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month, 1).getDay();
  };

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const renderCells = () => {
    const daysInMonth = getDaysInMonth(currentMonth);
    const firstDay = getFirstDayOfMonth(currentMonth);
    const cells = [];

    for (let i = 0; i < firstDay; i++) {
      cells.push(<div key={`empty-${i}`} className="h-10"></div>);
    }

    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), i);
      const isSelected = selectedDate && date.toDateString() === selectedDate.toDateString();
      const isToday = new Date().toDateString() === date.toDateString();
      
      const dayName = daysOfWeek[date.getDay()];
      const daySchedules = schedules.filter(s => s.day === dayName);
      const hasEvents = daySchedules.length > 0;

      cells.push(
        <div
          key={`day-${i}`}
          onClick={() => setSelectedDate(date)}
          className={`h-10 w-10 mx-auto flex items-center justify-center rounded-full cursor-pointer transition-all border border-transparent ${
            isSelected 
              ? 'bg-[#4A3B7A] text-white' 
              : isToday 
                ? 'bg-[#F4F6FA] text-[#4A3B7A] font-bold border-[#4A3B7A]/20'
                : 'hover:bg-gray-100 text-gray-700'
          } relative`}
        >
          <span>{i}</span>
          {hasEvents && !isSelected && (
            <span className="absolute bottom-1 w-1.5 h-1.5 rounded-full bg-[#00D2D3]"></span>
          )}
          {hasEvents && isSelected && (
            <span className="absolute bottom-1 w-1.5 h-1.5 rounded-full bg-white"></span>
          )}
        </div>
      );
    }

    return cells;
  };

  const selectedDayName = daysOfWeek[selectedDate.getDay()];
  let selectedDayEvents = schedules.filter(s => s.day === selectedDayName);
  selectedDayEvents = sortSchedulesByTime(selectedDayEvents);

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 flex flex-col h-full">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-gray-800">
          {currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' })}
        </h3>
        <div className="flex gap-2">
          <button onClick={prevMonth} className="p-2 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors text-gray-600">
            <FiChevronLeft />
          </button>
          <button onClick={nextMonth} className="p-2 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors text-gray-600">
            <FiChevronRight />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-y-4 gap-x-1 mb-6">
        {shortDays.map(day => (
          <div key={day} className="text-center text-xs font-semibold text-gray-400 uppercase tracking-wider">
            {day}
          </div>
        ))}
        {renderCells()}
      </div>

      <div className="mt-auto pt-6 border-t border-gray-100">
        <h4 className="text-sm font-semibold text-gray-800 mb-4 flex items-center justify-between">
          <span>Events for {selectedDate.toLocaleDateString('default', { month: 'short', day: 'numeric', weekday: 'short'})}</span>
          <span className="bg-[#f4f6fa] text-[#4A3B7A] px-2 py-0.5 rounded-md text-xs">{selectedDayEvents.length}</span>
        </h4>
        
        {selectedDayEvents.length > 0 ? (
          <div className="space-y-3 max-h-48 overflow-y-auto pr-1 custom-scrollbar">
            {selectedDayEvents.map(event => (
              <div key={event.id} className="flex flex-col p-3 rounded-xl border border-gray-100 bg-[#fefeff] hover:border-[#4A3B7A]/30 transition-colors">
                <div className="flex justify-between items-start mb-1">
                  <h5 className="font-bold text-gray-800 text-sm">{event.subject}</h5>
                </div>
                <div className="flex items-center gap-3 text-xs text-gray-500 mt-1">
                  <span className="flex items-center gap-1 font-medium bg-[#f4f6fa] px-2 py-1 rounded text-[#4A3B7A]">
                    <FiClock size={12} />
                    {event.startTime} - {event.endTime}
                  </span>
                  {event.location && (
                    <span className="flex items-center gap-1">
                      <FiMapPin size={12} />
                      <span className="truncate max-w-[100px]">{event.location}</span>
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-6 text-gray-400 text-sm bg-gray-50 rounded-xl border border-dashed border-gray-200">
            No events scheduled for this day.
          </div>
        )}
      </div>
    </div>
  );
};

export default CalendarWidget;