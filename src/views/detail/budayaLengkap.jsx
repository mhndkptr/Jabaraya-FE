import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import berita1 from "../../assets/img-beranda/berita1.png";
import axiosClient from "../../api/axios/axios";

export default function BudayaLengkap() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [culture, setCultures] = useState(null);
  useEffect(() => {
    axiosClient
      .get(`/cultures/${id}`)
      .then((response) => {
        setCultures(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the culture!", error);
      });
  }, [id]);

  if (!culture) {
    return <div>Loading...</div>;
  }

  return (
    <section className="border-black w-full min-h-screen   px-5 md:px-28 mt-10 -z-10">
      <button className="flex items-center rounded-md p-2 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] justify-center" onClick={() => navigate(-1)}>
        <span className="material-symbols-outlined">chevron_left</span> <p>Kembali</p>
      </button>
      <aside className="bg-jabarayaColors-200  flex flex-col w-full h-auto mt-5 rounded-xl lg:grid lg:grid-cols-[1fr,1fr] md:p-10 p-4 ">
        <div className="flex flex-col justify-between  order-2 lg:order-1">
          <h2 className="lg:text-4xl   font-bold md:font-semibold lg:w-[700px]">{culture.title}</h2>
          <a className="mt-1 p-2 bg-white w-[100px] rounded-md">{new Date(culture.created_at).toLocaleDateString()}</a>
        </div>
        <div className="flex justify-center items-center order-1 lg:order-2 mb-2">
          <img src={`${culture.thumbnail}`} alt={culture.title} className=" border border-black rounded-lg lg:w-[350px] lg:h-[300px]" />
        </div>
      </aside>
      <main className="flex flex-col justify-center items-center mt-10">
        <div>
          <img src={`${culture.thumbnail}`} alt={culture.title} className=" border border-black rounded-lg lg:w-[350px] lg:h-[300px]" />
        </div>
        <article className="mt-20 font-medium w-full px-3 ">
          <p className="mb-5 text-justify text-[12px] md:text-[1rem]" dangerouslySetInnerHTML={{ __html: culture.content }}></p>
          <div className="mt-10">
            <p>
              Created By <span className="font-bold">Admin Ganteng</span>{" "}
            </p>
          </div>
        </article>
      </main>
      <div className="min-h-screen md:p-8">
        <h2 className="font-bold text-sm mb-7  md:text-xl mt-3">Rekomendasi</h2>
        <div className="max-w-7xl mx-auto">
          <div className=" w-[370px]  md:w-full scrollbar overflow-x-scroll  ">
            <div className="flex  gap-[1rem]">
              {/* Floating Market Cards */}
              {[...Array(10)].map((_, index) => (
                <div key={index} className="min-w-[300px] bg-white p-4 shadow-lg rounded-lg">
                  <h4 className="text-lg font-semibold mb-2">Floating Market</h4>
                  <div className="scrollbar h-[150px] bg-white mb-2 flex gap-3 items-center justify-start px-2 w-[280px] overflow-x-auto ">
                    <img src={berita1} alt="" className="w-[150px] h-[150px]" />
                    <img src={berita1} alt="" className="w-[150px] h-[150px]" />
                    <img src={berita1} alt="" className="w-[150px] h-[150px]" />
                    <img src={berita1} alt="" className="w-[150px] h-[150px]" />
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
                    <button className="shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] text-black py-1 px-3 rounded">Lihat di maps</button>
                    <button className="shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] text-black py-1 px-3 rounded">Lihat di google</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <p className="text-blue-500 cursor-pointer hover:text-blue-700 m">google review museum bandung - Bing Peta</p>
        </div>
      </div>
    </section>
  );
}
