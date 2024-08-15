import React, { useState } from "react";
import Logo from "../../assets/img-beranda/JABARAYA.png";
import profile from "../../assets/img-beranda/profile.png";
import news from "../../assets/img-beranda/news.png";
import event from "../../assets/img-beranda/event.png";
import enjoy from "../../assets/img-beranda/enjoy.png";
import budaya from "../../assets/img-beranda/budaya.png";
import home from "../../assets/img-beranda/home.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = window.location.pathname;

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`bg-gradient-to-r from-jabarayaColors-700/80 to-[#15314F]/80 md:from-jabarayaColors-700/60 rounded-b-lg md:rounded-none md:to-[#15314F]/60 py-3 w-full top-0 backdrop-blur-lg left-0 right-0 z-50 px-8 ${
        pathname.startsWith("/profile") || pathname === "/" || pathname.startsWith("/buatrencana") ? "fixed" : "sticky"
      }`}
    >
      <div className="md:flex-row flex-col md:gap-10 lg:gap-0 flex md:justify-between items-center relative ">
        <div className="flex items-center justify-center flex-1 lg:flex-grow-0">
          <div className="flex w-max justify-center items-center">
            <img src={Logo} alt="JABARAYA Logo" className="w-[3rem] h-[3rem]" />
            <p className="text-white lg:text-[17px] text-[16px] md:text-[17px] font-semibold">JABARAYA</p>
          </div>

          <span onClick={toggle} className="material-symbols-outlined md:hidden absolute right-0 block text-white cursor-pointer ml-3">
            {isOpen ? "close" : "menu"}
          </span>
        </div>
        <Navlinks isOpen={isOpen} />
      </div>
    </nav>
  );
}

const Navlinks = ({ isOpen }) => {
  const pathname = window.location.pathname;
  return (
    <div
      className={`space-x-4 ml-auto text-start w-full lg:w-auto  lg:text-center transition-all duration-700 ease-in-out transform ${
        isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
      } overflow-hidden md:flex md:opacity-100 md:max-h-full`}
    >
      <ul className="md:flex md:justify-end md:w-full ">
        <li className=" p-2 md:p-0 border-b md:border-none border-gray border-opacity-10 flex items-center gap-1">
          <img src={home} alt="" className="w-[30px] h-[30px]  md:hidden " />
          <a
            href="/"
            className={`text-white lg:mx-3 md:mx-2 mx-3 py-2 rounded-md text-[17px] lg:text-[18px] md:text-[15px] transition-all relative ${
              pathname == "/"
                ? "font-bold"
                : "font-normal w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:rounded-lg after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
            }`}
          >
            Beranda
          </a>
        </li>

        <li className=" p-2 md:p-0 border-b md:border-none border-gray border-opacity-10 flex items-center gap-1">
          <img src={enjoy} alt="" className="w-[30px] h-[30px] md:hidden" />
          <a
            href="/buatrencana"
            className={`text-white lg:mx-3 md:mx-2 mx-3 py-2 rounded-md text-[17px] lg:text-[18px] md:text-[15px] transition-all ${
              pathname.startsWith("/buatrencana")
                ? "font-bold"
                : "font-normal relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:rounded-lg after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
            }`}
          >
            Buat Rencana
          </a>
        </li>
        <li className=" p-2 md:p-0 border-b md:border-none border-gray border-opacity-10 flex items-center gap-1">
          <img src={news} alt="" className="w-[30px] h-[30px]  md:hidden" />{" "}
          <a
            href="/berita"
            className={`text-white lg:mx-3 md:mx-2 mx-3 py-2 rounded-md text-[17px] lg:text-[18px] md:text-[15px] transition-all ${
              pathname.startsWith("/berita")
                ? "font-bold"
                : "font-normal relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:rounded-lg after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
            }`}
          >
            Berita
          </a>
        </li>
        <li className=" p-2 md:p-0 border-b md:border-none border-gray border-opacity-10 flex items-center gap-1">
          <img src={news} alt="" className="w-[30px] h-[30px]  md:hidden" />{" "}
          <a
            href="/artikel"
            className={`text-white lg:mx-3 md:mx-2 mx-3 py-2 rounded-md text-[17px] lg:text-[18px] md:text-[15px] transition-all ${
              pathname.startsWith("/artikel")
                ? "font-bold"
                : "font-normal relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:rounded-lg after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
            }`}
          >
            Artikel
          </a>
        </li>
        <li className=" p-2 md:p-0 border-b md:border-none border-gray border-opacity-10 flex items-center gap-1">
          <img src={event} alt="" className="w-[30px] h-[30px] md:hidden" />{" "}
          <a
            href="/event"
            className={`text-white lg:mx-3 md:mx-2 mx-3 py-2 rounded-md text-[17px] lg:text-[18px] md:text-[15px] transition-all ${
              pathname.startsWith("/event")
                ? "font-bold"
                : "font-normal relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:rounded-lg after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
            }`}
          >
            Event
          </a>
        </li>
        <li className=" p-2 md:p-0 border-b md:border-none border-gray border-opacity-10 flex items-center gap-1">
          <img src={budaya} alt="" className="w-[30px] h-[30p md:hidden" />{" "}
          <a
            href="/daftarbudaya"
            className={`text-white lg:mx-3 md:mx-2 mx-3 py-2 rounded-md text-[17px] lg:text-[18px] md:text-[15px] transition ${
              pathname.startsWith("/daftarbudaya")
                ? "font-bold"
                : "font-normal relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:rounded-lg after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
            }`}
          >
            Daftar Budaya
          </a>
        </li>
        <li className=" p-2 md:p-0 border-b md:border-none border-gray border-opacity-10 flex items-center gap-1">
          <img src={home} alt="" className="w-[30px] h-[30px]  md:hidden" />{" "}
          <a
            href="/profile"
            className={`text-white lg:mx-3 md:mx-2 mx-3 py-2 rounded-md text-[17px] lg:text-[18px] md:text-[15px] transition ${
              pathname.startsWith("/profile")
                ? "font-bold"
                : "font-normal relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:rounded-lg after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
            }`}
          >
            Profile
          </a>
        </li>
      </ul>
    </div>
  );
};
