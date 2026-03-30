import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="absolute top-0 left-0 w-full px-6 md:px-10 py-5 flex items-center justify-between z-50">
      
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img src="/logo2.png" alt="logo" className="h-12 w-12 md:h-16 md:w-16" />
        <h1 className="text-lg md:text-xl font-bold text-orange-400">
          CRAVEHUB
        </h1>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8 text-white">
        <li className="hover:text-orange-400 cursor-pointer">
          <a href="#home">Home</a>
        </li>
        <li className="hover:text-orange-400 cursor-pointer">
          <a href="#About">About</a>
        </li>
        <li className="hover:text-orange-400 cursor-pointer">
          <a href="#Product">Products</a>
        </li>
        <li className="hover:text-orange-400 cursor-pointer">
          <a href="#Offer">Offer</a>
        </li>
        <li className="hover:text-orange-400 cursor-pointer">
          <a href="#Explore">Explore</a>
        </li>
        <li className="hover:text-orange-400 cursor-pointer">
          <a href="#Footer">Contact</a>
        </li>
      </ul>

      {/* Hamburger */}
      <div className="md:hidden text-white">
        {open ? (
          <X size={28} onClick={() => setOpen(false)} className="cursor-pointer" />
        ) : (
          <Menu size={28} onClick={() => setOpen(true)} className="cursor-pointer" />
        )}
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-20 left-0 w-full bg-black/90 backdrop-blur-md text-white flex flex-col items-center gap-6 py-6 md:hidden">
          <a href="#home" onClick={() => setOpen(false)}>Home</a>
          <a href="#About" onClick={() => setOpen(false)}>About</a>
          <a href="#Product" onClick={() => setOpen(false)}>Products</a>
          <a href="#Offer" onClick={() => setOpen(false)}>Offer</a>
          <a href="#Explore" onClick={() => setOpen(false)}>Explore</a>
          <a href="#Footer" onClick={() => setOpen(false)}>Contact</a>
        </div>
      )}

    </div>
  );
};

export default Navbar;