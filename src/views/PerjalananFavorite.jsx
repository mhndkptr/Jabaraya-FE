import React from "react";
import Navbar from "./komponen/navbar";
import kelinci from "../assets/img-beranda/berita1.png";

export default function PerjalananFavorite() {
  return (
    <>
      <Navbar />
      <section className="min-h-screen">
        <div className="lg:grid lg:grid-cols-[1fr,500px] ">
          {/* BAG 1 */}
          <div className="w-full ">
            <div>
              {/* bg image */}
              <div className="bg-gray-600 w-full h-[200px] "></div>
              {/* KOTAK  */}
              <div className="md:w-[550px] w-[350px]   h-auto shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white rounded-md mx-auto overfow top-[-130px] relative py-6 px-5">
                <h3 className="titel2-bold ">Perjalanan Bulan Juli!</h3>
                {/* SECT 1 */}
                <div className="flex justify-between  gap-4 md:gap-0  items-center md:mt-[14px] p-2 md:px-4 ">
                  <div className="flex items-center   w-auto p-[5px] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] md:p-3 gap-1 rounded-md md:justify-between md:gap-2">
                    <span class="material-symbols-outlined">location_on</span>
                    <p className="font-bold  text-[10px] md:text-[1rem] ">
                      Tangerang
                    </p>
                  </div>
                  <p className="text-caption-bold">Sampai</p>
                  <div className="flex items-center   w-auto p-[5px] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] md:p-3 gap-1 rounded-md md:justify-between md:gap-2">
                    <span class="material-symbols-outlined">location_on</span>
                    <p className="font-bold  text-[10px] md:text-[1rem] ">
                      Paris Van java
                    </p>
                  </div>
                </div>
                {/* SEC 2 */}
                <div className="flex items-center justify-between mt-[1rem] ">
                  <div className="flex items-center justify-center gap-2">
                    <span class="material-symbols-outlined">
                      calendar_today
                    </span>
                    <p className="font-medium  ">1 jul - 10 jul 2004</p>
                  </div>
                  <div>
                    <img
                      src={kelinci}
                      alt=""
                      className="w-[40px] h-[40px] rounded-full "
                    />
                  </div>
                </div>
                {/* SEC 3 */}
                <div className="flex items-center justify-between mt-[1.3rem]">
                  <div className="flex items-center justify-center gap-1">
                    <span class="material-symbols-outlined">
                      calendar_today
                    </span>
                    <p className="md:font-medium text-[13.5px] font-semibold  md:text-[1rem] ">
                      Rp. 2.000.000
                    </p>
                  </div>
                  <div className="flex items-center justify-center gap-1">
                    <span class="material-symbols-outlined">
                      calendar_today
                    </span>
                    <p className="md:font-medium text-[13.5px] font-semibold  md:text-[1rem]">
                      120 KM
                    </p>
                  </div>
                  <div className="flex items-center justify-center gap-1">
                    <span class="material-symbols-outlined">
                      calendar_today
                    </span>
                    <p className="md:font-medium text-[13.5px] font-semibold  md:text-[1rem]">
                      5 Hari
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* BAG 2*/}
            <div className="w-full flex justify-between items-center px-[2rem] mt-[-5rem]">
              <h4 className=" font-bold text-[20px] md:header5-bold md:text-[1rem]">
                Wisata Kamu{" "}
              </h4>
              <button className="flex items-center gap-2 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] rounded-lg px-3 py-4 ">
                <span class="material-symbols-outlined  text-[1.2rem] md:text-[2.2rem]">
                  add_circle
                </span>
                <p className="  text-[13px]  font-bold md:font-medium md:text-xl">
                  Tambah Destinasi Wisata
                </p>
              </button>
            </div>
            {/* BAG 3 */}
            <div className="mt-4 px-[2rem]">
              <div className="p-3 mt-4  shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] rounded-lg">
                <div className="flex justify-between items-center">
                  <h1 className="  font-bold text-xl md:text-2xl md:titel2-bold">
                    Lembang
                  </h1>
                  <div className="flex items-center justify-center gap-2 md:p-3 p-1 px-[5px] rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
                    <span class="material-symbols-outlined">
                      keyboard_arrow_down
                    </span>
                    <p className=" text-[0.8rem] font-semibold md:text-[1.3rem]">
                      Detail Perjalanan
                    </p>
                  </div>
                </div>

                <div className="grid  grid-cols-[1fr,1fr,1fr,1fr] w-full md:px-10  items-center p-2 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] rounded-md mt-4 py-2 md:py-4">
                  <div className="flex flex-col gap-1 justify-center  items-center  border-r-[1px] border-black">
                    {" "}
                    <span class="material-symbols-outlined  text-[1.6rem] md:text-3xl">
                      local_atm
                    </span>
                    <p className="font-semibold text-[12.5px] md:font-medium md:text-[1rem]">
                      Rp. 1.000.000
                    </p>
                  </div>
                  <div className="flex flex-col gap-1 justify-center items-center border-r-[1px] border-black">
                    {" "}
                    <span class="material-symbols-outlined  text-[1.6rem]  md:text-3xl">
                      directions_car
                    </span>
                    <p className="font-semibold text-[12.5px] md:font-medium md:text-[1rem]">
                      Mobil
                    </p>
                  </div>
                  <div className="flex flex-col gap-1 justify-center items-center border-r-[1px] border-black">
                    <span class="material-symbols-outlined  text-[1.6rem]  md:text-3xl">
                      road
                    </span>
                    <p className="font-semibold text-[12.5px] md:font-medium md:text-[1rem]">
                      120 Km
                    </p>
                  </div>
                  <div className="flex flex-col gap-1 justify-center items-center">
                    {" "}
                    <span class="material-symbols-outlined  text-[1.6rem]  md:text-3xl">
                      calendar_month
                    </span>
                    <p className=" font-semibold text-[12.5px] md:font-medium md:text-[1rem]">
                      5 Hari
                    </p>
                  </div>
                </div>
                <div className="w-full flex  gap-3 md:gap-6 items-center mt-4">
                  <button className="shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] p-2 px-3 rounded-md flex items-center justify-center gap-2">
                    <span class="material-symbols-outlined  text-[1.3rem] md:text-[1.7rem] ">
                      delete
                    </span>
                    <p className=" text-[10px] font-bold md:text-caption">
                      Hapus perjalanan
                    </p>
                  </button>
                  <button className="shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] p-2 px-3 rounded-md flex items-center justify-center gap-2">
                    <span class="material-symbols-outlined  text-[1.3rem]  md:text-[1.7rem]">
                      edit_square
                    </span>
                    <p className=" text-[10px] font-bold  md:text-caption">
                      Edit Perjalananmu!
                    </p>
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-4 px-[2rem]">
              <div className="p-3 mt-4  shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] rounded-lg">
                <div className="flex justify-between items-center">
                  <h1 className="  font-bold text-xl md:text-2xl md:titel2-bold">
                    Lembang
                  </h1>
                  <div className="flex items-center justify-center gap-2 md:p-3 p-1 px-[5px] rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
                    <span class="material-symbols-outlined">
                      keyboard_arrow_down
                    </span>
                    <p className=" text-[0.8rem] font-semibold md:text-[1.3rem]">
                      Detail Perjalanan
                    </p>
                  </div>
                </div>

                <div className="grid  grid-cols-[1fr,1fr,1fr,1fr] w-full md:px-10  items-center p-2 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] rounded-md mt-4 py-2 md:py-4">
                  <div className="flex flex-col gap-1 justify-center  items-center  border-r-[1px] border-black">
                    {" "}
                    <span class="material-symbols-outlined  text-[1.6rem] md:text-3xl">
                      local_atm
                    </span>
                    <p className="font-semibold text-[12.5px] md:font-medium md:text-[1rem]">
                      Rp. 1.000.000
                    </p>
                  </div>
                  <div className="flex flex-col gap-1 justify-center items-center border-r-[1px] border-black">
                    {" "}
                    <span class="material-symbols-outlined  text-[1.6rem]  md:text-3xl">
                      directions_car
                    </span>
                    <p className="font-semibold text-[12.5px] md:font-medium md:text-[1rem]">
                      Mobil
                    </p>
                  </div>
                  <div className="flex flex-col gap-1 justify-center items-center border-r-[1px] border-black">
                    <span class="material-symbols-outlined  text-[1.6rem]  md:text-3xl">
                      road
                    </span>
                    <p className="font-semibold text-[12.5px] md:font-medium md:text-[1rem]">
                      120 Km
                    </p>
                  </div>
                  <div className="flex flex-col gap-1 justify-center items-center">
                    {" "}
                    <span class="material-symbols-outlined  text-[1.6rem]  md:text-3xl">
                      calendar_month
                    </span>
                    <p className=" font-semibold text-[12.5px] md:font-medium md:text-[1rem]">
                      5 Hari
                    </p>
                  </div>
                </div>
                <div className="w-full flex  gap-3 md:gap-6 items-center mt-4">
                  <button className="shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] p-2 px-3 rounded-md flex items-center justify-center gap-2">
                    <span class="material-symbols-outlined  text-[1.3rem] md:text-[1.7rem] ">
                      delete
                    </span>
                    <p className=" text-[10px] font-bold md:text-caption">
                      Hapus perjalanan
                    </p>
                  </button>
                  <button className="shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] p-2 px-3 rounded-md flex items-center justify-center gap-2">
                    <span class="material-symbols-outlined  text-[1.3rem]  md:text-[1.7rem]">
                      edit_square
                    </span>
                    <p className=" text-[10px] font-bold  md:text-caption">
                      Edit Perjalananmu!
                    </p>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* MAPS */}
          <aside className="bg-slate-500 h-[40rem] hidden lg:block">
            <p className="text-center my-auto">MAPS </p>
          </aside>
        </div>
      </section>
    </>
  );
}
