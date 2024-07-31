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

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-jabarayaColors-700 rounded-b-lg lg:rounded-none to-jabarayaColors-900 sticky p-4 w-full top-0">
      <div className="lg:flex-row flex-col  flex lg:justify-between items-center lg:px-3 lg:pl-4 relative ">
        <div className="flex items-center justify-center flex-1 lg:flex-grow-0">
          <img src={Logo} alt="JABARAYA Logo" className="w-[3rem] h-[3rem]" />
          <p className="text-white lg:text-[17px] text-[16px] md:text-[20px] font-semibold">
            JABARAYA
          </p>

          <span
            onClick={toggle}
            className="material-symbols-outlined lg:hidden absolute right-0 block text-white cursor-pointer ml-3"
          >
            {isOpen ? "close" : "menu"}
          </span>
        </div>
        <Navlinks isOpen={isOpen} />
      </div>
    </nav>
  );
}

const Navlinks = ({ isOpen }) => {
  return (
    <div
      className={`space-x-4 ml-auto text-start w-full lg:w-auto  lg:text-center transition-all duration-700 ease-in-out transform ${
        isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
      } overflow-hidden lg:flex lg:opacity-100 lg:max-h-full`}
    >
      <ul className="lg:flex ">
        <li className=" p-2 border-b lg:border-none border-gray border-opacity-10 flex items-center gap-1">
          <img src={home} alt="" className="w-[30px] h-[30px] lg:hidden " />
          <a
            href="/"
            className="text-white px-3 py-2 rounded-md text-[17px] font-medium"
          >
            Beranda
          </a>
        </li>

        <li className=" p-2 border-b lg:border-none border-gray border-opacity-10 flex items-center gap-1">
          <img src={enjoy} alt="" className="w-[30px] h-[30px] lg:hidden" />
          <a
            href="/buatrencana"
            className="text-white px-3 py-2 rounded-md text-[17px] font-medium"
          >
            Buat Rencana
          </a>
        </li>
        <li className=" p-2 border-b lg:border-none border-gray border-opacity-10 flex items-center gap-1">
          <img src={news} alt="" className="w-[30px] h-[30px] lg:hidden" />{" "}
          <a
            href="/berita"
            className="text-white px-3 py-2 rounded-md text-[17px] font-medium"
          >
            Berita
          </a>
        </li>
        <li className=" p-2 border-b lg:border-none border-gray border-opacity-10 flex items-center gap-1">
          <img src={news} alt="" className="w-[30px] h-[30px] lg:hidden" />{" "}
          <a
            href="/artikel"
            className="text-white px-3 py-2 rounded-md text-[17px] font-medium"
          >
            Artikel
          </a>
        </li>
        <li className=" p-2 border-b lg:border-none border-gray border-opacity-10 flex items-center gap-1">
          <img src={event} alt="" className="w-[30px] h-[30px] lg:hidden" />{" "}
          <a
            href="/event"
            className="text-white px-3 py-2 rounded-md text-[17px] font-medium"
          >
            Event
          </a>
        </li>
        <li className=" p-2 border-b lg:border-none border-gray border-opacity-10 flex items-center gap-1">
          <img src={profile} alt="" className="w-[30px] h-[30px] lg:hidden" />{" "}
          <a
            href="/daftarBudaya"
            className="text-white px-3 py-2 rounded-md text-[17px] font-medium"
          >
            Daftar Budaya
          </a>
        </li>
        <li className=" p-2 border-b lg:border-none border-gray border-opacity-10 flex items-center gap-1">
          <img src={home} alt="" className="w-[30px] h-[30px] lg:hidden" />{" "}
          <a
            href="/profile"
            className="text-white px-3 py-2 rounded-md text-[17px] font-medium"
          >
            Profile
          </a>
        </li>
      </ul>
    </div>
  );
};
