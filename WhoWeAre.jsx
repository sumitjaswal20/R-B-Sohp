import React, { useState } from 'react';


// Mock data representing your stores list with coordinates
const MOCK_STORES = [
  {
    id: 1,
    name: "Forum Sujana Mall",
    city: "Hyderabad",
    country: "India",
    address: "R&B, Forum Sujana Mall Unit no. FF-105, First floor, Kukatpally, KBHP Phase 9, Hyderabad-500085",
    email: "rnbforumsujana@randbfashion.in",
    lat: 17.4843,
    lng: 78.3887
  },
  {
    id: 2,
    name: "R&B - H&S Mall",
    city: "Noida",
    country: "India",
    address: "R&B Store, First & Second Floor, H&S Mall, Haibatpur, Sector 4, Greater Noida, Uttar Pradesh 201318",
    email: "rnb.boulevardwalknoida@randbfashion.in",
    lat: 28.5700,
    lng: 77.4500
  },
  {
    id: 3,
    name: "L&T Punjagutta",
    city: "Hyderabad",
    country: "India",
    address: "L&T Next Galleria Metro Mall Punjagutta, L2-35, 87 Nagarjuna Hills, Punjagutta, Hyderabad, Telangana",
    email: "rnblntpunjagutta@randbfashion.in",
    lat: 17.4260,
    lng: 78.4531
  }
];

export const WhoWeAre = () => {
  // State to track if the interactive store locator interface is visible
  const [showLocator, setShowLocator] = useState(false);
  // State to handle search bar input filtering
  const [searchQuery, setSearchQuery] = useState('');

  // Filter stores dynamically as the user types
  const filteredStores = MOCK_STORES.filter(store =>
    store.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    store.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
    store.address.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // When clicking a store, this moves the interactive map focus
  const handleStoreClick = (store) => {
    console.log(`Centering map to: ${store.name} at coordinates Lat: ${store.lat}, Lng: ${store.lng}`);
    // If using the official Google Maps library later, you would trigger:
    // map.panTo({ lat: store.lat, lng: store.lng });
  };

  return (
    <section className="w-full py-12 px-6 md:px-12 lg:px-24 bg-white text-gray-800 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col space-y-12">
        
        {/* Core Profile Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Left Text Column */}
          <div className="w-full md:col-span-7 space-y-6">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-wide uppercase border-b-2 border-gray-200 pb-2 inline-block">
              WHO WE ARE
            </h2>
            
            <div className="space-y-6 text-sm md:text-base leading-relaxed font-light text-gray-600 max-w-2xl">
              <p>
                The Fastest Growing Value &amp; Lifestyle Fashion Brand In The Middle East &amp; India. 
                <span className="font-semibold text-gray-800"> R&amp;B </span> 
                Was Launched In Oman-Muscat Grand Mall In Oct 2012 And Has A Strong Presence With Over 
                135 Plus Stores Across 7 Countries. R&amp;B Is Constantly Striving And Launching A New Store 
                Every Month, Spread Across 1,000,000 Area Sq. Ft.
              </p>
              
              <p>
                R&amp;B Offers Quality Clothing At Affordable Prices Across The GCC &amp; India Region. Our Team 
                Of In-House Designers Ensures We Are Always Ahead Of The Latest Trends, Creating Great 
                New Looks For Every Season.
              </p>
              
              <p>
                We Currently Feature In <span className="font-semibold text-gray-800">OMAN, UAE, QATAR, BAHRAIN, KUWAIT, KINGDOM OF SAUDI ARABIA &amp; INDIA.</span> 
                Our Global Experience Allows Us To Deliver A Brand And Product Ideally 
                Suited For Diverse Markets With Varying Customer Requirements.
              </p>
            </div>

            {/* Interactive Toggle Button */}
            <div className="pt-4">
              <button 
                onClick={() => setShowLocator(!showLocator)}
                className="bg-[#009adb] hover:bg-[#0082ba] text-white font-medium py-3 px-8 transition-colors duration-200 shadow-sm text-sm tracking-wide rounded"
              >
                {showLocator ? "Close Store Locator" : "Open Store Locator"}
              </button>
            </div>
          </div>

          {/* Right Static Graphic Map Column */}
          <div className="w-full md:col-span-5 h-full min-h-[300px] md:min-h-none flex justify-center md:justify-end">
            <img 
              src="https://www.randbfashion.in/on/demandware.static/-/Sites-randb-Library/default/dw36f5b1b4/!!!!2979573%20%5BRecovered%5D_Mesa%20de%20trabajo%201%202.jpg" 
              alt="R&B Global Presence Map" 
              className="w-full max-w-[950px] md:max-w-none h-auto object-contain"
            />
          </div>
        </div>

        {/* ---------------- INTERACTIVE STORE LOCATOR ENGINE ---------------- */}
        {showLocator && (
          <div className="border border-gray-200 rounded-lg overflow-hidden shadow-md grid grid-cols-1 md:grid-cols-12 bg-gray-50 h-[600px] transition-all duration-300">
            
            {/* Store Listing Panel (Takes 4 columns) */}
            <div className="md:col-span-4 bg-white border-r border-gray-200 flex flex-col h-full">
              {/* Search Header Container */}
              <div className="p-4 border-b border-gray-100 space-y-2">
                <input 
                  type="text"
                  placeholder="Search by city or store name"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-[#009adb]"
                />
                <div className="text-xs text-gray-500 font-medium">
                  {filteredStores.length} stores shown
                </div>
              </div>

              {/* Scrollable Store Cards Array */}
              <div className="flex-1 overflow-y-auto divide-y divide-gray-100 p-2 space-y-2">
                {filteredStores.map((store, index) => (
                  <div 
                    key={store.id}
                    onClick={() => handleStoreClick(store)}
                    className="p-4 hover:bg-blue-50/50 rounded-md cursor-pointer transition-colors border border-transparent hover:border-blue-100 group"
                  >
                    <div className="flex justify-between items-start mb-1">
                      <span className="font-bold text-sm text-gray-900 flex items-center gap-2">
                        <span className="inline-flex items-center justify-center bg-blue-900 text-white rounded-full w-5 h-5 text-xs">
                          {index + 1}
                        </span>
                        {store.name}
                      </span>
                      <span className="text-[10px] tracking-wider uppercase font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                        {store.city}
                      </span>
                    </div>
                    <p className="text-xs text-gray-600 leading-normal mb-2 mt-1">
                      {store.address}
                    </p>
                    <div className="flex justify-between items-center text-xs pt-1 border-t border-gray-50">
                      <button className="text-[#009adb] font-medium hover:underline">
                        Get Directions →
                      </button>
                      <span className="text-gray-400 group-hover:text-gray-600 truncate max-w-[160px]">
                        {store.email}
                      </span>
                    </div>
                  </div>
                ))}
                {filteredStores.length === 0 && (
                  <div className="text-center py-8 text-sm text-gray-400">
                    No matching stores located.
                  </div>
                )}
              </div>
            </div>

            {/* Map Canvas Block (Takes 8 columns) */}
            <div className="md:col-span-8 bg-gray-200 relative h-full flex items-center justify-center overflow-hidden">
              {/* Background Mock Map Canvas Frame */}
              <div className="absolute inset-0 bg-cover bg-center opacity-85" style={{ backgroundImage: `url('https://googleapis.com')` }}>
                {/* Fallback pattern graphic if no key is present */}
                <div className="w-full h-full bg-emerald-50/40 flex items-center justify-center text-center p-6">
                  <div className="bg-white/95 p-6 rounded-lg shadow-lg max-w-md border border-gray-200">
                    <p className="font-bold text-gray-800 text-base mb-1">🗺️ Live Google Map Frame</p>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      To activate the fully functional map layer, integrate a wrapper library like 
                      <code className="bg-gray-100 text-red-600 mx-1 px-1 py-0.5 rounded font-mono text-[11px]">AIzaSyDGBe1U6B1l0slZkGGsZXWzqh7_VkMltXU</code> 
                      loaded with a valid Google Cloud Client API credential key.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
