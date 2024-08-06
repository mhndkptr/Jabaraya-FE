import React from "react";
import Navbar from "./komponen/navbar";
import tropical from "../assets/img-beranda/tropica2.png";

export default function BuatRencana() {
  return (
    <section className="w-full min-h-screen md:flex justify-center items-center px-4 md:px-0">
      <div className="flex flex-col items-center mt-5 md:mt-0">
        <div className="w-full text-center mb-8">
          <h1 className=" text-3xl md:text-4xl font-bold">
            Buat rencana wisatamu
          </h1>
          <p className="text-xl ">
            Buat lebih dari satu rencana untuk pengalaman maksimal
          </p>
        </div>
        <div className="md:w-[700px] md:h-[290px]  w-[400px] h-auto    shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] rounded-xl p-5 px-5">
          <div className="flex justify-between items-center">
            <h1 className=" text-[1.2rem] md:text-[1.7rem] font-bold text-black">
              Buat Rencana jalan-jalan yuk!
            </h1>
            <button className="flex justify-center items-center p-2 rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
              <span class="material-symbols-outlined">close</span>
            </button>
          </div>
          <div className="mt-7 flex items-center flex-1 gap-4  shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] rounded-md md:rounded-lg  p-2 px-3 md:p-5">
            <img
              src={tropical}
              alt=""
              className="w-[45px] h-[30px] border-r border-black pr-4  "
            />
            <h2 className="md:text-xl">Nama Perjalanan</h2>
          </div>
          <div className="mt-7 flex items-center flex-1 gap-4 justify-between  shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] rounded-md md:rounded-lg  p-2 px-3 md:p-5 ">
            <h2 className="md:text-xl">Buat Rencana Baru</h2>

            <button>
              <span class="material-symbols-outlined">add_circle</span>
            </button>
          </div>
          <div className="w-full text-center">
            <button className="p-3 text-white text-center  font-medium text-[1rem] md:hidden bg-jabarayaColors-700 rounded-xl w-[50%]  mt-4 ">
              <a href="/perjalananfavorite">Buat Rencana</a>
            </button>
          </div>
        </div>
        <button className="p-5 text-white font-medium text-[1.4rem] hidden md:block bg-jabarayaColors-700 rounded-2xl  w-[50%] mt-4 ">
          <a href="/perjalananfavorite">Buat Rencana</a>
        </button>
      </div>
    </section>
  );
}
