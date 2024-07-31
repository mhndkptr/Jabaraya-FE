import React from "react";
import berita1 from "../assets/img-beranda/berita1.png";
import logo from "../assets/img-beranda/JABARAYA.png";
import kelinci from "../assets/img-beranda/kelinci.png";
import date from "../assets/img-beranda/date.png";
export default function Event() {
  return (
    <section className="min-h-screen  mb-0 md:mb-10">
      <h2 className="text-4xl text-center mt-16 font-semibold">
        Event Seru di Bandung
      </h2>
      <div class="h-10 text-center w-full flex justify-center items-center relative mt-3">
        <div class="relative w-8 h-8  bg-white  after:after-content after:w-[165px] after:h-[1px] after:bg-[#D9D9D9] after:absolute after:top-[50%] after:left-12 before:after-content before:w-[165px] before:h-[1px] before:bg-[#D9D9D9] before:absolute before:top-[50%] before:right-12">
          <img src={logo} alt="" />
        </div>
      </div>
      {/* untuk Date */}
      <div className=" xl:mx-28 grid-cols-[1fr,1fr] md:grid mt-8 mb-5 items-center justify-center hidden p-2 ">
        <div className="w-full flex flex-col justify-center items-center">
          <h1 className="lg:text-[48px] font-semibold">
            Cek Event Seru Bulan ini!
          </h1>
          <h1 className="lg:text-[20px] font-semibold">
            Lihat info terbaru event seru di Bandung!
          </h1>
          <img
            src={kelinci}
            alt=""
            className=" w-[270px] h-[300px] lg:w-[300px] lg:h-[329px] "
          />
        </div>
        {/* UNTUK DATE */}
        <div className="w-full flex justify-center items-center">
          <img
            src={date}
            alt=""
            className="w-[350px] h-[400px] lg:w-[430px] lg:h-[466px]"
          />
        </div>
      </div>
      <div
        id="Berita"
        className=" h-auto  flex flex-wrap md:mx-10  lg:mx-20 justify-center items-center mt-3"
      >
        <div className="flex flex-wrap justify-center items-start gap-5">
          {/* CONTAINER  */}
          <div className="flex flex-wrap justify-center items-start gap-5 px-6 md:px-1  mb-5 ">
            <div className=" bg-slate-50 shadow-md gap-2 items-center rounded-lg flex lg:block lg:h-[400px] h-auto w-full  lg:w-[310px] p-2">
              <img
                src={berita1}
                alt=""
                className=" object-cover  rounded-md w-[130px] h-[130px]  lg:w-auto lg:h-auto "
              />
              <div className="flex-col justify-center items-center">
                <h2 className="font-semibold">
                  Dunia Jurnalistik Berduka, Wartawan Senior Yusran Pare
                  Meninggal Dunia, Dikebumikan di TPU Nagrog
                </h2>
                <div className=" flex-col md:flex-row flex  justify-between md:items-center w-full ">
                  <div>
                    <p className="text-xs mb-1">
                      Oleh{" "}
                      <a
                        href=""
                        c
                        className="font-semibold text-jabarayaColors-700"
                      >
                        Muhammad nur Shodiq
                      </a>{" "}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href=""
                      className="text-xs font-semibold border border-jabarayaColors-700 p-1 w-full  rounded-md  text-jabarayaColors-700 "
                    >
                      20/15/2024
                    </a>
                    <a
                      href=""
                      className="text-xs border font-semibold border-jabarayaColors-700 p-1 w-full rounded-md  text-jabarayaColors-700"
                    >
                      Kuliner
                    </a>
                  </div>
                </div>
                <button className="w-full hidden  rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] px-2 py-3 md:flex justify-center items-center mt-4">
                  <p className="font-medium">Baca Selengkapnya</p>
                </button>
              </div>
            </div>
            <div className=" bg-slate-50 shadow-md gap-2 items-center rounded-lg flex lg:block lg:h-[400px] h-auto w-full  lg:w-[310px] p-2">
              <img
                src={berita1}
                alt=""
                className=" object-cover  rounded-md w-[130px] h-[130px]  lg:w-auto lg:h-auto "
              />
              <div className="flex-col justify-center items-center">
                <h2 className="font-semibold">
                  Dunia Jurnalistik Berduka, Wartawan Senior Yusran Pare
                  Meninggal Dunia, Dikebumikan di TPU Nagrog
                </h2>
                <div className=" flex-col md:flex-row flex  justify-between md:items-center w-full ">
                  <div>
                    <p className="text-xs mb-1">
                      Oleh{" "}
                      <a
                        href=""
                        c
                        className="font-semibold text-jabarayaColors-700"
                      >
                        Muhammad nur Shodiq
                      </a>{" "}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href=""
                      className="text-xs font-semibold border border-jabarayaColors-700 p-1 w-full  rounded-md  text-jabarayaColors-700 "
                    >
                      20/15/2024
                    </a>
                    <a
                      href=""
                      className="text-xs border font-semibold border-jabarayaColors-700 p-1 w-full rounded-md  text-jabarayaColors-700"
                    >
                      Kuliner
                    </a>
                  </div>
                </div>
                <button className="w-full hidden  rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] px-2 py-3 md:flex justify-center items-center mt-4">
                  <p className="font-medium">Baca Selengkapnya</p>
                </button>
              </div>
            </div>
            <div className=" bg-slate-50 shadow-md gap-2 items-center rounded-lg flex lg:block lg:h-[400px] h-auto w-full  lg:w-[310px] p-2">
              <img
                src={berita1}
                alt=""
                className=" object-cover  rounded-md w-[130px] h-[130px]  lg:w-auto lg:h-auto "
              />
              <div className="flex-col justify-center items-center">
                <h2 className="font-semibold">
                  Dunia Jurnalistik Berduka, Wartawan Senior Yusran Pare
                  Meninggal Dunia, Dikebumikan di TPU Nagrog
                </h2>
                <div className=" flex-col md:flex-row flex  justify-between md:items-center w-full ">
                  <div>
                    <p className="text-xs mb-1">
                      Oleh{" "}
                      <a
                        href=""
                        c
                        className="font-semibold text-jabarayaColors-700"
                      >
                        Muhammad nur Shodiq
                      </a>{" "}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href=""
                      className="text-xs font-semibold border border-jabarayaColors-700 p-1 w-full  rounded-md  text-jabarayaColors-700 "
                    >
                      20/15/2024
                    </a>
                    <a
                      href=""
                      className="text-xs border font-semibold border-jabarayaColors-700 p-1 w-full rounded-md  text-jabarayaColors-700"
                    >
                      Kuliner
                    </a>
                  </div>
                </div>
                <button className="w-full hidden  rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] px-2 py-3 md:flex justify-center items-center mt-4">
                  <p className="font-medium">Baca Selengkapnya</p>
                </button>
              </div>
            </div>
            <div className=" bg-slate-50 shadow-md gap-2 items-center rounded-lg flex lg:block lg:h-[400px] h-auto w-full  lg:w-[310px] p-2">
              <img
                src={berita1}
                alt=""
                className=" object-cover  rounded-md w-[130px] h-[130px]  lg:w-auto lg:h-auto "
              />
              <div className="flex-col justify-center items-center">
                <h2 className="font-semibold">
                  Dunia Jurnalistik Berduka, Wartawan Senior Yusran Pare
                  Meninggal Dunia, Dikebumikan di TPU Nagrog
                </h2>
                <div className=" flex-col md:flex-row flex  justify-between md:items-center w-full ">
                  <div>
                    <p className="text-xs mb-1">
                      Oleh{" "}
                      <a
                        href=""
                        c
                        className="font-semibold text-jabarayaColors-700"
                      >
                        Muhammad nur Shodiq
                      </a>{" "}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href=""
                      className="text-xs font-semibold border border-jabarayaColors-700 p-1 w-full  rounded-md  text-jabarayaColors-700 "
                    >
                      20/15/2024
                    </a>
                    <a
                      href=""
                      className="text-xs border font-semibold border-jabarayaColors-700 p-1 w-full rounded-md  text-jabarayaColors-700"
                    >
                      Kuliner
                    </a>
                  </div>
                </div>
                <button className="w-full hidden  rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] px-2 py-3 md:flex justify-center items-center mt-4">
                  <p className="font-medium">Baca Selengkapnya</p>
                </button>
              </div>
            </div>
            <div className=" bg-slate-50 shadow-md gap-2 items-center rounded-lg flex lg:block lg:h-[400px] h-auto w-full  lg:w-[310px] p-2">
              <img
                src={berita1}
                alt=""
                className=" object-cover  rounded-md w-[130px] h-[130px]  lg:w-auto lg:h-auto "
              />
              <div className="flex-col justify-center items-center">
                <h2 className="font-semibold">
                  Dunia Jurnalistik Berduka, Wartawan Senior Yusran Pare
                  Meninggal Dunia, Dikebumikan di TPU Nagrog
                </h2>
                <div className=" flex-col md:flex-row flex  justify-between md:items-center w-full ">
                  <div>
                    <p className="text-xs mb-1">
                      Oleh{" "}
                      <a
                        href=""
                        c
                        className="font-semibold text-jabarayaColors-700"
                      >
                        Muhammad nur Shodiq
                      </a>{" "}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href=""
                      className="text-xs font-semibold border border-jabarayaColors-700 p-1 w-full  rounded-md  text-jabarayaColors-700 "
                    >
                      20/15/2024
                    </a>
                    <a
                      href=""
                      className="text-xs border font-semibold border-jabarayaColors-700 p-1 w-full rounded-md  text-jabarayaColors-700"
                    >
                      Kuliner
                    </a>
                  </div>
                </div>
                <button className="w-full hidden  rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] px-2 py-3 md:flex justify-center items-center mt-4">
                  <p className="font-medium">Baca Selengkapnya</p>
                </button>
              </div>
            </div>
            <div className=" bg-slate-50 shadow-md gap-2 items-center rounded-lg flex lg:block lg:h-[400px] h-auto w-full  lg:w-[310px] p-2">
              <img
                src={berita1}
                alt=""
                className=" object-cover  rounded-md w-[130px] h-[130px]  lg:w-auto lg:h-auto "
              />
              <div className="flex-col justify-center items-center">
                <h2 className="font-semibold">
                  Dunia Jurnalistik Berduka, Wartawan Senior Yusran Pare
                  Meninggal Dunia, Dikebumikan di TPU Nagrog
                </h2>
                <div className=" flex-col md:flex-row flex  justify-between md:items-center w-full ">
                  <div>
                    <p className="text-xs mb-1">
                      Oleh{" "}
                      <a
                        href=""
                        c
                        className="font-semibold text-jabarayaColors-700"
                      >
                        Muhammad nur Shodiq
                      </a>{" "}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href=""
                      className="text-xs font-semibold border border-jabarayaColors-700 p-1 w-full  rounded-md  text-jabarayaColors-700 "
                    >
                      20/15/2024
                    </a>
                    <a
                      href=""
                      className="text-xs border font-semibold border-jabarayaColors-700 p-1 w-full rounded-md  text-jabarayaColors-700"
                    >
                      Kuliner
                    </a>
                  </div>
                </div>
                <button className="w-full hidden  rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] px-2 py-3 md:flex justify-center items-center mt-4">
                  <p className="font-medium">Baca Selengkapnya</p>
                </button>
              </div>
            </div>
          </div>
          {/* PAGE */}

          <div className="lg:flex justify-center items-center gap-3 mt-3 hidden">
            <span class="material-symbols-outlined py-2 px-2 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] rounded-md">
              keyboard_double_arrow_left
            </span>
            <span class="material-symbols-outlined py-2 px-2 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] rounded-md">
              chevron_left
            </span>
            <span className="py-2 px-4 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] rounded-md">
              1
            </span>
            <span className="py-2 px-4 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] rounded-md">
              2
            </span>
            <span className="py-2 px-4 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] rounded-md">
              3
            </span>
            <span className="py-2 px-4 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] rounded-md">
              4
            </span>
            <span className="py-2 px-4 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] rounded-md">
              5
            </span>
            <span class="material-symbols-outlined py-2 px-2 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] rounded-md">
              chevron_right
            </span>
            <span class="material-symbols-outlined py-2 px-2 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] rounded-md">
              double_arrow
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
