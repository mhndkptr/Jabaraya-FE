import React from "react";
import berita1 from "../assets/img-beranda/berita1.png";

export default function EditProfile() {
  return (
    <section>
      <div className="w-[100px] h-[30px] ml-10 mt-10 sm:ml-60 bg-slate-50 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-sm flex flex-col justify-center items-center">
        <h1 className="text-sm">Kembali</h1>
      </div>
      <div className="flex flex-col bg-gray-500 md:flex-row space-y-10 md:space-y-0 md:space-x-10 mt-10 ml-10 mr-10 sm:ml-60 sm:mr-60">
        <div className="w-full md:w-[300px] h-[360px] bg-slate-50 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-xl flex flex-col items-center">
          <img src={berita1} alt="" className="w-24 h-24 mt-8 rounded-full" />
          <button className="mt-4 px-3 py-1 bg-slate-50 shadow-[0_3px_10px_rgb(0,0,0,0.2)] text-gray rounded">
            Ganti Profile
          </button>
          <div className="mt-4 text-center">
            <h2 className="text-lg font-semibold">Nama</h2>
            <p className="mt-2">(+62)081208120812</p>
            <p className="mt-2">user@gmail.com</p>
          </div>
        </div>
        <div className="w-full md:w-[800px] h-[370px] bg-slate-50 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-xl flex flex-col">
          <div className="ml-4">
            <label className="block text-lg font-bold text-black mt-6">
              Nama
            </label>
            <input
              type="text"
              placeholder="Ubah nama"
              className="mt-1 w-full md:w-[680px]  px-2 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm"
            />
          </div>
          <div className="ml-4">
            <label className="block text-lg font-bold text-black mt-6">
              Nomor Telpon
            </label>
            <input
              type="text"
              placeholder="Ubah Nomor Telpon"
              className="mt-1 w-full md:w-[680px] px-2 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm"
            />
          </div>
          <div className="ml-4">
            <label className="block text-lg font-bold text-black mt-6">
              Email
            </label>
            <input
              type="text"
              placeholder="Ubah Email"
              className="mt-1 w-full md:w-[680px] px-2 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm"
            />
          </div>
          <button className="mt-3 px-3 py-1 ml-auto mr-7 bg-slate-50 shadow-[0_3px_10px_rgb(0,0,0,0.2)] text-black rounded-sm self-start ">
            Simpan Data
          </button>
        </div>
      </div>
      <div className="flex justify-center md:justify-start mt-10 ml-10 mr-10 sm:ml-60 sm:mr-60">
        <div className="w-full md:w-[1100px] h-[60px] bg-slate-50 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-sm flex flex-col justify-center">
          <h1 className="text-md ml-6">Ganti Password</h1>
        </div>
      </div>
      <div className="flex  md:justify-end mt-10 ml-10 mr-10 sm:mr-60 justify-end">
        <div className="mb-4 w-[100px] h-[30px] bg-slate-50 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-sm flex flex-col justify-center items-center">
          <h1 className="text-sm ">Log out</h1>
        </div>
      </div>
    </section>
  );
}
