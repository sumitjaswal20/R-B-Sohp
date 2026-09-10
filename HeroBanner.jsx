import React from 'react';

export default function HeroBanner() {
  return (
    <section className="relative w-full bg-[#683A2B] overflow-hidden min-h-[460px] flex items-center">
      {/* Visual Composition Image Base Layer */}
      <div className="absolute inset-0 flex w-full h-full">
        {/* Left column mask matching text zone */}
        <div className="w-full md:w-1/2 bg-gradient-to-r from-[#4E2A1E] to-[#683A2B] hidden md:block"></div>
        {/* Right side background image layer */}
        <div className="w-full md:w-1/2 h-full relative">
          <img 
            src="https://unsplash.com" 
            alt="Festive models catalog showcase" 
            className="w-full h-full object-cover object-top opacity-85 mix-blend-luminosity md:mix-blend-normal"
          />
          {/* Subtle gradient overlay to smoothly wash imagery over text canvas */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#683A2B] via-transparent to-transparent md:block hidden"></div>
        </div>
      </div>

      {/* Hero Content Canvas */}
      <div className="relative max-w-7xl mx-auto px-6 py-16 w-full flex flex-col justify-center text-center md:text-left z-10 text-white">
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
          {/* Main Brand Identifier */}
          <h2 className="text-5xl md:text-7xl font-black tracking-widest mb-1 font-serif">R&B</h2>
          <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-gray-300 font-semibold mb-8">
            Love It. Wear It.
          </p>

          {/* Promotion Theme Banner Text */}
          <h1 className="text-4xl md:text-6xl font-serif tracking-wide font-normal uppercase text-[#EED6A5]">
            Festive
          </h1>
          <p className="text-2xl md:text-4xl font-light italic text-gray-200 mt-2 font-serif tracking-wider">
            favourites
          </p>

          {/* Call To Action Trigger Button */}
          <button className="mt-8 border border-[#EED6A5] text-[#EED6A5] px-8 py-3 text-xs uppercase tracking-widest font-semibold hover:bg-[#EED6A5] hover:text-black transition-all duration-300 focus:outline-none">
            Explore Collection
          </button>
        </div>
      </div>

      {/* Center Pagination Slide Sliders */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        <span className="w-2 h-2 rounded-full bg-white opacity-40 cursor-pointer hover:opacity-100 transition-opacity"></span>
        <span className="w-6 h-2 rounded-full bg-white transition-all duration-300"></span>
        <span className="w-2 h-2 rounded-full bg-white opacity-40 cursor-pointer hover:opacity-100 transition-opacity"></span>
      </div>
    </section>
  );
}
