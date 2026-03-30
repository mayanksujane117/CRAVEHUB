import React from "react";

const items = [
  {
    id: 1,
    name: "Cake",
    price: "₹899",
    img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
  },
  {
    id: 2,
    name: "pizza",
    price: "₹599",
    img: "https://images.unsplash.com/photo-1605478371310-a9f1e96b4ff4",
  },
  {
    id: 3,
    name: "Brownies",
    price: "₹499",
    img: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec",
  },
];

const Featured = () => {
  return (
    <div className="py-16 px-10 bg-gray-100">
      
      {/* Title */}
      <h2 className="text-4xl text-center font-serif italic mb-10">
        Featured Treats
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        
        {items.map((item) => (
          <div key={item.id} className="text-center">
            
            {/* Image */}
            <div className="overflow-hidden rounded-xl">
              <img
                src={item.img}
                alt=""
                className="w-full h-64 object-cover hover:scale-105 transition"
              />
            </div>

            {/* Content */}
            <div className="flex justify-between items-center mt-4 px-2">
              <h3 className="text-lg font-semibold">
                {item.name}
              </h3>

              <p className="text-lg font-bold">
                {item.price}
              </p>
            </div>

          </div>
        ))}

      </div>
    </div>
  );
};

export default Featured;