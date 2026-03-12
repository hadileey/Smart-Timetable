# 🎓 Smart Timetable & Schedule Organizer

A modern and responsive **Smart Timetable & Schedule Organizer** built to help students manage their academic schedules efficiently.
This project was developed during the **Texperia 2K26 Appathon Event at SNS College of Technology**.

The application allows users to organize their weekly timetable, track upcoming classes in real time, and visualize their entire schedule in a clean and intuitive interface.

---

## 🚀 Project Overview

Student life can be chaotic with multiple classes, assignments, and meetings happening throughout the week. Traditional scheduling methods such as paper timetables or complex calendar applications often fail to provide a simple and efficient solution.

**Smart Timetable Organizer** provides a lightweight and visually appealing scheduling tool that helps students:

* Manage their weekly class timetable
* Track upcoming and ongoing lectures
* Quickly add, edit, or remove schedules
* Visualize their entire week in an interactive layout

---

## ✨ Key Features

### 📊 Interactive Dashboard

Displays all scheduled classes using clean, color-coded cards for easy visual identification.

### ⏱ Smart Time Tracking

Automatically categorizes classes as:

* **Upcoming**
* **Ongoing**
* **Completed**

based on the current system time.

### 📅 Interactive Calendar

Dates with scheduled classes are highlighted. Clicking a date instantly displays the events planned for that day.

### ✏️ Schedule Management

Users can easily:

* Add new schedules
* Edit existing schedules
* Delete schedules

### 📆 Weekly Timetable View

A visual weekly grid that displays classes from **Monday to Sunday**, similar to a traditional academic timetable.

### ⚡ Instant Data Storage

All data is stored using **browser localStorage**, ensuring:

* Fast performance
* No loading delays
* Full user privacy

---

## 🛠 Tech Stack

* **React 19**
* **Vite**
* **Tailwind CSS**
* **React Hooks**
* **LocalStorage API**

---

## 🏗 Project Architecture

```
src
 ├── components
 │   ├── Navbar.jsx
 │   ├── ScheduleCard.jsx
 │   ├── AddScheduleForm.jsx
 │   ├── TimetableGrid.jsx
 │   └── StatusBadge.jsx
 │
 ├── pages
 │   ├── Home.jsx
 │   ├── Dashboard.jsx
 │   ├── AddSchedule.jsx
 │   └── WeeklyView.jsx
 │
 ├── utils
 │   ├── storage.js
 │   └── timeHelpers.js
 │
 ├── App.jsx
 └── main.jsx
```

---

## ⚙️ Installation & Setup

Clone the repository:

```bash
git clone https://github.com/yourusername/smart-timetable-organizer.git
```

Navigate to the project directory:

```bash
cd smart-timetable-organizer
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

The application will start on:

```
http://localhost:5173
```

---

## 🎯 Demo Workflow

1. Open the **Dashboard**
2. Add a new schedule using **Add Schedule**
3. View the class in the timetable
4. Observe automatic status updates (Upcoming / Ongoing / Completed)
5. Refresh the page to verify **localStorage persistence**

---

## 🎨 UI/UX Highlights

* Modern SaaS-style interface
* Color-coded schedule cards
* Responsive design for all screen sizes
* Smooth hover effects and transitions
* Minimal and clean layout

---

## 🔮 Future Improvements

* Cloud synchronization across devices
* AI-powered schedule optimization
* Smart reminders and notifications
* Multi-user collaboration
* Integration with academic systems

---

## 🏆 Hackathon Event

This project was developed during the **Texperia 2K26 Appathon Event** held at:

**SNS College of Technology**
Coimbatore, Tamil Nadu, India

---

## 📄 License

This project is open-source and available under the **MIT License**.

---

## 👨‍💻 Author

Developed by 
**Hadil KK**
**Kavin DR**
**Mohammed Ansaf A**

Passionate about building modern web applications and solving real-world problems using technology.
