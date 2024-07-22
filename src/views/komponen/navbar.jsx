import React from "react";

export default function Navbar({ children }) {
  return (
    <nav className="bg-gradient-to-r from-jabarayaColors-700 to-jabarayaColors-900 p-4 w-full relative top-0">
      <div className="container mx-auto flex justify-end items-center">
        <div className="space-x-4 ml-auto text-center">
          <a href="/" className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-300">
            Beranda
          </a>
          <a href="#BuatRencana" className="text-gray-200 px-3 py-2 rounded-md text-sm font-light hover:bg-gray-300">
            Buat Rencana
          </a>
          <a href="#Berita" className="text-gray-200 px-3 py-2 rounded-md text-sm font-light hover:bg-gray-300">
            Berita
          </a>
          <a href="#Artikel" className="text-gray-200 px-3 py-2 rounded-md text-sm font-light hover:bg-gray-300">
            Artikel
          </a>
          <a href="#Event" className="text-gray-200 px-3 py-2 rounded-md text-sm font-light hover:bg-gray-300">
            Event
          </a>
          <a href="#DaftarBudaya" className="text-gray-200 px-3 py-2 rounded-md text-sm font-light hover:bg-gray-300">
            Daftar Budaya
          </a>
          <a href="/profile" className="text-gray-200 px-3 py-2 rounded-md text-sm font-light hover:bg-gray-300">
            Profile
          </a>
          {children}
        </div>
      </div>
    </nav>
  );
}
