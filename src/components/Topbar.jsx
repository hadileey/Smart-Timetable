import React from 'react';
import { FiMenu, FiSearch, FiBell, FiMail } from 'react-icons/fi';

const Topbar = ({ onMenuClick }) => {
 return (
  <header className="bg-[#F4F6FA] h-24 px-4 sm:px-8 flex items-center justify-between sticky top-0 z-30">
   <div className="flex items-center gap-4 flex-1">
    <button
     onClick={onMenuClick}
     className="md:hidden p-2 -ml-2 text-gray-600 hover:bg-gray-200 rounded-xl transition-colors"
    >
     <FiMenu className="text-2xl" />
    </button>

    <h1 className="text-xl font-semibold text-gray-800 hidden sm:block whitespace-nowrap mr-6">
     Welcome to Smart
    </h1>

    <div className="relative max-w-md w-full ml-auto sm:ml-0">
     <input
      type="text"
      placeholder="Search"
      className="w-full bg-white border border-gray-100 rounded-full pl-6 pr-12 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[#4A3B7A]/20 transition-all "
     />
     <button className="absolute right-0 top-0 bottom-0 px-4 bg-[#4A3B7A] text-white rounded-r-full hover:bg-[#3d3166] transition-colors flex items-center justify-center">
      <FiSearch />
     </button>
    </div>
   </div>

   <div className="flex items-center gap-2 sm:gap-4 ml-4">
    <button className="p-2.5 bg-white text-gray-500 rounded-full hover:text-[#4A3B7A] hover:bg-gray-50 transition-colors relative">
     <FiBell />
     <span className="absolute top-1.5 right-2 w-2 h-2 bg-[#FF7E8B] rounded-full"></span>
    </button>
    <button className="p-2.5 bg-white text-gray-500 rounded-full hover:text-[#4A3B7A] hover:bg-gray-50 transition-colors ">
     <FiMail />
    </button>
    <div className="w-10 h-10 ml-2 rounded-full bg-gray-200 border-2 border-white overflow-hidden flex items-center justify-center cursor-pointer">

     <img src="https://ui-avatars.com/api/?name=User&background=random" alt="Profile" className="w-full h-full object-cover" />
    </div>
   </div>
  </header>
 );
};

export default Topbar;
