import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function BeritaLengkap() {
  const { id } = useParams(); 
  const navigate = useNavigate(); 
  const [news, setnews] = useState(null); 
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/news/${id}`)
      .then((response) => {
        setnews(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the news!", error);
      });
  }, [id]);

  if (!news) {
    return <div>Loading...</div>;
  }

  return (
    <section className="border-black w-full min-h-screen   px-5 md:px-28 mt-10 -z-10">
      <button className="flex items-center  rounded-md  p-2 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] justify-center">
        <span class="material-symbols-outlined">chevron_left</span>{" "}
        <p>Kembali</p>
      </button>
      <aside className="bg-jabarayaColors-200  flex flex-col w-full h-auto mt-5 rounded-xl lg:grid lg:grid-cols-[1fr,1fr] md:p-10 p-4 ">
        <div className="flex flex-col justify-between  order-2 lg:order-1">
          <h2 className="lg:text-4xl   font-bold md:font-semibold lg:w-[700px]">
            {news.title}
          </h2>
          <a className="mt-1 p-2 bg-white w-[100px] rounded-md">
            {new Date(news.created_at).toLocaleDateString()}
          </a>
        </div>
        <div className="flex justify-center items-center order-1 lg:order-2 mb-2">
          <img src={`http://127.0.0.1:8000/storage/${news.thumbnail}`} alt={news.title} className=" border border-black rounded-lg lg:w-[350px] lg:h-[300px]"/>
        </div>
      </aside>
      <main className="flex flex-col justify-center items-center mt-10">
        <div>
        <img src={`http://127.0.0.1:8000/storage/${news.thumbnail}`} alt={news.title} className=" border border-black rounded-lg lg:w-[350px] lg:h-[300px]"/>
        </div>
        <article className="mt-20 font-medium w-full px-3 ">
        <p className="mb-5 text-justify text-[12px] md:text-[1rem]" dangerouslySetInnerHTML={{ __html: news.content }}>
        </p>
          <div className="mt-10">
            <p>
              Created By <span className="font-bold">Admin Ganteng</span>{" "}
            </p>
          </div>
        </article>
      </main>
    </section>
  );
}
