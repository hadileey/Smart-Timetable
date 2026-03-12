import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiHome, FiGrid, FiCalendar, FiPlusCircle, FiX } from 'react-icons/fi';

const Sidebar = ({ isOpen, setIsOpen }) => {
 const navLinks = [
  { name: 'Home', path: '/', icon: <FiHome className="text-xl" /> },
  { name: 'Dashboard', path: '/dashboard', icon: <FiGrid className="text-xl" /> },
  { name: 'Weekly View', path: '/weekly', icon: <FiCalendar className="text-xl" /> },
  { name: 'Add Schedule', path: '/add', icon: <FiPlusCircle className="text-xl" /> },
 ];

 return (
  <>
   {isOpen && (
    <div 
     className="fixed inset-0 bg-black/30 z-40 md:hidden transition-opacity" 
     onClick={() => setIsOpen(false)}
    />
   )}

   <div 
    className={`fixed inset-y-0 left-0 z-50 w-64 bg-[#4A3B7A] text-white flex flex-col transition-transform duration-300 transform md:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
   >
    <div className="flex items-center justify-between h-24 px-8 shrink-0">
     <div className="flex items-center gap-3">
      <div className="">
      <img src="https://img.icons8.com/?size=100&id=Ah0jYxh6v6Q9&format=png&color=000000" alt="icon" className='w-12'/>
      </div>
      <span className="unbounded font-bold  tracking-tight leading-none text-white hidden sm:block">
       <span >Smart</span><br/><span className='text-xl'>TimeTable</span>
      </span>
     </div>
     <button 
      className="md:hidden text-white/70 hover:text-white"
      onClick={() => setIsOpen(false)}
     >
      <FiX className="text-2xl" />
     </button>
    </div>

    <nav className="flex-1 px-0 py-6 space-y-2 overflow-y-auto">
     {navLinks.map((link) => (
      <NavLink
       key={link.name}
       to={link.path}
       onClick={() => setIsOpen(false)}
       className={({ isActive }) =>
        `flex items-center gap-4 px-8 py-3.5 transition-colors relative font-medium group ${
         isActive
          ? 'text-[#4A3B7A] bg-[#F4F6FA] rounded-l-full ml-4 font-semibold'
          : 'text-white/70 hover:text-white hover:bg-white/5 ml-4 rounded-l-full'
        }`
       }
      >
       <div className="relative z-10 flex items-center gap-4">
        <div className="w-5 flex justify-center">
         {link.icon}
        </div>
        <span>{link.name}</span>
       </div>

     </NavLink>
     ))}
    </nav>

    <div className="mt-auto h-72 w-full pointer-events-none relative overflow-hidden flex items-end opacity-90">
     <svg viewBox="0 0 200 200" className="absolute bottom-0 left-0 w-full h-auto translate-y-4 scale-125 origin-bottom" xmlns="http://www.w3.org/2000/svg">
      
      <path d="M-20,200 C-20,120 40,80 80,120 C100,140 90,200 90,200 Z" fill="#FF7E8B" opacity="0.6" />
      
    
      <path d="M30,200 C30,100 80,40 120,70 C140,85 130,200 130,200 Z" fill="#3A2D62" opacity="0.8" />
      
      
      <path d="M60,200 C60,130 140,90 180,140 C200,165 190,200 190,200 Z" fill="#00D2D3" opacity="0.5" />
      
   
      <path d="M-10,200 C-10,140 60,110 90,160 C105,185 100,200 100,200 Z" fill="#009B9C" opacity="0.7" />

 
      <path d="M120,200 C120,150 180,120 210,160 C225,180 220,200 220,200 Z" fill="#FF7E8B" opacity="0.8" />
     </svg>
    </div>
   </div>
  </>
 );
};

export default Sidebar;
