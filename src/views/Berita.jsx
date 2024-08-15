import React, { useEffect, useState } from "react";
import axios from "axios";
import logo from "../assets/img-beranda/JABARAYA.png";
import axiosClient from "../api/axios/axios";

export default function Berita() {
  const [berita, setBerita] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    axiosClient
      .get("/news")
      .then((response) => {
        const eventData = response.data
          .map((news) => ({
            id: news.id,
            title: news.title,
            thumbnail: news.thumbnail,
            content: news.content,
            link: news.link,
            created_at: news.created_at,
            updated_at: news.updated_at,
          }))
          .sort((a, b) => b.id - a.id);
        setBerita(eventData);
        setTotalPages(Math.ceil(eventData.length / itemsPerPage));
      })
      .catch((error) => {
        console.error("Error fetching news data:", error);
      });
  }, []);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastNews = currentPage * itemsPerPage;
  const indexOfFirstNews = indexOfLastNews - itemsPerPage;
  const currentNews = berita.slice(indexOfFirstNews, indexOfLastNews);

  return (
    <>
      <section className="min-h-screen mb-0 md:mb-10">
        <h2 className="text-4xl text-center mt-16 font-semibold">Berita terkini di Bandung Raya</h2>
        <div className="h-10 text-center w-full flex justify-center items-center relative mt-3">
          <div className="relative w-8 h-8 bg-white after:w-[165px] after:h-[1px] after:bg-[#D9D9D9] after:absolute after:top-[50%] after:left-12 before:w-[165px] before:h-[1px] before:bg-[#D9D9D9] before:absolute before:top-[50%] before:right-12">
            <img src={logo} alt="" />
          </div>
        </div>
        <div className="mx-44 relative mt-5 hidden lg:block">
          <div className="flex items-center gap-2 relative after:min-w-[80%] after:h-[1px] after:left-[16.5%] after:absolute after:bg-[#D9D9D9]">
            <div className="w-3 h-3 bg-[#D9D9D9] rounded-full"></div>
            <p className="text-body-bold"> Berita seputar Bandung</p>
          </div>
        </div>
        <div id="Berita" className="h-auto flex flex-wrap justify-center items-center mt-3 mx-auto md:mx-10 lg:mx-20">
          <div className="flex justify-center gap-5 mx-auto">
            {currentNews.map((news) => (
              <div key={news.id} className="bg-slate-50 shadow-md rounded-lg flex flex-col h-auto w-full p-2">
                <img src={`${news.thumbnail}`} alt={news.title} className="object-cover rounded-md w-full h-48 mb-2 lg:mb-4" />
                <div className="flex flex-col justify-between flex-grow">
                  <div>
                    <h2 className="font-semibold mb-2 text-lg">{news.title}</h2>
                    <div className="flex-col md:flex-row flex justify-between md:items-center w-full">
                      <div>
                        <p className="text-xs mb-1">
                          Oleh <a className="font-semibold text-jabarayaColors-700">Admin Ganteng</a>
                        </p>
                      </div>
                      <div className="flex gap-2 mb-4 justify-end">
                        <span className="text-xs font-semibold border border-jabarayaColors-700 p-1 rounded-md text-jabarayaColors-700">{new Date(news.created_at).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>
                  <a
                    href={`/beritaLengkap/${news.id}`}
                    className="w-full rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] px-2 py-3 md:flex justify-center items-center mt-4"
                  >
                    <p className="font-medium">Baca Selengkapnya</p>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* PAGE */}
        <nav aria-label="Page navigation example" className="flex justify-center mt-10">
          <ul className="flex items-center -space-x-px h-10 text-base">
            <li>
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <span className="sr-only">Previous</span>
                <svg className="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                </svg>
              </button>
            </li>
            {Array.from({ length: totalPages }, (_, index) => (
              <li key={index}>
                <button
                  onClick={() => handlePageChange(index + 1)}
                  className={`flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ${
                    currentPage === index + 1 ? "text-blue-600 border-blue-300 bg-blue-50" : ""
                  } dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
                >
                  {index + 1}
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <span className="sr-only">Next</span>
                <svg className="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4L1 1" />
                </svg>
              </button>
            </li>
          </ul>
        </nav>
      </section>
    </>
  );
}
