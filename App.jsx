import React from 'react';
import Header from './Header';
import HeroBanner from './HeroBanner';
import FeaturingNow from './FeaturingNow'
import NewArrivals from './NewArrivals'
import { WhoWeAre } from './WhoWeAre';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 selection:bg-gray-100">
      {/* 1. Global Navigation Header */}
      <Header />

      {/* 2. Interactive Campaign Presentation Hero */}
      <main>
        <HeroBanner />
        {/* 3. "Featuring Now" Split Category Selection Grid Block */}
        <FeaturingNow />
        {/* 4. Horizontal Seasonal Card Showcase Grid */}
        <NewArrivals />
        {/*Adding map and company info*/}
        <WhoWeAre />
      </main>

      {/* Placeholder content region for product grids */}
      <section className="max-w-7xl mx-auto px-4 py-12 text-center text-gray-400 text-xs tracking-widest uppercase">
        Product items catalog pipeline loads below
      </section>
    </div>
  );
}
