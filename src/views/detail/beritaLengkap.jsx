import React from "react";
import berita1 from "../../assets/img-beranda/berita1.png";

export default function BeritaLengkap() {
  return (
    <section className="border-black w-full min-h-screen   px-5 md:px-28 mt-10 -z-10">
      <button className="flex items-center  rounded-md  p-2 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] justify-center">
        <span class="material-symbols-outlined">chevron_left</span>{" "}
        <p>Kembali</p>
      </button>
      <aside className="bg-jabarayaColors-200  flex flex-col w-full h-auto mt-5 rounded-xl md:grid md:grid-cols-[1fr,1fr] md:p-10 p-4 ">
        <div className="flex flex-col justify-between  order-2 md:order-1">
          <h2 className="md:text-4xl   font-bold md:font-semibold md:w-[700px]">
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
        <div className="flex justify-center items-center order-1 md:order-2 mb-2">
          <img
            src={berita1}
            alt=""
            className=" border border-black rounded-lg md:w-[350px] md:h-[300px]"
          />
        </div>
      </aside>
      <main className="flex flex-col justify-center items-center mt-10">
        <div>
          <img
            src={berita1}
            alt=""
            className=" border border-black rounded-lg md:w-[350px] md:h-[300px]"
          />
        </div>
        <article className="mt-20 font-medium w-auto">
          <p className="mb-5 text-justify ">
            TRIBUNJABAR.ID, BANDUNG - Isak tangis iringi pemakaman Yusran
            Permana di TPU Nagrog, Ujungberung, Kota Bandung pada Selasa
            (2/7/2024). Yusran Pare, sapaan akrabnya meninggal dunia saat
            bersepeda di Sumedang. Dia dan kesebelas temannya yang tergabung
            dalam paguyuban goes sejak pagi hari sudah berangkat dari Bandung
            menuju Sumedang. Artikel ini telah tayang di TribunJabar.id dengan
            judul Dunia Jurnalistik Berduka, Wartawan Senior Yusran Pare
            Meninggal Dunia, Dikebumikan di TPU
            Nagrog, https://jabar.tribunnews.com/2024/07/02/dunia-jurnalistik-berduka-wartawan-senior-yusran-pare-meninggal-dunia-dikebumikan-di-tpu-nagrog.Penulis:
            Nappisah | Editor: Januar Pribadi Hamel
          </p>
          <p className="mb-5 text-justify ">
            TRIBUNJABAR.ID, BANDUNG - Isak tangis iringi pemakaman Yusran
            Permana di TPU Nagrog, Ujungberung, Kota Bandung pada Selasa
            (2/7/2024). Yusran Pare, sapaan akrabnya meninggal dunia saat
            bersepeda di Sumedang. Dia dan kesebelas temannya yang tergabung
            dalam paguyuban goes sejak pagi hari sudah berangkat dari Bandung
            menuju Sumedang. Artikel ini telah tayang di TribunJabar.id dengan
            judul Dunia Jurnalistik Berduka, Wartawan Senior Yusran Pare
            Meninggal Dunia, Dikebumikan di TPU
            Nagrog, https://jabar.tribunnews.com/2024/07/02/dunia-jurnalistik-berduka-wartawan-senior-yusran-pare-meninggal-dunia-dikebumikan-di-tpu-nagrog.Penulis:
            Nappisah | Editor: Januar Pribadi Hamel
          </p>
          <p className="mb-5 text-justify ">
            TRIBUNJABAR.ID, BANDUNG - Isak tangis iringi pemakaman Yusran
            Permana di TPU Nagrog, Ujungberung, Kota Bandung pada Selasa
            (2/7/2024). Yusran Pare, sapaan akrabnya meninggal dunia saat
            bersepeda di Sumedang. Dia dan kesebelas temannya yang tergabung
            dalam paguyuban goes sejak pagi hari sudah berangkat dari Bandung
            menuju Sumedang. Artikel ini telah tayang di TribunJabar.id dengan
            judul Dunia Jurnalistik Berduka, Wartawan Senior Yusran Pare
            Meninggal Dunia, Dikebumikan di TPU
            Nagrog, https://jabar.tribunnews.com/2024/07/02/dunia-jurnalistik-berduka-wartawan-senior-yusran-pare-meninggal-dunia-dikebumikan-di-tpu-nagrog.Penulis:
            Nappisah | Editor: Januar Pribadi Hamel
          </p>

          <div className="mt-10">
            <p>
              Created By <span className="font-bold">Muhammad Nur Shodiq</span>{" "}
            </p>
          </div>
        </article>
      </main>
    </section>
  );
}
