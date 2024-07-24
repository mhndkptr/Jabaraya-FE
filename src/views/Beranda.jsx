import "./css/beranda.css";
import React from "react";
import kelinci from "../assets/img-beranda/kelinci.png";
import berita1 from "../assets/img-beranda/berita1.png";
import Navbar from "./komponen/navbar";

export default function Beranda() {
  return (
    // SECTION 1 BERANDA HALAMAN UTAMA
    <section className="  ">
      <section className="md:w-full md:h-screen md:bg-jabarayaColors-100">
        {/* <Navbar /> */}
        <div className="md:flex md:flex-col items-center justify-center">
          <div className="  lg:mt-10 flex justify-between items-center p-4 w-full">
            <img
              src={kelinci}
              alt=""
              className="h-[400px] w-[300px]  hidden lg:block "
            />
            <div className="md:text-center  py-4 text-start">
              <h1 className=" text-4xl font-bold md:text-center  text-black  ">
                Selamat Datang di JABARAYA!
              </h1>
              <h2 className="md:mt-5 mt-2 text-xl md:text-2xl font-medium    ">
                Tempat kamu mengeksplor Bandung
              </h2>
              <h2 className="md:text-2xl  text-xl font-medium   ">
                {" "}
                dengan pengalaman terbaik!
              </h2>
              <button className="mt-5 px-5 py-3 bg-jabarayaColors-700 rounded-md ">
                <p className="text-white text-base font-light  ">
                  Yuk Eksplor Bandung!
                </p>
              </button>
            </div>
            <img
              src={kelinci}
              alt=""
              className="h-[400px] w-[300px] hidden lg:block "
            />
          </div>
        </div>
      </section>
      {/* // SECTION 2 PERJALANAN */}

      <section
        id="BuatRencana"
        className="w-full md:h-screen  h-auto  bg-white md:bg-jabarayaColors-50 flex justify-center items-center"
      >
        <div className="flex flex-col justify-center items-center p-2 ">
          <h1 className="font-semibold text-4xl text-center mb-4">
            Buat Rencana Perjalanan Anda
          </h1>
          <h3 className="font-medium text-xl text-center mb-4">
            Lorem ipsum dolor sit amet, consectetur
          </h3>
          <div className="md:w-[700px] md:h-[310px]  w-[400px] h-[200px] bg-slate-50 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-xl  flex flex-col justify-center items-center">
            <div>
              <p className="text-center">😊</p>
              <p className="font-medium">Healing dulu gasih masbro!</p>
            </div>
          </div>
          <button className="p-4 bg-jabarayaColors-700 mt-4 w-full rounded-md  ">
            <p className="text-white font-medium">
              Buat rencana perjalanan kamu disini!
            </p>
          </button>
        </div>
      </section>
      {/* SECTION 3 BERITA TERKINI DIBANDUNG */}
      <section
        id="Berita"
        className="md:w-full   mt-4 md:mt-0 h-auto md:h-screen  bg-white md:bg-jabarayaColors-100 flex lg:justify-center items-center overflow-x-auto whitespace-no-wrap lg:overflow-hidden px-4 "
      >
        <div className="flex flex-col  justify-center items-start md:items-center p-2 ">
          <div className="flex justify-between items-center gap-16">
            <h1 className="font-semibold  text-2xl md:text-4xl text-center lg:mb-4">
              Seputar Bandung
            </h1>
            <button className=" md:px-10 px-5  block md:hidden py-2 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-white rounded-md">
              <p className="font-semibold text-xs">Selengkapnya</p>
            </button>
          </div>
          <h3 className="font-medium text-xl text-center  hidden md:block   ">
            Lorem ipsum dolor sit amet, consectetur
          </h3>
          {/* CONTAINER BERITA */}
          <div className="mt-6 w-auto h-auto flex  justify-start lg:justify-center items-center gap-5  md:overflow-hidden    overflow-x-scroll    ">
            <div className=" bg-slate-50 shadow-md rounded-lg h-[400px] w-[310px] p-2">
              <div className="flex flex-col justify-center items-center">
                <img
                  src={berita1}
                  alt=""
                  className=" object-cover  rounded-md"
                />
                <h2 className="font-semibold mb-2">
                  Dunia Jurnalistik Berduka, Wartawan Senior Yusran Pare
                  Meninggal Dunia, Dikebumikan di TPU Nagrog
                </h2>
                <div className="flex justify-between items-center w-full">
                  <div>
                    <p className="text-xs">
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
                      className="text-xs font-semibold border border-jabarayaColors-700 p-1 rounded-md  text-jabarayaColors-700 "
                    >
                      20/15/2024
                    </a>
                    <a
                      href=""
                      className="text-xs border font-semibold border-jabarayaColors-700 p-1 rounded-md  text-jabarayaColors-700"
                    >
                      Kuliner
                    </a>
                  </div>
                </div>
                <button className="w-full rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] px-2 py-3 flex justify-center items-center mt-4">
                  <p className="font-medium">Baca Selengkapnya</p>
                </button>
              </div>
            </div>
            <div className=" bg-slate-50 shadow-md rounded-lg h-[400px] w-[310px] p-2">
              <div className="flex flex-col justify-center items-center">
                <img
                  src={berita1}
                  alt=""
                  className=" object-cover  rounded-md"
                />
                <h2 className="font-semibold mb-2">
                  Dunia Jurnalistik Berduka, Wartawan Senior Yusran Pare
                  Meninggal Dunia, Dikebumikan di TPU Nagrog
                </h2>
                <div className="flex justify-between items-center w-full">
                  <div>
                    <p className="text-xs">
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
                      className="text-xs font-semibold border border-jabarayaColors-700 p-1 rounded-md  text-jabarayaColors-700 "
                    >
                      20/15/2024
                    </a>
                    <a
                      href=""
                      className="text-xs border font-semibold border-jabarayaColors-700 p-1 rounded-md  text-jabarayaColors-700"
                    >
                      Kuliner
                    </a>
                  </div>
                </div>
                <button className="w-full rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] px-2 py-3 flex justify-center items-center mt-4">
                  <p className="font-medium">Baca Selengkapnya</p>
                </button>
              </div>
            </div>
            <div className=" bg-slate-50 shadow-md rounded-lg h-[400px] w-[310px] p-2">
              <div className="flex flex-col justify-center items-center">
                <img
                  src={berita1}
                  alt=""
                  className=" object-cover  rounded-md"
                />
                <h2 className="font-semibold mb-2">
                  Dunia Jurnalistik Berduka, Wartawan Senior Yusran Pare
                  Meninggal Dunia, Dikebumikan di TPU Nagrog
                </h2>
                <div className="flex justify-between items-center w-full">
                  <div>
                    <p className="text-xs">
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
                      className="text-xs font-semibold border border-jabarayaColors-700 p-1 rounded-md  text-jabarayaColors-700 "
                    >
                      20/15/2024
                    </a>
                    <a
                      href=""
                      className="text-xs border font-semibold border-jabarayaColors-700 p-1 rounded-md  text-jabarayaColors-700"
                    >
                      Kuliner
                    </a>
                  </div>
                </div>
                <button className="w-full rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] px-2 py-3 flex justify-center items-center mt-4">
                  <p className="font-medium">Baca Selengkapnya</p>
                </button>
              </div>
            </div>
          </div>
          <button className="mt-10 px-10  hidden md:block py-2 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-white rounded-md">
            <p className="font-semibold">Lihat lebih banyak </p>
          </button>
        </div>
      </section>
      {/* SECTION 4 ARTIKEL  */}
      <section
        id="Berita"
        className="md:w-full mt-4 md:mt-0 h-auto md:h-screen  bg-white md:bg-jabarayaColors-100 flex lg:justify-center items-center overflow-x-auto whitespace-no-wrap lg:overflow-hidden px-4 "
      >
        <div className="flex flex-col  justify-center items-start md:items-center p-2 ">
          <div className="flex justify-between items-center gap-16">
            <h1 className="font-semibold  text-2xl md:text-4xl text-center lg:mb-4">
              Yang Lagi Viral!
            </h1>
            <button className=" md:px-10 px-5  block md:hidden py-2 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-white rounded-md">
              <p className="font-semibold text-xs">Selengkapnya</p>
            </button>
          </div>
          <h3 className="font-medium text-xl text-center  hidden md:block   ">
            Lorem ipsum dolor sit amet, consectetur
          </h3>
          {/* CONTAINER BERITA */}
          <div className="mt-6 w-auto h-auto flex  justify-start lg:justify-center items-center gap-5  md:overflow-hidden    overflow-x-scroll    ">
            <div className=" bg-slate-50 shadow-md rounded-lg h-[400px] w-[310px] p-2">
              <div className="flex flex-col justify-center items-center">
                <img
                  src={berita1}
                  alt=""
                  className=" object-cover  rounded-md"
                />
                <h2 className="font-semibold mb-2">
                  Dunia Jurnalistik Berduka, Wartawan Senior Yusran Pare
                  Meninggal Dunia, Dikebumikan di TPU Nagrog
                </h2>
                <div className="flex justify-between items-center w-full">
                  <div>
                    <p className="text-xs">
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
                      className="text-xs font-semibold border border-jabarayaColors-700 p-1 rounded-md  text-jabarayaColors-700 "
                    >
                      20/15/2024
                    </a>
                    <a
                      href=""
                      className="text-xs border font-semibold border-jabarayaColors-700 p-1 rounded-md  text-jabarayaColors-700"
                    >
                      Kuliner
                    </a>
                  </div>
                </div>
                <button className="w-full rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] px-2 py-3 flex justify-center items-center mt-4">
                  <p className="font-medium">Baca Selengkapnya</p>
                </button>
              </div>
            </div>
            <div className=" bg-slate-50 shadow-md rounded-lg h-[400px] w-[310px] p-2">
              <div className="flex flex-col justify-center items-center">
                <img
                  src={berita1}
                  alt=""
                  className=" object-cover  rounded-md"
                />
                <h2 className="font-semibold mb-2">
                  Dunia Jurnalistik Berduka, Wartawan Senior Yusran Pare
                  Meninggal Dunia, Dikebumikan di TPU Nagrog
                </h2>
                <div className="flex justify-between items-center w-full">
                  <div>
                    <p className="text-xs">
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
                      className="text-xs font-semibold border border-jabarayaColors-700 p-1 rounded-md  text-jabarayaColors-700 "
                    >
                      20/15/2024
                    </a>
                    <a
                      href=""
                      className="text-xs border font-semibold border-jabarayaColors-700 p-1 rounded-md  text-jabarayaColors-700"
                    >
                      Kuliner
                    </a>
                  </div>
                </div>
                <button className="w-full rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] px-2 py-3 flex justify-center items-center mt-4">
                  <p className="font-medium">Baca Selengkapnya</p>
                </button>
              </div>
            </div>
            <div className=" bg-slate-50 shadow-md rounded-lg h-[400px] w-[310px] p-2">
              <div className="flex flex-col justify-center items-center">
                <img
                  src={berita1}
                  alt=""
                  className=" object-cover  rounded-md"
                />
                <h2 className="font-semibold mb-2">
                  Dunia Jurnalistik Berduka, Wartawan Senior Yusran Pare
                  Meninggal Dunia, Dikebumikan di TPU Nagrog
                </h2>
                <div className="flex justify-between items-center w-full">
                  <div>
                    <p className="text-xs">
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
                      className="text-xs font-semibold border border-jabarayaColors-700 p-1 rounded-md  text-jabarayaColors-700 "
                    >
                      20/15/2024
                    </a>
                    <a
                      href=""
                      className="text-xs border font-semibold border-jabarayaColors-700 p-1 rounded-md  text-jabarayaColors-700"
                    >
                      Kuliner
                    </a>
                  </div>
                </div>
                <button className="w-full rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] px-2 py-3 flex justify-center items-center mt-4">
                  <p className="font-medium">Baca Selengkapnya</p>
                </button>
              </div>
            </div>
          </div>
          <button className="mt-10 px-10  hidden md:block py-2 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-white rounded-md">
            <p className="font-semibold">Lihat lebih banyak </p>
          </button>
        </div>
      </section>
      {/* SECTION 5 EVENT  */}
      <section
        id="Berita"
        className="md:w-full  mt-4 md:mt-0  h-auto lg:h-screen  bg-white md:bg-jabarayaColors-100 flex lg:justify-center items-center overflow-x-auto whitespace-no-wrap lg:overflow-hidden px-4 "
      >
        <div className="flex flex-col  justify-center items-start md:items-center p-2 ">
          <div className="flex justify-between items-center gap-16">
            <h1 className="font-semibold  text-2xl md:text-4xl text-center lg:mb-4">
              Event seru di Bandung
            </h1>
            <button className=" md:px-10 px-5  block md:hidden py-2 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-white rounded-md">
              <p className="font-semibold text-xs">Selengkapnya</p>
            </button>
          </div>
          <h3 className="font-medium text-xl text-center  hidden md:block   ">
            Lorem ipsum dolor sit amet, consectetur
          </h3>
          {/* CONTAINER BERITA */}
          <div className="mt-6 w-auto h-auto flex  justify-start lg:justify-center items-center gap-5  md:overflow-hidden    overflow-x-scroll    ">
            <div className=" bg-slate-50 shadow-md rounded-lg h-[400px] w-[310px] p-2">
              <div className="flex flex-col justify-center items-center">
                <img
                  src={berita1}
                  alt=""
                  className=" object-cover  rounded-md"
                />
                <h2 className="font-semibold mb-2">
                  Dunia Jurnalistik Berduka, Wartawan Senior Yusran Pare
                  Meninggal Dunia, Dikebumikan di TPU Nagrog
                </h2>
                <div className="flex justify-between items-center w-full">
                  <div>
                    <p className="text-xs">
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
                      className="text-xs font-semibold border border-jabarayaColors-700 p-1 rounded-md  text-jabarayaColors-700 "
                    >
                      20/15/2024
                    </a>
                    <a
                      href=""
                      className="text-xs border font-semibold border-jabarayaColors-700 p-1 rounded-md  text-jabarayaColors-700"
                    >
                      Kuliner
                    </a>
                  </div>
                </div>
                <button className="w-full rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] px-2 py-3 flex justify-center items-center mt-4">
                  <p className="font-medium">Baca Selengkapnya</p>
                </button>
              </div>
            </div>
            <div className=" bg-slate-50 shadow-md rounded-lg h-[400px] w-[310px] p-2">
              <div className="flex flex-col justify-center items-center">
                <img
                  src={berita1}
                  alt=""
                  className=" object-cover  rounded-md"
                />
                <h2 className="font-semibold mb-2">
                  Dunia Jurnalistik Berduka, Wartawan Senior Yusran Pare
                  Meninggal Dunia, Dikebumikan di TPU Nagrog
                </h2>
                <div className="flex justify-between items-center w-full">
                  <div>
                    <p className="text-xs">
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
                      className="text-xs font-semibold border border-jabarayaColors-700 p-1 rounded-md  text-jabarayaColors-700 "
                    >
                      20/15/2024
                    </a>
                    <a
                      href=""
                      className="text-xs border font-semibold border-jabarayaColors-700 p-1 rounded-md  text-jabarayaColors-700"
                    >
                      Kuliner
                    </a>
                  </div>
                </div>
                <button className="w-full rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] px-2 py-3 flex justify-center items-center mt-4">
                  <p className="font-medium">Baca Selengkapnya</p>
                </button>
              </div>
            </div>
            <div className=" bg-slate-50 shadow-md rounded-lg h-[400px] w-[310px] p-2">
              <div className="flex flex-col justify-center items-center">
                <img
                  src={berita1}
                  alt=""
                  className=" object-cover  rounded-md"
                />
                <h2 className="font-semibold mb-2">
                  Dunia Jurnalistik Berduka, Wartawan Senior Yusran Pare
                  Meninggal Dunia, Dikebumikan di TPU Nagrog
                </h2>
                <div className="flex justify-between items-center w-full">
                  <div>
                    <p className="text-xs">
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
                      className="text-xs font-semibold border border-jabarayaColors-700 p-1 rounded-md  text-jabarayaColors-700 "
                    >
                      20/15/2024
                    </a>
                    <a
                      href=""
                      className="text-xs border font-semibold border-jabarayaColors-700 p-1 rounded-md  text-jabarayaColors-700"
                    >
                      Kuliner
                    </a>
                  </div>
                </div>
                <button className="w-full rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] px-2 py-3 flex justify-center items-center mt-4">
                  <p className="font-medium">Baca Selengkapnya</p>
                </button>
              </div>
            </div>
          </div>
          <button className="mt-10 px-10  hidden md:block py-2 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-white rounded-md">
            <p className="font-semibold">Lihat lebih banyak </p>
          </button>
        </div>
      </section>
      {/* SECTION 6 TELUSURI BUDAYA  */}
      <section
        id="DaftarBudaya"
        className="w-full h-auto bg-white flex justify-center items-center  "
      >
        <div className="flex flex-col justify-center items-center mt-10">
          <h1 className="font-semibold text-4xl text-center mb-4">
            Telusuri Budaya Bandung
          </h1>
          <h3 className="font-medium text-xl text-center">
            Lihat budaya Bandung dengan lebih luas!
          </h3>

          {/* CONTAINER ARTIKEL */}
          {/* Container 1 */}
          <div className="mt-6  w-auto h-auto flex justify-center items-center gap-5 flex-wrap">
            <div className=" bg-slate-50 shadow-md rounded-lg h-[360px] w-[310px] p-2  ">
              <div>
                <h1 className="font-semibold text-2xl p-2">Tari di Bandung</h1>
              </div>
              <div className="flex flex-col justify-center items-center ">
                <img
                  src={berita1}
                  alt=""
                  className=" object-cover  rounded-md"
                />
                <div className="flex justify-between items-center w-full mt-4"></div>
                <button className="w-full rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] px-2 py-3 flex justify-center items-center mt-4">
                  <p className="font-medium ">Lihat lebih banyak</p>
                </button>
              </div>
            </div>

            {/* Container 2 */}
            <div className=" bg-slate-50 shadow-md rounded-lg h-[360px] w-[310px] p-2">
              <div>
                <h1 className="font-semibold text-2xl p-2">
                  Wayang di Bandung
                </h1>
              </div>
              <div className="flex flex-col justify-center items-center ">
                <img
                  src={berita1}
                  alt=""
                  className=" object-cover  rounded-md"
                />
                <div className="flex justify-between items-center w-full mt-4"></div>
                <button className="w-full rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] px-2 py-3 flex justify-center items-center mt-4">
                  <p className="font-medium ">Lihat lebih banyak</p>
                </button>
              </div>
            </div>

            {/* Container 3 */}
            <div className=" bg-slate-50 shadow-md rounded-lg h-[360px] w-[310px] p-2">
              <div>
                <h1 className="font-semibold text-2xl p-2">
                  Kuliner di Bandung
                </h1>
              </div>
              <div className="flex flex-col justify-center items-center ">
                <img
                  src={berita1}
                  alt=""
                  className=" object-cover  rounded-md"
                />
                <div className="flex justify-between items-center w-full mt-4"></div>
                <button className="w-full rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] px-2 py-3 flex justify-center items-center mt-4">
                  <p className="font-medium ">Lihat lebih banyak</p>
                </button>
              </div>
            </div>
          </div>

          <div className="mt-6 w-auto h-auto flex justify-center items-center gap-5  flex-wrap">
            {/* Container 4 */}
            <div className="bg-slate-50 shadow-md rounded-lg h-[360px] w-[310px] p-2">
              <div>
                <h1 className="font-semibold text-2xl p-2">Musik di Bandung</h1>
              </div>
              <div className="flex flex-col justify-center items-center">
                <img src={berita1} alt="" className="object-cover rounded-md" />
                <div className="flex justify-between items-center w-full mt-4"></div>
                <button className="w-full rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] px-2 py-3 flex justify-center items-center mt-4">
                  <p className="font-medium">Lihat lebih banyak</p>
                </button>
              </div>
            </div>

            {/* Container 5 */}
            <div className="bg-slate-50 shadow-md rounded-lg h-[360px] w-[310px] p-2">
              <div>
                <h1 className="font-semibold text-2xl p-2">
                  Alat Musik di Bandung
                </h1>
              </div>
              <div className="flex flex-col justify-center items-center">
                <img src={berita1} alt="" className="object-cover rounded-md" />
                <div className="flex justify-between items-center w-full mt-4"></div>
                <button className="w-full rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] px-2 py-3 flex justify-center items-center mt-4">
                  <p className="font-medium">Lihat lebih banyak</p>
                </button>
              </div>
            </div>

            {/* Container 6 */}
            <div className="bg-slate-50 shadow-md rounded-lg h-[360px] w-[310px] p-2">
              <div>
                <h1 className="font-semibold text-2xl p-2">
                  {" "}
                  Senjata Adat di Bandung
                </h1>
              </div>
              <div className="flex flex-col justify-center items-center">
                <img src={berita1} alt="" className="object-cover rounded-md" />
                <div className="flex justify-between items-center w-full mt-4"></div>
                <button className="w-full rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] px-2 py-3 flex justify-center items-center mt-4">
                  <p className="font-medium">Lihat lebih banyak</p>
                </button>
              </div>
            </div>
          </div>

          {/* Container 7 */}
          <div className="mt-6 w-auto h-auto flex justify-center items-center gap-5  flex-wrap">
            <div className="bg-slate-50 shadow-md rounded-lg h-[360px] w-[310px] p-2">
              <div>
                <h1 className="font-semibold text-2xl p-2">
                  Rumah Adat di Bandung
                </h1>
              </div>
              <div className="flex flex-col justify-center items-center">
                <img src={berita1} alt="" className="object-cover rounded-md" />
                <div className="flex justify-between items-center w-full mt-4"></div>
                <button className="w-full rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] px-2 py-3 flex justify-center items-center mt-4">
                  <p className="font-medium">Lihat lebih banyak</p>
                </button>
              </div>
            </div>

            {/* Container 8 */}
            <div
              className="bg-slate-50 shadow-md rounded-lg h-[360px] w-[310px]
            p-2"
            >
              <div>
                <h1 className="font-semibold text-2xl p-2">
                  Museum di Bandung
                </h1>
              </div>
              <div className="flex flex-col justify-center items-center">
                <img src={berita1} alt="" className="object-cover rounded-md" />
                <div className="flex justify-between items-center w-full mt-4"></div>
                <button className="w-full rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] px-2 py-3 flex justify-center items-center mt-4">
                  <p className="font-medium">Lihat lebih banyak</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
