
import React from 'react';
import { FiSearch } from 'react-icons/fi';

const SearchBar = ({ onSearch }) => {
 return (
  <div className="relative w-full max-w-xl ">
   <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
    <FiSearch className="text-[#4A3B7A] text-sm" />
   </div>
   <input
    type="text"
    className="w-full pl-9 pr-3 py-2 bg-white border border-gray-100 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-[#4A3B7A]/30 focus:border-[#4A3B7A]/30 transition-all font-medium text-gray-700 placeholder-gray-400"
    placeholder="Search subjects..."
    onChange={(e) => onSearch(e.target.value)}
   />
  </div>
 );
};

export default SearchBar;
