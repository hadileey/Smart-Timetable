// src/utils/timeHelpers.js

const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

export const getCurrentDay = () => daysOfWeek[new Date().getDay()];

/**
 * Parses time format "HH:MM" relative to today.
 */
export const getTimeAsDate = (timeString) => {
  const [hours, minutes] = timeString.split(":").map(Number);
  const date = new Date();
  date.setHours(hours, minutes, 0, 0);
  return date;
};

/**
 * Returns the status of a class: "Upcoming", "Ongoing", "Completed", or "Passed"
 */
export const getClassStatus = (day, startTime, endTime) => {
  const currentDay = getCurrentDay();
  const todayIndex = daysOfWeek.indexOf(currentDay);
  const classDayIndex = daysOfWeek.indexOf(day);

  if (classDayIndex < todayIndex) return "Completed";
  if (classDayIndex > todayIndex) return "Upcoming";

  // It's today
  const now = new Date();
  const start = getTimeAsDate(startTime);
  const end = getTimeAsDate(endTime);

  if (now > end) return "Completed";
  if (now >= start && now <= end) return "Ongoing";
  return "Upcoming";
};

/**
 * Sorting items by time
 */
export const sortSchedulesByTime = (schedules) => {
  return schedules.sort((a, b) => {
    const timeA = a.startTime;
    const timeB = b.startTime;
    return timeA.localeCompare(timeB);
  });
};