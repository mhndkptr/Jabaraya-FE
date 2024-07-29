import React from "react";
import berita1 from "../assets/img-beranda/berita1.png";
import logo from "../assets/img-beranda/JABARAYA.png";

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
      <div className="mx-44 relative mt-5 hidden lg:block">
        <div className="flex  items-center gap-2 relative after:after-content after:min-w-[80%] after:h-[1px] after:left-[16.5%] after:absolute after:bg-[#D9D9D9]">
          <div className="w-3 h-3 bg-[#D9D9D9] rounded-full"></div>
          <p className="  text-body-bold">Berita Budaya Seru</p>
        </div>
      </div>
      <div
        id="Berita"
        className=" h-auto  flex flex-wrap md:mx-10  lg:mx-20 justify-center items-center mt-3"
      >
        <div className="flex flex-wrap justify-center items-start gap-5">
          {/* CONTAINER ARTIKEL */}
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
