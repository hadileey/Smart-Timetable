import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import AddSchedule from './pages/AddSchedule';
import WeeklyView from './pages/WeeklyView';

function App() {
 const [sidebarOpen, setSidebarOpen] = useState(false);

 return (
  <Router>
   <div className="flex bg-[#F4F6FA] min-h-screen text-gray-800 font-sans selection:bg-indigo-100 selection:text-indigo-900">
    <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
    
    <div className="flex-1 flex flex-col min-h-screen md:ml-64 w-full transition-all duration-300 bg-[#F4F6FA]">
     <Topbar onMenuClick={() => setSidebarOpen(true)} />
     <main className="flex-1 p-4 sm:p-8 overflow-y-auto">
      <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/dashboard" element={<Dashboard />} />
       <Route path="/add" element={<AddSchedule />} />
       <Route path="/weekly" element={<WeeklyView />} />
      </Routes>
     </main>
    </div>
   </div>
  </Router>
 );
}

export default App;
