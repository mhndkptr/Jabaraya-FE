import React from "react";
import Logo from "../../assets/img-beranda/JABARAYA.png";
export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-jabarayaColors-700 to-jabarayaColors-900 p-4 w-full relative top-0 ">
      <div className=" flex  lg:justify-between items-center lg:px-3 lg:pl-4 ">
        <div className="flex items-center justify-center flex-1 lg:flex-grow-0 ">
          <img src={Logo} alt="" className="w-[3rem] h-[3rem]   " />
          <p className="text-white lg:text-[17px]  text-[16px] md:text-[20px]  font-semibold ">
            JABARAYA
          </p>
        </div>
        <div className="space-x-4 ml-auto text-center hidden lg:flex ">
          <a
            href="/"
            className="text-white px-3 py-2 rounded-md text-[17px] font-medium "
          >
            Beranda
          </a>
          <a
            href="#BuatRencana"
            className="text-gray-200 px-3 py-2 rounded-md text-[17px] font-light "
          >
            Buat Rencana
          </a>
          <a
            href="#Berita"
            className="text-gray-200 px-3 py-2 rounded-md text-[17px] font-light "
          >
            Berita
          </a>
          <a
            href="#Artikel"
            className="text-gray-200 px-3 py-2 rounded-md text-[17px] font-light "
          >
            Artikel
          </a>
          <a
            href="#Event"
            className="text-gray-200 px-3 py-2 rounded-md text-[17px] font-light "
          >
            Event
          </a>
          <a
            href="#DaftarBudaya"
            className="text-gray-200 px-3 py-2 rounded-md text-[17px] font-light "
          >
            Daftar Budaya
          </a>
          <a
            href="/profile"
            className="text-gray-200 px-3 py-2 rounded-md text-[17px] font-light "
          >
            Profile
          </a>
        </div>
        <span class="material-symbols-outlined lg:hidden block text-white ">
          menu
        </span>
      </div>
    </nav>
  );
}
