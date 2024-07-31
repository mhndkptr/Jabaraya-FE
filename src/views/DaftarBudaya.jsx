import React from "react";
import berita1 from "../assets/img-beranda/berita1.png";
import logo from "../assets/img-beranda/JABARAYA.png";

export default function DaftarBudaya() {
  return (
    <>
      <section className="min-h-screen mb-10">
        <h2 className=" text-2xl md:text-4xl text-center mt-16 font-semibold">
          Budaya di Bandung
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
        <section
          id="DaftarBudaya"
          className="w-full h-auto bg-white flex justify-center items-center  "
        >
          <div className="flex flex-col justify-center items-center mt-10">
            {/* CONTAINER ARTIKEL */}
            {/* Container 1 */}
            <div className="mt-6 w-full h-auto flex justify-center items-center">
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {/*membuat responsive */}
                {/* Container 1 */}
                <div className="bg-slate-50 shadow-md rounded-lg h-[360px] w-full p-2">
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
                <div className="bg-slate-50 shadow-md rounded-lg h-[360px] w-full p-2">
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
                <div className="bg-slate-50 shadow-md rounded-lg h-[360px] w-full p-2">
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
                <div className="bg-slate-50 shadow-md rounded-lg h-[360px] w-full p-2">
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
                <div className="bg-slate-50 shadow-md rounded-lg h-[360px] w-full p-2">
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
                <div className="bg-slate-50 shadow-md rounded-lg h-[360px] w-full p-2">
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
                <div className="bg-slate-50 shadow-md rounded-lg h-[360px] w-full p-2">
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
                <div className="bg-slate-50 shadow-md rounded-lg h-[360px] w-full p-2 ">
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
      </section>
    </>
  );
}
