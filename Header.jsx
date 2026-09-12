import React, { useState } from 'react';

export default function Header() {
  const navItems = ["Kids", "Men", "Women", "Sale"];
  
  // State hook management for interactive overlays
  const [isTrackPortalOpen, setIsTrackPortalOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isStoreLocatorOpen, setIsStoreLocatorOpen] = useState(false);
  const [trackingNumber, setTrackingNumber] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);

  // Search submission framework handler
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      alert(`Searching shop catalog for: "${searchQuery}"`);
    }
  };

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

        {/* Universal Search Field Container */}
        <form onSubmit={handleSearchSubmit} className="w-full md:w-5/12 relative">
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#F5F5F7] text-sm text-gray-800 px-10 py-2.5 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-300 placeholder-gray-400 transition"
          />
          <button 
            type="submit" 
            className="absolute left-3 top-3.5 text-gray-400 hover:text-black focus:outline-none transition-colors"
            aria-label="Submit Search"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </form>
</div>
        {/* Global Utility Links & User Interactions */}
        <div className="flex items-center gap-6 text-xs text-gray-600 font-medium">
          
          {/* TRACK ORDER LINK BUTTON */}
          <div 
            onClick={() => { setIsTrackPortalOpen(true); setIsContactOpen(false); setIsStoreLocatorOpen(false); }} 
            className="hidden lg:flex items-center gap-1.5 cursor-pointer hover:text-black transition"
          >
            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10M21 16V10a2 2 0 00-2-2h-3V6a1 1 0 00-1-1H13v11" />
            </svg>
            <span>TRACK ORDER</span>
          </div>

          {/* CONTACT US LINK BUTTON */}
          <div 
            onClick={() => { setIsContactOpen(true); setIsTrackPortalOpen(false); setIsStoreLocatorOpen(false); }} 
            className="hidden lg:flex items-center gap-1.5 cursor-pointer hover:text-black transition"
          >
            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>CONTACT US</span>
          </div>

          {/* STORE LOCATOR LINK BUTTON */}
          <div 
            onClick={() => { setIsStoreLocatorOpen(true); setIsTrackPortalOpen(false); setIsContactOpen(false); }} 
            className="hidden lg:flex items-center gap-1.5 cursor-pointer hover:text-black transition"
          >
            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>STORE LOCATOR</span>
          </div>

          {/* Core Interactive Action Badges */}
          <div className="flex items-center gap-5 ml-4">
            <button className="relative p-1 text-gray-700 hover:text-black focus:outline-none">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">{cartCount}</span>
            </button>
            <button className="relative p-1 text-gray-700 hover:text-black focus:outline-none">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">{wishlistCount}</span>
            </button>
            <button className="p-1 text-gray-700 hover:text-black focus:outline-none">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
            </button>
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

      {/* ========================================================= */}
      {/* 1. Track Your Order Overlay Modal Block                   */}
      {/* ========================================================= */}
      {isTrackPortalOpen && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
          <div className="bg-white rounded-xl shadow-2xl p-6 max-w-sm w-full border border-gray-100 relative">
            <button 
              onClick={() => setIsTrackPortalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-black font-medium text-sm focus:outline-none"
            >
              ✕
            </button>
            <h3 className="font-extrabold text-gray-900 text-lg mb-1 flex items-center gap-2">🚚 Track Your Order</h3>
            <p className="text-xs text-gray-500 mb-4">Enter your code reference to verify shipping fulfillment state updates.</p>
            
            <form onSubmit={(e) => { e.preventDefault(); alert(`Tracking Order: ${trackingNumber}`); }} className="space-y-3">
              <input
                type="text"
                required
                placeholder="Order Number (e.g., RB-102934)"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#0F52BA]"
              />
              <button 
                type="submit"
                className="w-full bg-[#0F52BA] hover:bg-blue-800 text-white font-bold text-xs py-2.5 rounded-md uppercase tracking-wider transition-colors"
              >
                Check Shipping Status
              </button>
            </form>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* 2. Contact Us Overlay Modal Block                         */}
      {/* ========================================================= */}
      {isContactOpen && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
          <div className="bg-white rounded-xl shadow-2xl p-6 max-w-sm w-full border border-gray-100 relative">
            <button onClick={() => setIsContactOpen(false)} className="absolute top-4 right-4 text-gray-400 hover:text-black font-medium text-sm focus:outline-none">✕</button>
            <h3 className="font-extrabold text-gray-900 text-lg mb-1 flex items-center gap-2">📞 Contact Us</h3>
            <p className="text-xs text-gray-500 mb-4">We are available 24/7 to resolve your fashion shopping queries.</p>
            <div className="space-y-3 text-sm text-gray-700">
              <div className="p-3 bg-gray-50 rounded-lg flex items-center gap-3">
                <span className="text-lg">💬</span>
                <div>
                  <p className="font-bold text-xs text-gray-500">Live Support Chat</p>
                  <p className="text-xs font-semibold text-blue-700 cursor-pointer hover:underline">Start Conversation</p>
                </div>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg flex items-center gap-3">
                <span className="text-lg">✉️</span>
                <div>
                  <p className="font-bold text-xs text-gray-500">Email Helpdesk</p>
                  <a href="mailto:support@rnbfashion.com" className="text-xs font-semibold text-gray-800 hover:text-blue-700">support@rnbfashion.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* 3. Store Locator Overlay Modal Block                       */}
      {/* ========================================================= */}
      {isStoreLocatorOpen && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
          <div className="bg-white rounded-xl shadow-2xl p-6 max-w-md w-full border border-gray-100 relative">
            <button onClick={() => setIsStoreLocatorOpen(false)} className="absolute top-4 right-4 text-gray-400 hover:text-black font-medium text-sm focus:outline-none">✕</button>
            <h3 className="font-extrabold text-gray-900 text-lg mb-1 flex items-center gap-2">📍 Find a Store</h3>
            <p className="text-xs text-gray-500 mb-4">Locate your nearest R&B flagship storefront location.</p>
            <div className="space-y-2 max-h-60 overflow-y-auto pr-1">
              <div className="p-3 border border-gray-100 rounded-lg hover:border-blue-200 transition-colors">
                <p className="font-bold text-gray-800 text-sm">R&B Forum Sujana Mall</p>
                <p className="text-xs text-gray-500">Kukatpally, Hyderabad, Telangana</p>
              </div>
              <div className="p-3 border border-gray-100 rounded-lg hover:border-blue-200 transition-colors">
                <p className="font-bold text-gray-800 text-sm">R&B Phoenix Marketcity</p>
                <p className="text-xs text-gray-500">Whitefield, Bengaluru, Karnataka</p>
              </div>
            </div>
          </div>
        </div>
      )}

    </header> 
  );
}
