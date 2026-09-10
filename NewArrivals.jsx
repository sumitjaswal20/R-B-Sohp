import React, { useState } from 'react';

export default function NewArrivals({ showAll, allProducts = [] }) {
  // Track selected size layout variant state dynamically
  const [selectedSizes, setSelectedSizes] = useState({});


  const mockProducts = [
    {
      id: 1,
      badge: "30% Off",
      title: "R&B Men Off White Textured Resort Collar Short Sleeves Relaxed Fit Shirt",
      price: "₹699",
      oldPrice: "₹999",
      sizes: ["S", "M", "L", "XL", "XXL"],
      image: "https://www.randbfashion.in/on/demandware.static/-/Sites-randb_master_catalog/default/dwb13661b6/large/8909353241387_1.jpg",
      alt: "Men's striped resort shirt",
      colors: ["#20b2aa", "#800020"]
    },
    {
      id: 2,
      badge: "30% Off",
      title: "R&B Cream Women Textured Sleeveless Top",
      price: "₹349",
      oldPrice: "₹499",
      image: "https://www.randbfashion.in/on/demandware.static/-/Sites-randb_master_catalog/default/dwbd4981b3/large/8909006675385_1.jpg",
      alt: "Women's sleeveless top and jeans"
    },
    {
      id: 3,
      badge: "30% Off",
      title: "R&B Men Black Textured Resort Collar Short Sleeves Relaxed Fit Shirt",
      price: "₹699",
      oldPrice: "₹999",
      image: "https://www.randbfashion.in/on/demandware.static/-/Sites-randb_master_catalog/default/dw9eca6a20/large/8909353241332_1.jpg",
      alt: "Men's black textured button-up shirt"
    },
    {
      id: 4,
      badge: null,
      title: "R&B Womens BLUE Printed Shirt Collar Three-Quarter Sleeves Tops",
      price: "₹899",
      oldPrice: null,
      image: "https://www.randbfashion.in/on/demandware.static/-/Sites-randb_master_catalog/default/dwa7f10c73/large/8909006719430_1.jpg",
      alt: "Women's geometric print co-ord setup"
    },
    {
      id: 5,
      badge: "New",
      title: "R&B Men Casual Premium Fit Olive Green Poplin Shirt",
      price: "₹799",
      oldPrice: "₹1,199",
      image: "https://www.randbfashion.in/on/demandware.static/-/Sites-randb_master_catalog/default/dw44eda337/large/8909353426777_1.jpg",
      alt: "Men's olive shirt"
    },
    {
      id: 6,
      badge: "20% Off",
      title: "R&B Women Knit Beige Cardigan Warm Comfort Wear",
      price: "₹1,049",
      oldPrice: "₹1,499",
      image: "https://www.randbfashion.in/on/demandware.static/-/Sites-randb_master_catalog/default/dw772722f4/large/8909353368206_1.jpg",
      alt: "Women's knitwear"
    },
    {
      id: 7,
      badge: "Trending",
      title: "R&B Men Classic Indigo Straight Slim Fit Indigo Denim Jeans",
      price: "₹1,299",
      oldPrice: null,
      image: "https://www.randbfashion.in/on/demandware.static/-/Sites-randb_master_catalog/default/dw5e70e37d/large/8909353423066_1.jpg",
      alt: "Men's denim jeans"
    },
    {
      id: 8,
      badge: "40% Off",
      title: "R&B Women Printed Floral Rayon Summer Flared Dress",
      price: "₹599",
      oldPrice: "₹999",
      image: "https://www.randbfashion.in/on/demandware.static/-/Sites-randb_master_catalog/default/dwfb2141d5/large/8909353389584_1.jpg",
      alt: "Women's summer floral dress"
    }
  ];

  // The view controller calculation 
  const visibleProducts = showAll ? allProducts : mockProducts.slice(0, 4);

  const handleSizeSelect = (productId, size, e) => {
    e.stopPropagation(); // Prevents clicking the size box from opening the product details card link
    setSelectedSizes(prev => ({
      ...prev,
      [productId]: size
    }));
    console.log(`Selected size: ${size} for product ${productId}`);
  };
  


  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-8 font-sans">
      <div className="mb-6">
        <h2 className="text-xl font-bold tracking-wider uppercase text-gray-900">
          NEW THIS WEEK
        </h2>
      </div>

      {/* Grid structure mapping over visible products cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-8 md:gap-x-3">
        {visibleProducts.map((product) => (
          <div key={product.id} className="relative group cursor-pointer flex flex-col">
            
            {/* Image Wrapper Container with hover state tracker flag */}
            <div className="w-full aspect-[3/4] overflow-hidden relative bg-gray-50 rounded-sm">
              {product.badge && (
                <span className="absolute top-0 left-0 bg-[#CC0000] text-white text-[10px] font-bold px-2 py-0.5 z-10 uppercase">
                  {product.badge}
                </span>
              )}
              
              <img
                src={product.image}
                alt={product.alt || product.name}
                style={{ width: "100%", height: "100%" }}
                className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
              />

              {/* --- Size Selector Strip - Properly nested inside relative card container --- */}
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1 bg-white/95 p-1 rounded shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-20">
                {['S', 'M', 'L', 'XL', 'XXL'].map((size) => {
                  const isSelected = selectedSizes[product.id] === size;
                  return (
                    <button
                      key={size}
                      type="button"
                      onClick={(e) => handleSizeSelect(product.id, size, e)}
                      className={`text-[11px] font-medium w-6 h-6 border flex items-center justify-center transition-all ${
                        isSelected 
                          ? 'border-blue-600 bg-blue-600 text-white font-bold' 
                          : 'border-gray-300 text-gray-700 hover:border-black bg-white'
                      }`}
                    >
                      {size}
                    </button>
                  );
                })}
              </div>

            </div>

            {/* Bottom Info Details Label Block */}
            <div className="mt-3 text-left">
              <h3 className="text-xs font-medium text-gray-800 line-clamp-2 min-h-[32px]">
                {product.name}
              </h3>
              <div className="mt-1 flex items-baseline gap-2">
                <span className="text-sm font-bold text-gray-900">₹{product.price}</span>
                {product.oldPrice && (
                  <span className="text-xs text-gray-400 line-through">₹{product.oldPrice}</span>
                )}
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
