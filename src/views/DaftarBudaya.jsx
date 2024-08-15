import React, { useEffect, useState } from "react";
import axios from "axios";
import logo from "../assets/img-beranda/JABARAYA.png";
import axiosClient from "../api/axios/axios";

export default function DaftarBudaya() {
  const [categories, setCategories] = useState([]);
  axiosClient
    .get("/categorys")
    .then((response) => {
      setCategories(response.data);
    })
    .catch((error) => {
      console.error("Error fetching categories data:", error);
    });
  return (
    <>
      <section className="min-h-screen mb-10">
        <h2 className=" text-2xl md:text-4xl text-center mt-16 font-semibold">Budaya di Bandung</h2>
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
        <div className="h-auto mt-5 flex justify-center items-center flex-wrap gap-4 md:gap-6 lg:gap-8">
          {categories.map((category) => (
            <div className="bg-slate-50 shadow-md rounded-lg  flex flex-col justify-start items-start gap-0 w-[152px] h-auto p-2  md:w-[300px] md:h-[370px] lg:w-[362px] lg:h-[390px]">
              <h1 className="font-bold text-[11px]  md:text-[20px] lg:text-[26px] p-1 ">{category.name} di Bandung</h1>
              <div className="flex flex-col justify-center items-center p-2 w-full">
                <img src="https://random-image-pepebigotes.vercel.app/api/random-image" alt={category.name} className="object-cover rounded-md md:w-[317px] md:h-[230px]" />
                <a
                  href={`/sortCulture/${category.id}`}
                  className="w-full rounded-md py-[7px] mt-2 md:mt-4 md:px-2 md:py-3 flex justify-center items-center shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
                >
                  <p className="font-medium text-[7.5px] md:text-[17px]">Lihat lebih banyak</p>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
