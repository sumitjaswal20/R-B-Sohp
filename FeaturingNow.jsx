import React from 'react';

export default function FeaturingNow() {
  const categories = [
    {
      id: 1,
      name: "Kids",
      borderColor: "border-[#4A5D6E]", // Slate blue outline tone
      image: "https://www.randbfashion.in/on/demandware.static/-/Sites-randb-Library/default/dw7a204ece/kid2626.jpg"
    },
    {
      id: 2,
      name: "Men",
      borderColor: "border-[#4E2A1E]", // Dark brown outline tone
      image: "https://www.randbfashion.in/on/demandware.static/-/Sites-randb-Library/default/dw7bc29697/men2626.jpg"
    },
    {
      id: 3,
      name: "Women",
      borderColor: "border-[#3D2523]", // Deep burgundy outline tone
      image: "https://www.randbfashion.in/on/demandware.static/-/Sites-randb-Library/default/dw88f59f2b/women2626.jpg"
    }
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-16 font-sans">
      {/* Section Title Header */}
      <div className="text-center mb-12">
        <h2 className="text-xl md:text-2xl font-bold tracking-[0.15em] uppercase text-gray-900">
          FEATURING NOW
        </h2>
      </div>

      {/* Categories Grid Setup */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
        {categories.map((category) => (
          <div key={category.id} className="flex flex-col items-center group cursor-pointer">
            {/* Category Title Segment */}
            <h3 className="text-base md:text-lg font-medium tracking-wide text-gray-800 mb-4 transition-colors group-hover:text-[#0F52BA]">
              {category.name}
            </h3>

            {/* Framed Card Visual Container */}
            <div className="relative w-full aspect-[4/5] bg-gray-50 overflow-hidden flex items-center justify-center p-4 border border-gray-100 shadow-sm">
              
              {/* Outer Decorative Geometric Outline Inset Frame */}
              <div className={`absolute inset-3 border-2 ${category.borderColor} pointer-events-none z-10 transition-transform duration-300 group-hover:scale-[0.98]`} />
              
              {/* Profile Image Asset Layer */}
              <img
                src={category.image}
                alt={`${category.name} showcase category`}
                style={{ width: "100%", height: "100%" }}
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
