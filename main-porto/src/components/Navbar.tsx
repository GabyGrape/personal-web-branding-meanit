"use client"; // Wajib karena kita pakai State untuk menu mobile

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Code2 } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ];

return (
    // 1. Tambahkan padding top (py-4) agar navbar melayang dari atas layar
    <nav className="fixed w-full z-50 py-4 px-4">
      <p>SELAMAT DATANG DI WEBSITE PORTOFOLIO KU. SILAHKAN DATANG DAN MELIHAT LIHAT. SEMOGA KITA BISA BEKERJA SAMA</p>
      {/* 2. Tambahkan max-width, rounded-full/2xl, dan shadow agar terlihat melayang */}
      <div className="max-w-5xl mx-auto bg-white/70 backdrop-blur-lg border border-white/20 shadow-lg rounded-2xl md:rounded-full px-4 sm:px-6">
        <div className="flex justify-between h-14 items-center">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center gap-2 pl-2">
            <Code2 className="text-blue-600" size={20} />
            <span className="font-bold text-lg tracking-tight text-gray-900">
              7saku<span className="text-blue-600">.</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="flex items-baseline space-x-4">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-600 hover:text-gray-950 px-4 py-2 rounded-full text-sm font-medium transition-all hover:bg-gray-50"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden pr-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-full text-gray-500 hover:bg-gray-100 focus:outline-none"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Content (Floating juga) */}
        {isOpen && (
          <div className="md:hidden px-2">
            <div className="flex flex-col gap-1 border-t border-gray-100 pt-3">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-xl text-base font-medium hover:bg-blue-50"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;