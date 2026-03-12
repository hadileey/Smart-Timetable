// src/utils/storage.js
import { v4 as uuidv4 } from "uuid";
import { mockSchedules } from "../data/mockSchedules.js";

const STORAGE_KEY = "sh_schedules";

export const getSchedules = () => {
  const data = localStorage.getItem(STORAGE_KEY);
  if (!data) {
    // initialize with mock data if empty
    saveSchedules(mockSchedules);
    return mockSchedules;
  }
  return JSON.parse(data);
};

export const saveSchedules = (schedules) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(schedules));
};

export const addSchedule = (schedule) => {
  const schedules = getSchedules();
  const newSchedule = { ...schedule, id: uuidv4() };
  schedules.push(newSchedule);
  saveSchedules(schedules);
  return newSchedule;
};

export const updateSchedule = (updatedSchedule) => {
  const schedules = getSchedules();
  const index = schedules.findIndex((s) => s.id === updatedSchedule.id);
  if (index !== -1) {
    schedules[index] = updatedSchedule;
    saveSchedules(schedules);
  }
};

export const deleteSchedule = (id) => {
  const schedules = getSchedules();
  const filtered = schedules.filter((s) => s.id !== id);
  saveSchedules(filtered);
};