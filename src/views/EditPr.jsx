import React from "react";
import berita1 from "../assets/img-beranda/berita1.png";
import logout from "../assets/img-beranda/logout.png";
import lock from "../assets/img-beranda/lock.png";
import idk from "../assets/img-beranda/idk.png";
import tulis from "../assets/img-beranda/tulis.png";

export default function EditPr() {
  return (
    <section>
      <div className="w-[100px] h-[30px] ml-10 mt-10 sm:ml-60 bg-slate-50 shadow-md rounded-sm flex justify-center items-center">
        <h1 className="text-sm">Kembali</h1>
      </div>
      <div className="flex flex-col lg:flex-row space-y-10 lg:space-y-0 lg:space-x-10 mt-10 mx-10 lg:mx-60">
        <div className="w-full lg:w-[300px] h-[450px] bg-slate-50 shadow-md rounded-xl flex flex-col items-center">
          <img src={berita1} alt="" className="w-24 h-24 mt-8 rounded-full" />
          <button className="mt-4 px-3 py-1 bg-slate-50 shadow-md text-gray rounded  flex   ">
            <img
              src={tulis}
              alt=""
              className="w-auto h-auto items-center mt-1 "
            />
            <p className="ml-2 items-center">Ganti Profile</p>
          </button>
          <div className="mt-4 text-center">
            <h2 className="text-lg font-semibold">Nama</h2>
            <div className="flex sm:flex-col flex-row sm:items-center sm:justify-center mt-2 space-x-2 sm:space-x-0">
              <p className="mb-2 sm:mb-0 ">(+62)081208120812</p>
              <p className="mb-2 sm:mb-0 sm:ml-4">user@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[800px] bg-slate-50 shadow-md rounded-xl flex flex-col">
          <div className="p-4">
            <label className="block text-lg font-bold text-black mt-6">
              Nama
            </label>
            <div className="flex">
              <img src={tulis} alt="" className="w-7 h-7 mr-2 mt-2" />
              <input
                type="text"
                placeholder="Ubah nama"
                className="mt-1 w-full px-2 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm"
              />
            </div>
          </div>
          <div className="p-4">
            <label className="block text-lg font-bold text-black mt-2">
              Nomor Telpon
            </label>
            <div className="flex">
              <img src={tulis} alt="" className="w-7 h-7 mr-2 mt-2" />
              <input
                type="text"
                placeholder="Ubah Nomor Telpon"
                className="mt-1 w-full px-2 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm"
              />
            </div>
          </div>
          <div className="p-4">
            <label className="block text-lg font-bold text-black mt-2">
              Email
            </label>
            <div className="flex">
              <img src={tulis} alt="" className="w-7 h-7 mr-2 mt-2" />
              <input
                type="text"
                placeholder="Ubah Email"
                className="mt-1 w-full px-2 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm"
              />
            </div>
          </div>
          <button className="mt-5 mb-8 px-3 py-1 ml-auto mr-4 bg-slate-50 shadow-md text-black rounded-sm self-start flex ">
            <img src={tulis} alt="" className="w-5 h-5 mr-2 " />
            <p>Simpan Data</p>
          </button>
        </div>
      </div>
      <div className="flex justify-center lg:justify-start mt-10 mx-10 lg:mx-60">
        <div className="w-full lg:w-[1100px] h-[60px] bg-slate-50 shadow-md rounded-sm flex items-center">
          <img src={lock} alt="" className="w-10 h-10 flex justify-end  " />
          <h1 className="text-md ml-6 cursor-pointer">Ganti Password</h1>
          <img
            src={idk}
            alt=""
            className="w-auto h-auto ml-auto mr-4 cursor-pointer"
          />
        </div>
      </div>
      <div className="flex justify-end mt-10 mx-10 lg:mx-60">
        <div className="mb-4 w-[100px] h-[30px] bg-slate-50 shadow-md rounded-sm flex justify-center items-center">
          <img src={logout} alt="" className="w-auto h-auto  " />
          <h1 className="text-sm cursor-pointer ">Log out</h1>
        </div>
      </div>
    </section>
  );
}
