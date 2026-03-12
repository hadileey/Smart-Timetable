// src/data/mockSchedules.js
import { v4 as uuidv4 } from "uuid";

export const mockSchedules = [
  {
    id: uuidv4(),
    subject: "React Fundamentals",
    day: "Monday",
    startTime: "09:00",
    endTime: "11:00",
    location: "Room 101",
    notes: "Bring your laptop.",
  },
  {
    id: uuidv4(),
    subject: "Advanced Tailwind",
    day: "Wednesday",
    startTime: "13:00",
    endTime: "15:00",
    location: "Lab 2",
    notes: "Review gradients and glassmorphism.",
  },
];