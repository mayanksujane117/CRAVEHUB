import React from "react";

const products = [
  { id: 1, name: "Whole Grain Bread", price: "₹299", img: "download.jpg" },
  { id: 2, name: "Whole Grain Bread", price: "₹259", img: "meru_.jpg" },
  { id: 3, name: "Whole Grain Bread", price: "₹389", img: "Need Sugar Free Desserts_ What type and flavor of Sugar Free Desserts are you craving_ What would you like to see us offer_.jpg" },
  { id: 4, name: "Whole Grain Bread", price: "₹499", img: "slices-baked-bread-against-black-background.jpg" },
  { id: 5, name: "Whole Grain Bread", price: "₹599", img: "sweet-bread-bun-with-chocolate-syrup-chocolate-icecream.jpg" },
  { id: 6, name: "Whole Grain Bread", price: "₹199", img: "tower-muffins-with-powdered-sugar.jpg" },
];

const Products = () => {
  return (
    <div className="bg-gray-100 py-16 px-10">
      
      {/* Title */}
      <h2 className="text-4xl text-center font-serif italic mb-12">
        Top Products
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-black rounded-xl overflow-hidden relative group"
          >
            {/* Image */}
            <img
              src={item.img}
              alt=""
              className="w-full h-60 object-cover group-hover:scale-105 transition"
            />

            {/* Overlay Content */}
            <div className="absolute inset-0 bg-black/40 p-4 flex flex-col justify-end">
              
              <p className="text-white text-lg">{item.price}</p>

              <h3 className="text-white text-xl font-medium">
                {item.name}
              </h3>

              <div className="flex justify-between items-center mt-2">
                
                <button className="bg-orange-500 px-4 py-1 rounded-md text-white hover:bg-orange-600">
                  Add
                </button>

                <div className="border border-white rounded-full w-8 h-8 flex items-center justify-center text-white text-sm">
                  i
                </div>

              </div>

            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Products;