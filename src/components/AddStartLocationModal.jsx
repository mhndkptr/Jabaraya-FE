import iconLocation from "../assets/icons/icon-location.svg";

import PlaceSearch from "./PlaceSearch";
import { useEffect, useState } from "react";

export default function AddStartLocationModal({ isOpen, onClose, handleSubmit }) {
  const [detailLocation, setDetailLocation] = useState({});

  const handleAddPlace = (place) => {
    setDetailLocation(place);
  };

  const handleAddStartLocationSubmit = (e) => {
    e.preventDefault();
    handleSubmit(e, detailLocation);
  };

  return (
    <>
      <div
        className={`
        fixed inset-0 z-10 flex justify-center items-center transition-colors
        ${isOpen ? "visible bg-black/20" : "invisible"}
      `}
      >
        <div
          id="crud-modal"
          tabIndex="-1"
          onClick={(e) => {
            if (e.target.id === "crud-modal") {
              onClose(e);
            }
          }}
          aria-hidden="true"
          role="dialog"
          className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[51] justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full flex"
        >
          <div className="relative p-4 w-full max-w-2xl max-h-full transition-all">
            <div className="relative bg-white rounded-lg shadow p-4 md:p-5 transition-all">
              <div className="flex items-center justify-between rounded-t transition-all">
                <h3 className="text-lg font-semibold text-black titel1-bold">Tambah lokasi mulai perjalanan anda</h3>
                <button onClick={onClose} className=" lg:p-2.5 p-2 rounded-lg text-2xl text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600 jbDropShadow">
                  <svg className="lg:w-4 lg:h-4 w-3 h-3" width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.33333 1.33496L19.6667 19.6683" stroke="black" strokeWidth="2.5" strokeLinecap="round" />
                    <path d="M19.6668 1.33496L1.33349 19.6683" stroke="black" strokeWidth="2.5" strokeLinecap="round" />
                  </svg>
                </button>
              </div>
              <form className="mt-6 flex flex-col transition-all" onSubmit={(e) => handleAddStartLocationSubmit(e)}>
                <div className="grid gap-5 mb-4 grid-cols-2">
                  <div className="col-span-2 flex jbDropShadow gap-3 items-end justify-between rounded-lg py-2 px-4">
                    <label htmlFor="input-place" className="block mb-2 border-r border-[#BDBBBB] md:pr-0 pr-4 h-[65%] w-12">
                      <img className="md:w-7 md:h-8 w-7 h-7" src={iconLocation} alt="Location Icon" />
                    </label>

                    <PlaceSearch onAddPlace={handleAddPlace} initialPlaceId={detailLocation.place_id && detailLocation.place_id} placeholder={"Masukkan alamat mulai anda"} />
                  </div>
                </div>
                <button type="submit" className="text-black text-body inline-flex items-center bg-white hover:bg-slate-50 focus:ring-2 focus:outline-none focus:ring-slate-100 rounded-lg px-5 py-2.5 text-center mx-auto jbDropShadow mt-3">
                  Simpan
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
