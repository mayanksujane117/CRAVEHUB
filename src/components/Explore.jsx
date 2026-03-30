import React, { useState } from "react";

const categories = ["Cake", "Muffins", "Croissant", "Bread", "Tart", "Favorite"];

const images = {
  Cake: [
    "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
    "https://images.unsplash.com/photo-1605478371310-a9f1e96b4ff4",
    "https://images.unsplash.com/photo-1551024601-bec78aea704b",
  ],
  Muffins: [
    "https://images.unsplash.com/photo-1587668178277-295251f900ce",
    "https://images.unsplash.com/photo-1607958996333-41aef7caefaa",
    "https://images.unsplash.com/photo-1606313564200-e75d5e30476f",
  ],
  Croissant: [
    "https://images.unsplash.com/photo-1555507036-ab794f4afe5c",
    "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b",
    "https://images.unsplash.com/photo-1608198093002-ad4e005484ec",
  ],
};

const Explore = () => {
  const [active, setActive] = useState("Cake");

  return (
    <div className="py-16 px-10 bg-gray-100">
      
      {/* Title */}
      <h2 className="text-4xl text-center font-serif italic mb-6">
        Explore More
      </h2>

      {/* Tabs */}
      <div className="flex justify-center gap-8 mb-10 border-b pb-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`pb-2 ₹{
              active === cat
                ? "border-b-2 border-orange-500 text-orange-500"
                : "text-gray-600"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        
        {(images[active] || images["Cake"]).map((img, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl group"
          >
            <img
              src={img}
              alt=""
              className="w-full h-64 object-cover group-hover:scale-105 transition"
            />
          </div>
        ))}

      </div>
    </div>
  );
};

export default Explore;