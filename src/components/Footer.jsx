import React from "react";

const Footer = () => {
  return (
    <div
      className="bg-cover bg-center text-white"
      style={{
        backgroundImage:
          "url('https://t4.ftcdn.net/jpg/04/63/02/45/360_F_463024520_wmg7XdI4wuMYISUjeS9jFLWOZSJ6djlH.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="bg-black/85 px-5 md:px-16 py-10">
        
        {/* Top Row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-b border-gray-600 pb-6">
          
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src="/logo2.png" className="h-12 md:h-16" />
            <h2 className="text-lg md:text-xl font-bold text-orange-400">
              CRAVEHUB
            </h2>
          </div>

          {/* Social */}
          <div className="flex flex-col md:flex-row items-center gap-4">
            <span className="text-lg">Follow us</span>

            <div className="flex gap-3">
              {["facebook-f", "whatsapp", "instagram"].map(
                (icon, i) => (
                  <div
                    key={i}
                    className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-orange-400 text-black hover:scale-110 transition"
                  >
                    <i className={`fab fa-${icon}`}></i>
                  </div>
                )
              )}
            </div>
          </div>

        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-16 mt-10 text-center md:text-left">
          
          {/* About */}
          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-orange-400">
              About Us
            </h3>
            <p>(91+)8989112255</p>
            <p>cravehub@gmail.com</p>
            <p>78 Vijay nagar indore</p>
            <p>MP India</p>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-orange-400">
              Explore
            </h3>
            <ul className="space-y-2 text-gray-300">
            <a href="#"><li  className="hover:text-orange-400 cursor-pointer">Home</li></a>
              <li className="hover:text-orange-400 cursor-pointer">Blog</li>
              <li className="hover:text-orange-400 cursor-pointer">Contact us</li>
              <li className="hover:text-orange-400 cursor-pointer">Services</li>
            </ul>
          </div>

          {/* Recent News */}
          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-orange-400">
              Recent News
            </h3>

            <div className="flex gap-3 mb-4 items-center justify-center md:justify-start">
              <img
                src="/download.jpg"
                className="w-14 h-14 md:w-16 md:h-16 object-cover rounded"
              />
              <div>
                <p className="text-sm text-gray-400">June 14,2026</p>
                <p>Puff pastry bliss.</p>
              </div>
            </div>

            <div className="flex gap-3 items-center justify-center md:justify-start">
              <img
                src="/meru_.jpg"
                className="w-14 h-14 md:w-16 md:h-16 object-cover rounded"
              />
              <div>
                <p className="text-sm text-gray-400">June 14,2026</p>
                <p>Puff pastry bliss.</p>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom */}
        <p className="text-center text-gray-400 mt-10 text-sm md:text-base">
          © 2026 CRAVEHUB. All rights reserved
        </p>

      </div>
    </div>
  );
};

export default Footer;