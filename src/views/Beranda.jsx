import React from "react";
import kelinci from "../assets/img-beranda/kelinci.png";
import berita1 from "../assets/img-beranda/berita1.png";
import emoji from "../assets/img-beranda/Group.png";
import tropical from "../assets/img-beranda/tropical.png";
import jalan from "../assets/img-beranda/jalan.png";
import money from "../assets/img-beranda/money.png";
import jam from "../assets/img-beranda/jam.png";
import mobil from "../assets/img-beranda/mobil.png";

export default function Beranda() {
  return (
    // SECTION 1 BERANDA HALAMAN UTAMA
    <section>
      <section className="md:w-full md:h-screen md:bg-jabarayaColors-100">
        {/* <Navbar /> */}
        <div className="md:flex md:flex-col items-center justify-center">
          <div className="   flex justify-between items-center p-4 w-full md:h-screen ">
            <img
              src={kelinci}
              alt=""
              className="h-[400px] w-[300px]  hidden lg:block "
            />
            <div className="md:text-center  w-full py-4 text-start">
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
        <div className="flex flex-col justify-center items-center p-3 ">
          <h1 className="font-semibold text-4xl text-center mb-4  hidden md:block">
            Buat Rencana Perjalanan Anda
          </h1>
          <h3 className="font-medium text-xl text-center mb-4  hidden md:block">
            Lorem ipsum dolor sit amet, consectetur
          </h3>
          {/* BELUM BUAT RENCANA */}
          <div className="md:w-[700px] md:h-[310px] hidden  w-[400px] h-[200px] bg-gradient-to-r from-[#6C4EE4] to-[#1B78AD]  shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-xl  flex flex-col justify-center items-center">
            <div className="flex flex-col items-center">
              <img src={emoji} alt="" className="w-[70px] h-[80px] " />
              <button className="p-3 bg-white rounded-xl mt-5 px-4 ">
                <p className="text-xl text-[#1C426B] ">
                  Buat rencana Healing disini
                </p>
              </button>
            </div>
          </div>
          {/* SETELAH BUAT RENCANA */}
          <div className="md:w-[700px] md:h-[310px]  w-[400px] h-auto bg-jabarayaColors-700  shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-xl p-4">
            <div className="flex gap-3 text-white items-center">
              <img src={tropical} alt="" className="w-[30px] h-[30px] " />
              <h3 className="font-semibold text-xl">
                Perjalanan seru bulan Juli!
              </h3>
            </div>
            <div>
              <div className="flex flex-wrap  mt-5 gap-5">
                <div className="flex items-center gap-2 bg-white p-2 rounded-lg flex-1">
                  <img src={money} alt="" />
                  <p className="text-[15px] font-semibold text-[#1C426B] ">
                    Rp. 1.000.000
                  </p>
                </div>
                <div className="flex items-center gap-2 bg-white p-2 rounded-lg flex-1">
                  <img src={money} alt="" />
                  <p className="text-[15px] font-semibold text-[#1C426B] ">
                    Rp. 1.000.000
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap  mt-5 gap-5">
                <div className="flex items-center gap-2 bg-white p-2 rounded-lg flex-1">
                  <img src={money} alt="" />
                  <p className="text-[15px] font-semibold text-[#1C426B] ">
                    Rp. 1.000.000
                  </p>
                </div>
                <div className="flex items-center gap-2 bg-white p-2 rounded-lg flex-1">
                  <img src={money} alt="" />
                  <p className="text-[15px] font-semibold text-[#1C426B] ">
                    Rp. 1.000.000
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between mt-5 text-white">
                <h1 className="font-medium">Tangerang</h1>
                <div className="w-auto md:w-[500px] h-[1px] flex items-center ml-3">
                  <span className="w-[180px] md:w-[500px] border-b-[2px] border-dotted border-white h-[1px] "></span>
                  <span class="material-symbols-outlined ">chevron_right</span>
                </div>
                <h1 className="font-medium">Lembang</h1>
              </div>
              {/* button lihat rencana perjalanan */}
              <div className="flex gap-2 items-center justify-center mt-4">
                <button className="text-[#1C426B] flex justify-center p-3 flex-1 bg-white rounded-lg  font-semibold text-xl ">
                  Lihat rencana Perjalanan
                </button>
                <button>
                  <span class="material-symbols-outlined border text-[1.7rem] text-white border-white rounded-xl py-3 px-[15px]">
                    delete
                  </span>
                </button>
              </div>
            </div>
          </div>
          <button className="p-4 bg-jabarayaColors-700 mt-4 w-full rounded-md  hidden md:block ">
            <a href="/perjalananfavorite" className="text-white font-medium">
              Buat rencana perjalanan kamu disini!
            </a>
          </button>
        </div>
      </section>
      {/* SECTION 3 BERITA TERKINI DIBANDUNG */}
      <section
        id="Berita"
        className="w-full   mt-4 md:mt-0 h-auto md:h-screen  flex-col md:flex-row  bg-white md:bg-jabarayaColors-100 flex lg:justify-center items-center  px-4 "
      >
        <div className="flex flex-col  w-full  md:items-center p-2 ">
          <div className="flex justify-between items-center ">
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
          <div className="mt-6 w-[400px] md:min-w-[750px] lg:w-auto h-auto md:flex  grid grid-flow-col gap-4 lg:justify-center items-center overflow-x-auto md:overflow-hidden    ">
            <div className=" bg-slate-50 shadow-md rounded-lg h-[400px]  w-[310px] p-2 inline-block ">
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
                  <a href="/berita" className="font-medium">
                    Baca Selengkapnya
                  </a>
                </button>
              </div>
            </div>
            <div className=" bg-slate-50 shadow-md rounded-lg h-[400px] w-[310px] p-2 inline-block">
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
            <div className=" bg-slate-50 shadow-md rounded-lg h-[400px] w-[310px] p-2 inline-block">
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
            <a href="/berita" className="font-semibold">
              Lihat lebih banyak{" "}
            </a>
          </button>
        </div>
      </section>
      {/* SECTION 4 ARTIKEL  */}
      <section
        id="Berita"
        className="w-full   mt-4 md:mt-0 h-auto md:h-screen  flex-col md:flex-row  bg-white md:bg-jabarayaColors-100 flex lg:justify-center items-center  px-4 "
      >
        <div className="flex flex-col  w-full  md:items-center p-2 ">
          <div className="flex justify-between items-center ">
            <h1 className="font-semibold  text-2xl md:text-4xl text-center lg:mb-4">
              Yang lagi Viral!
            </h1>
            <button className=" md:px-10 px-5  block md:hidden py-2 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-white rounded-md">
              <p className="font-semibold text-xs">Selengkapnya</p>
            </button>
          </div>
          <h3 className="font-medium text-xl text-center  hidden md:block   ">
            Lorem ipsum dolor sit amet, consectetur
          </h3>
          {/* CONTAINER BERITA */}
          <div className="mt-6 w-[400px]  md:min-w-[750px] lg:w-auto  h-auto md:flex  grid grid-flow-col gap-4 lg:justify-center items-center overflow-x-auto md:overflow-hidden    ">
            <div className=" bg-slate-50 shadow-md rounded-lg h-[400px]  w-[310px] p-2 inline-block ">
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
            <div className=" bg-slate-50 shadow-md rounded-lg h-[400px] w-[310px] p-2 inline-block">
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
            <div className=" bg-slate-50 shadow-md rounded-lg h-[400px] w-[310px] p-2 inline-block">
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
        className="w-full   mt-4 md:mt-0 h-auto md:h-screen  flex-col md:flex-row  bg-white md:bg-jabarayaColors-100 flex lg:justify-center items-center  px-4 "
      >
        <div className="flex flex-col  w-full  md:items-center p-2 ">
          <div className="flex justify-between items-center ">
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
          <div className="mt-6 w-[400px]  md:min-w-[750px] lg:w-auto  h-auto md:flex  grid grid-flow-col gap-4 lg:justify-center items-center overflow-x-auto md:overflow-hidden    ">
            <div className=" bg-slate-50 shadow-md rounded-lg h-[400px]  w-[310px] p-2 inline-block ">
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
            <div className=" bg-slate-50 shadow-md rounded-lg h-[400px] w-[310px] p-2 inline-block">
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
            <div className=" bg-slate-50 shadow-md rounded-lg h-[400px] w-[310px] p-2 inline-block">
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
          <div className="flex justify-between items-center w-full px-4">
            <h1 className="font-semibold hidden lg:block text-2xl md:text-4xl text-center lg:mb-4">
              Budaya di Bandung
            </h1>
            <button className=" md:px-10 px-5  block md:hidden py-2 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-white rounded-md">
              <p className="font-semibold text-xs">Selengkapnya</p>
            </button>
          </div>
          <h1 className="font-semibold hidden md:block text-2xl md:text-4xl text-center lg:mb-4">
            Budaya di Bandung
          </h1>
          <h3 className="font-medium hidden md:block text-xl text-center">
            Lihat budaya Bandung dengan lebih luas!
          </h3>

          {/* CONTAINER */}
          {/* Container 1 */}
          <div className="mt-6 w-full h-auto flex justify-center items-center  px-5 ">
            <div className="grid grid-cols-2 sm:grid-cols-2  lg:grid-cols-3 gap-5">
              {/*membuat responsive */}
              {/* Container 1 */}
              <div className="bg-slate-50 shadow-md rounded-lg  h-[300px] md:h-[360px] w-full p-2">
                <div>
                  <h1 className="font-semibold text-xl p-1 ">
                    Tari di Bandung
                  </h1>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <img
                    src={berita1}
                    alt=""
                    className="object-cover rounded-md"
                  />
                  <button className="w-full rounded-md shadow-md px-2 py-3 flex justify-center items-center mt-4">
                    <p className="font-medium">Lihat lebih banyak</p>
                  </button>
                </div>
              </div>
              {/* Container 2 */}
              <div className="bg-slate-50 shadow-md rounded-lg h-[300px] md:h-[361px] w-full p-2">
                <div>
                  <h1 className="font-semibold text-xl p-1 ">
                    Wayang di Bandung
                  </h1>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <img
                    src={berita1}
                    alt=""
                    className="object-cover rounded-md"
                  />
                  <button className="w-full rounded-md shadow-md px-2 py-3 flex justify-center items-center mt-4">
                    <p className="font-medium">Lihat lebih banyak</p>
                  </button>
                </div>
              </div>
              {/* Container 3 */}
              <div className="bg-slate-50 shadow-md rounded-lg  h-[300px] md:h-[360px] w-full p-2">
                <div>
                  <h1 className="font-semibold text-xl p-1 ">
                    Kuliner di Bandung
                  </h1>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <img
                    src={berita1}
                    alt=""
                    className="object-cover rounded-md"
                  />
                  <button className="w-full rounded-md shadow-md px-2 py-3 flex justify-center items-center mt-4">
                    <p className="font-medium">Lihat lebih banyak</p>
                  </button>
                </div>
              </div>
              {/* Container 4 */}
              <div className="bg-slate-50 shadow-md rounded-lg  h-[300px] md:h-[360px] w-full p-2">
                <div>
                  <h1 className="font-semibold text-xl p-1 ">
                    Musik di Bandung
                  </h1>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <img
                    src={berita1}
                    alt=""
                    className="object-cover rounded-md"
                  />
                  <button className="w-full rounded-md shadow-md px-2 py-3 flex justify-center items-center mt-4">
                    <p className="font-medium">Lihat lebih banyak</p>
                  </button>
                </div>
              </div>
              {/* Container 5 */}
              <div className="bg-slate-50 shadow-md rounded-lg  h-[300px] md:h-[360px] w-full p-2">
                <div>
                  <h1 className="font-semibold text-xl p-1 ">
                    Alat Musik di Bandung
                  </h1>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <img
                    src={berita1}
                    alt=""
                    className="object-cover rounded-md"
                  />
                  <button className="w-full rounded-md shadow-md px-2 py-3 flex justify-center items-center mt-4">
                    <p className="font-medium">Lihat lebih banyak</p>
                  </button>
                </div>
              </div>
              {/* Container 6 */}
              <div className="bg-slate-50 shadow-md rounded-lg  h-[300px] md:h-[360px] w-full p-2">
                <div>
                  <h1 className="font-semibold text-xl p-1 ">
                    Senjata Adat di Bandung
                  </h1>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <img
                    src={berita1}
                    alt=""
                    className="object-cover rounded-md"
                  />
                  <button className="w-full rounded-md shadow-md px-2 py-3 flex justify-center items-center mt-4">
                    <p className="font-medium">Lihat lebih banyak</p>
                  </button>
                </div>
              </div>
              {/* Container 7 */}
              <div className="bg-slate-50 shadow-md rounded-lg  h-[300px] md:h-[360px] w-full p-2">
                <div>
                  <h1 className="font-semibold text-xl p-1 ">
                    Rumah Adat di Bandung
                  </h1>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <img
                    src={berita1}
                    alt=""
                    className="object-cover rounded-md"
                  />
                  <button className="w-full rounded-md shadow-md px-2 py-3 flex justify-center items-center mt-4">
                    <p className="font-medium">Lihat lebih banyak</p>
                  </button>
                </div>
              </div>
              {/* Container 8 */}
              <div className="bg-slate-50 shadow-md rounded-lg  h-[300px] md:h-[360px] w-full p-2 ">
                <div>
                  <h1 className="font-semibold text-xl p-1 ">
                    Museum di Bandung
                  </h1>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <img
                    src={berita1}
                    alt=""
                    className="object-cover rounded-md"
                  />
                  <button className="w-full rounded-md shadow-md px-2 py-3 flex justify-center items-center mt-4">
                    <p className="font-medium">Lihat lebih banyak</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* tesssa */}
    </section>
  );
}
