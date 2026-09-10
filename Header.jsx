import React from 'react';

export default function Header() {
  const navItems = ["Kids", "Men", "Women", "Sale"];

  return (
    <header className="w-full bg-white border-b border-gray-100 font-sans">
      {/* Top Promotional Bar */}
      <div className="w-full bg-[#FAF9F6] text-center py-2 text-xs tracking-wider text-gray-700 font-medium border-b border-gray-100 flex justify-between items-center px-4 md:justify-center gap-4">
        <span className="cursor-pointer text-gray-400 text-sm hidden md:inline">‹</span>
        <span>NEW HERE? SIGN UP & GET EXTRA 15% OFF ON ₹999+</span>
        <span className="cursor-pointer text-gray-400 text-sm hidden md:inline">›</span>
      </div>

      {/* Main Bar */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Branding Logo */}
        <div className="flex flex-col items-center md:items-start cursor-pointer">
          <span className="text-3xl font-extrabold tracking-tight text-[#0F52BA]">R&B</span>
          <span className="text-[9px] uppercase tracking-[0.2em] text-gray-500 font-semibold -mt-1">Love It. Wear It.</span>
        </div>

        {/* Universal Search Field */}
        <div className="w-full md:w-5/12 relative">
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-[#F5F5F7] text-sm text-gray-800 px-10 py-2.5 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-300 placeholder-gray-400 transition"
          />
          <svg className="w-4 h-4 text-gray-400 absolute left-3 top-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>

        {/* Global Utility Links & User Interactions */}
        <div className="flex items-center gap-6 text-xs text-gray-600 font-medium">
          <div className="hidden lg:flex items-center gap-1.5 cursor-pointer hover:text-black">
            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10M21 16V10a2 2 0 00-2-2h-3V6a1 1 0 00-1-1H13v11" /></svg>
            <span>TRACK ORDER</span>
          </div>
          <div className="hidden lg:flex items-center gap-1.5 cursor-pointer hover:text-black">
            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
            <span>CONTACT US</span>
          </div>
          <div className="hidden lg:flex items-center gap-1.5 cursor-pointer hover:text-black">
            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            <span>STORE LOCATOR</span>
          </div>

          {/* Core Interactive Action Badges */}
          <div className="flex items-center gap-5 ml-4">
            {/* Cart Icon with badge count */}
            <button className="relative p-1 text-gray-700 hover:text-black focus:outline-none">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">0</span>
            </button>
            {/* Wishlist Icon */}
            <button className="relative p-1 text-gray-700 hover:text-black focus:outline-none">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">0</span>
            </button>
            {/* Profile Account Icon */}
            <button className="p-1 text-gray-700 hover:text-black focus:outline-none">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
            </button>
          </div>
        </div>
      </div>

      {/* Main Category Navigation Bar */}
      <nav className="w-full max-w-7xl mx-auto px-4 flex justify-center md:justify-start gap-8 py-2.5 text-xs font-bold uppercase tracking-wider text-gray-800">
        {navItems.map((item, index) => (
          <a
            key={index}
            href={`#${item.toLowerCase()}`}
            className={`hover:text-[#0F52BA] transition-colors ${item === 'Sale' ? 'text-red-500 hover:text-red-600' : ''}`}
          >
            {item}
          </a>
        ))}
      </nav>
    </header>
  );
}
