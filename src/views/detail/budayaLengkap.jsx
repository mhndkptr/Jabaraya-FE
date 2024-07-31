import React from "react";
import berita1 from "../../assets/img-beranda/berita1.png";
import "../css/style.css";
export default function BudayaLengkap() {
  return (
    <section className="border-black w-full min-h-screen   px-5 md:px-28 mt-10 -z-10">
      <button className="flex items-center  rounded-md  p-2 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] justify-center">
        <span class="material-symbols-outlined">chevron_left</span>{" "}
        <p>Kembali</p>
      </button>
      <aside className="bg-jabarayaColors-200  flex flex-col w-full h-auto mt-5 rounded-xl lg:grid lg:grid-cols-[1fr,1fr] md:p-10 p-4 ">
        <div className="flex flex-col justify-between  order-2 lg:order-1">
          <h2 className="lg:text-4xl   font-bold md:font-semibold lg:w-[700px]">
            Dunia Jurnalistik Berduka, Wartawan Senior Yusran Pare Meninggal
            Dunia, Dikebumikan di TPU Nagrog
          </h2>
          <a
            href=""
            className="mt-1 p-2 bg-white  md:bg-transparent w-[100px] rounded-md"
          >
            20/05/2024
          </a>
        </div>
        <div className="flex justify-center items-center order-1 lg:order-2 mb-2">
          <img
            src={berita1}
            alt=""
            className=" border border-black rounded-lg lg:w-[350px] lg:h-[300px]"
          />
        </div>
      </aside>
      <main className="flex flex-col justify-center items-center mt-10">
        <div className="flex flex-col justify-center  items-center">
          <h2 className="text-center font-bold text-xl  md:text-2xl  mb-7">
            Lorem ipsum dolor sit amet consectetur.
          </h2>
          <img
            src={berita1}
            alt=""
            className=" border border-black rounded-lg md:w-[350px] md:h-[300px]"
          />
        </div>
        <article className="mt-20 font-medium w-full ">
          <h2 className="font-bold text-sm  md:text-xl mb-3">Definisi</h2>
          <p className="mb-5 text-justify  ">
            Batagor (singkatan dari Baso, Tahu, Goreng), adalah jajanan
            khas Bandung[1] yang kini sudah dikenal hampir di seluruh
            wilayah Indonesia. Secara umum, batagor dibuat dari tahu yang
            dilembutkan dan diisi dengan adonan berbahan ikan
            tenggiri dan tepung tapioka lalu dibentuk menyerupai bola yang
            digoreng dalam minyak panas selama beberapa menit hingga matang.
            Variasi lainnya yaitu siomay, digoreng dan dihidangkan bersama
            batagor dan dikombinasikan dengan bumbu kacang, kecap manis, sambal,
            dan air perasan jeruk nipis sebagai pelengkap.[2] Saat ini, batagor
            tidak hanya berbentuk bulat saja, namun terdapat varian batagor yang
            dibalut dengan kulit pangsit yang digoreng. Batagor dengan varian
            ini banyak ditemukan di Jawa Barat, khususnya Bandung. Bahkan,
            penyajian batagor tidak hanya dengan bumbu kacang yang khasnya saja,
            tetapi ada juga batagor yang disajikan dengan kuah seperti bakso.
            Batagor jenis ini dikenal dengan nama batagor kuah. Beberapa
            pedagang juga ada yang menyajikan batagor dengan tambahan irisan
            timun yang menambah cita rasa batagor semakin enak.
          </p>
          <h2 className="font-bold text-sm  md:text-xl mb-3 mt-3">Sejarah</h2>

          <p className="mb-5 text-justify ">
            Deep learning adalah bentuk kecerdasan buatan yang meniru cara kerja
            otak manusia. Teknologi ini sangat efisien dalam memproses data
            mentah dan menciptakan pola untuk membantu pengambilan keputusan.
            Deep learning adalah bagian dari pembelajaran mesin yang memiliki
            jaringan sendiri. Teknologi ini memiliki kemampuan untuk
            mengidentifikasi pola dan informasi dari data yang tidak terstruktur
            atau tidak memiliki label tanpa memerlukan pengawasan manusia.
            Selain itu, Deep Learning adalah teknologi utama di balik mobil
            tanpa pengemudi. Teknologi ini juga menjadi landasan dari fungsi
            kontrol suara pada perangkat sehari-hari seperti ponsel pintar,
            tablet, televisi, dan speaker tanpa kabel
          </p>

          <h2 className="font-bold text-sm mb-3 mt-3">Baca Juga</h2>
          <h2 className="text-blue-500 cursor-pointer hover:text-blue-700">
            -Lorem ipsum dolor sit.
          </h2>
          <h2 className="text-blue-500 cursor-pointer hover:text-blue-700">
            -Lorem ipsum dolor sit.
          </h2>
          <h2 className="text-blue-500 cursor-pointer hover:text-blue-700">
            -Lorem ipsum dolor sit.
          </h2>

          <div className="min-h-screen md:p-8">
            <h2 className="font-bold text-sm mb-7  md:text-xl mt-3">
              Rekomendasi
            </h2>
            <div className="max-w-7xl mx-auto">
              <div className=" w-[370px]  md:w-full scrollbar overflow-x-scroll  ">
                <div className="flex  gap-[1rem]">
                  {/* Floating Market Cards */}
                  {[...Array(10)].map((_, index) => (
                    <div
                      key={index}
                      className="min-w-[300px] bg-white p-4 shadow-lg rounded-lg"
                    >
                      <h4 className="text-lg font-semibold mb-2">
                        Floating Market
                      </h4>
                      <div className="scrollbar h-[150px] bg-white mb-2 flex gap-3 items-center justify-start px-2 w-[280px] overflow-x-auto ">
                        <img
                          src={berita1}
                          alt=""
                          className="w-[150px] h-[150px]"
                        />
                        <img
                          src={berita1}
                          alt=""
                          className="w-[150px] h-[150px]"
                        />
                        <img
                          src={berita1}
                          alt=""
                          className="w-[150px] h-[150px]"
                        />
                        <img
                          src={berita1}
                          alt=""
                          className="w-[150px] h-[150px]"
                        />
                      </div>
                      <p className="text-black mb-2">
                        <p className="text-black mb-2">Rating</p>
                        Jalan MH Thamrin Kav 8-10 Cihampelas, Jawa Barat
                        <p className="text-black mb-2">8KM</p>
                        <p className="text-black mb-2">Nomor</p>
                        <p className="text-black mb-2">Website</p>
                        <p className="text-black mb-2">Jam</p>
                      </p>

                      <div className="flex justify-between mt-2">
                        <button className="shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] text-black py-1 px-3 rounded">
                          Lihat di maps
                        </button>
                        <button
                          className="shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] text-black
                         py-1 px-3 rounded"
                        >
                          Lihat di google
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <p className="text-blue-500 cursor-pointer hover:text-blue-700 m">
                google review museum bandung - Bing Peta
              </p>
              <p className="mt-4">
                Created By{" "}
                <span className="font-bold">Muhammad Nur Shodiq</span>{" "}
              </p>
            </div>
          </div>
        </article>
      </main>
    </section>
  );
}
