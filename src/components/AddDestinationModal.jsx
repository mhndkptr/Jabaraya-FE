import iconLocation from "../assets/icons/icon-location.svg";
import iconCalendar from "../assets/icons/icon-calendar.svg";
import iconCar from "../assets/icons/icon-car.svg";
import iconMoneyBag from "../assets/icons/icon-moneybag.svg";
import iconMiniArrow from "../assets/icons/icon-miniArrow.svg";
import iconMotorcycle from "../assets/icons/icon-motorcycle.svg";
import iconBus from "../assets/icons/icon-bus.svg";
import iconPlane from "../assets/icons/icon-plane.svg";
import iconTrain from "../assets/icons/icon-train.svg";

import PlaceSearch from "./PlaceSearch";
import { useEffect, useState } from "react";
import InputBudget from "./InputBudget";

export default function AddDestinationModal({ isOpen, onClose, handleSubmit, isLoading = false, initialValue = null, placeholder = "Tambah Perjalanan" }) {
  const [startDate, setStartDate] = useState(initialValue && initialValue.startAt ? new Date(initialValue.startAt) : "");
  const [endDate, setEndDate] = useState(initialValue && initialValue.endAt ? new Date(initialValue.endAt) : "");
  const [location, setLocation] = useState(null);
  const [vehicle, setVehicle] = useState(initialValue && initialValue.vehicle ? initialValue.vehicle : "");
  const [isSelectVehicle, setIsSelectVehicle] = useState(false);
  const [isShowInputBudget, setIsShowInputBudget] = useState(false);
  const [financialRecords, setFinancialRecords] = useState(initialValue && initialValue.financial_record ? initialValue.financial_record : {});
  const [detailLocation, setDetailLocation] = useState(initialValue && initialValue.detail_location ? initialValue.detail_location : {});

  const dataVehicles = [
    {
      name: "Mobil",
      key: "car",
      image: iconCar,
    },
    {
      name: "Sepeda Motor",
      key: "motorcycle",
      image: iconMotorcycle,
    },
    {
      name: "Bus",
      key: "bus",
      image: iconBus,
    },
    {
      name: "Kereta",
      key: "train",
      image: iconTrain,
    },
    {
      name: "Pesawat",
      key: "plane",
      image: iconPlane,
    },
  ];

  const handleAddPlace = (place) => {
    if (initialValue && initialValue.detail_location) {
      setDetailLocation({
        name: place.name,
        address: place.address,
        place_id: place.place_id,
        lat: place.location.lat,
        lng: place.location.lng,
      });
    } else {
      setDetailLocation(place);
    }
  };

  const getCurrentDate = () => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  };

  const handleChangeVehicle = (key) => {
    setVehicle(key);
    setIsSelectVehicle(false);
  };

  const handleInputBudgetSubmit = (e, dataBudget) => {
    e.preventDefault();
    setFinancialRecords(dataBudget);
  };

  const handleAddDestinationSubmit = (e) => {
    e.preventDefault();
    if (!startDate || !endDate || startDate > endDate) {
      return window.alert("Date not valid!");
    }
    if (!vehicle) {
      return window.alert("Please select vehicle");
    }
    if (!financialRecords) {
      return window.alert("Please input financial records");
    }
    if (!detailLocation) {
      return window.alert("Something went wrong!");
    }
    if (detailLocation && !detailLocation.place_id) {
      return window.alert("Please select correct location");
    }

    const data = {
      startAt: startDate,
      endAt: endDate,
      vehicle: vehicle,
      financialRecords: financialRecords.total ? financialRecords : { total: 0 },
      detailLocation: detailLocation,
    };
    handleSubmit(e, data);
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
            if (!isLoading) {
              if (e.target.id === "crud-modal") {
                onClose(e);
              }
            }
          }}
          aria-hidden="true"
          role="dialog"
          className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[51] justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full flex"
        >
          {isShowInputBudget ? (
            <InputBudget handleSubmit={handleInputBudgetSubmit} setIsShowInputBudget={setIsShowInputBudget} initialValue={financialRecords} />
          ) : (
            <div className="relative p-4 w-full max-w-2xl max-h-full transition-all">
              <div className="relative bg-white rounded-lg shadow p-4 md:p-5 transition-all">
                <div className="flex items-center justify-between rounded-t transition-all">
                  <h3 className="text-lg font-semibold text-black titel1-bold">Buat rencana jalan-jalan yuk</h3>
                  <button
                    onClick={() => {
                      if (!isLoading) {
                        onClose();
                      }
                    }}
                    className=" lg:p-2.5 p-2 rounded-lg text-2xl text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600 jbDropShadow"
                  >
                    <svg className="lg:w-4 lg:h-4 w-3 h-3" width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.33333 1.33496L19.6667 19.6683" stroke="black" strokeWidth="2.5" strokeLinecap="round" />
                      <path d="M19.6668 1.33496L1.33349 19.6683" stroke="black" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                  </button>
                </div>
                <form className="mt-6 flex flex-col transition-all" onSubmit={(e) => handleAddDestinationSubmit(e)}>
                  <div className="grid gap-5 mb-4 grid-cols-2">
                    <div className="col-span-2 flex jbDropShadow gap-3 items-end justify-between rounded-lg py-2 px-4">
                      <label htmlFor="input-place" className="block mb-2 border-r border-[#BDBBBB] md:pr-0 pr-4 h-[65%] w-12">
                        <img className="md:w-7 md:h-8 w-7 h-7" src={iconLocation} alt="Location Icon" />
                      </label>

                      <PlaceSearch isLoading={isLoading} onAddPlace={handleAddPlace} initialPlaceId={detailLocation.place_id && detailLocation.place_id} placeholder={"Masukkan alamat tujuan"} />
                    </div>

                    <div className="col-span-2 sm:col-span-1 flex jbDropShadow gap-3 items-center justify-between rounded-lg py-2 px-4">
                      <label htmlFor="input-date-start" className="flex items-center border-r border-[#BDBBBB] pr-4 h-[65%] w-12">
                        <img className="md:w-8 md:h-8 w-7 h-7" src={iconCalendar} alt="Location Icon" />
                      </label>
                      <input
                        id="input-date-start"
                        type="text"
                        value={startDate ? startDate.toLocaleDateString("en-US") : ""}
                        onChange={(e) => {
                          const date = new Date(e.target.value);
                          if (!isNaN(date.getTime())) {
                            setStartDate(date);
                          }
                        }}
                        placeholder="Jadwal brkt [Date]"
                        className="text-[#595959] bg-transparent text-body rounded-lg border-none outline-none focus:ring-0 focus:border-none focus:outline-none w-full py-2.5 px-1"
                        required
                        onFocus={(e) => {
                          e.target.type = "date";
                          if (startDate) {
                            e.target.value = startDate.toISOString().split("T")[0];
                          }
                          setTimeout(() => {
                            e.target.showPicker();
                          }, 0);
                        }}
                        onBlur={(e) => {
                          if (!e.currentTarget.contains(e.relatedTarget)) {
                            e.target.type = "text";
                            if (startDate) {
                              e.target.value = startDate.toLocaleDateString("en-US");
                            }
                          }
                        }}
                        onInput={(e) => {
                          const date = new Date(e.target.value);
                          if (!isNaN(date.getTime())) {
                            setStartDate(date);
                          }
                        }}
                        disabled={isLoading}
                        min={new Date().toLocaleDateString("fr-ca")}
                      />
                    </div>

                    <div className="col-span-2 sm:col-span-1 flex jbDropShadow gap-3 items-center justify-between rounded-lg py-2 px-4">
                      <label htmlFor="input-date-end" className="flex items-center border-r border-[#BDBBBB] pr-4 h-[65%] w-12">
                        <img className="md:w-8 md:h-8 w-7 h-7" src={iconCalendar} alt="Location Icon" />
                      </label>
                      <input
                        id="input-date-end"
                        type="text"
                        value={endDate ? endDate.toLocaleDateString("en-US") : ""}
                        onChange={(e) => {
                          const date = new Date(e.target.value);
                          if (!isNaN(date.getTime())) {
                            setEndDate(date);
                          }
                        }}
                        placeholder="Jadwal pulang [Date]"
                        className="text-[#595959] bg-transparent text-body rounded-lg border-none outline-none focus:ring-0 focus:border-none focus:outline-none w-full py-2.5 px-1"
                        required
                        onFocus={(e) => {
                          e.target.type = "date";
                          if (endDate) {
                            e.target.value = endDate.toISOString().split("T")[0];
                          }
                          e.target.showPicker();
                        }}
                        onBlur={(e) => {
                          if (!e.currentTarget.contains(e.relatedTarget)) {
                            e.target.type = "text";
                            if (endDate) {
                              e.target.value = endDate.toLocaleDateString("en-US");
                            }
                          }
                        }}
                        onInput={(e) => {
                          const date = new Date(e.target.value);
                          if (!isNaN(date.getTime())) {
                            setEndDate(date);
                          }
                        }}
                        disabled={isLoading}
                        min={startDate ? startDate.toLocaleDateString("fr-ca") : ""}
                      />
                    </div>

                    <div className="col-span-2 sm:col-span-1">
                      <div className="flex jbDropShadow gap-3 items-center justify-between rounded-lg py-2 px-4">
                        <label htmlFor="input-budget" className="flex items-center justify-between h-[65%] w-12 pr-4 border-r border-[#BDBBBB] overflow-visible">
                          <img className="md:w-8 md:h-7 w-7 h-6" src={iconMoneyBag} alt="Location Icon" />
                        </label>
                        <button
                          id="input-budget"
                          type="button"
                          onClick={() => {
                            if (!isLoading) {
                              setIsShowInputBudget(true);
                            }
                          }}
                          className="text-[#595959] bg-transparent text-body text-start rounded-lg border-none outline-none focus:ring-0 focus:border-none focus:outline-none w-full py-2.5 px-1"
                        >
                          {financialRecords.total ? financialRecords.total : "Estimasi budget"}
                        </button>
                      </div>
                    </div>

                    <div className="col-span-2 sm:col-span-1">
                      <div className="relative jbDropShadow rounded-lg">
                        <div className={`flex gap-3 items-center justify-between py-2 px-4 cursor-pointer relative z-20 ${isSelectVehicle && "border-b"}`} onClick={() => setIsSelectVehicle(!isSelectVehicle)}>
                          <label htmlFor="input-vehicle" className="flex items-center justify-between h-[65%] w-12 pr-4 border-r border-[#BDBBBB] overflow-visible">
                            <img className="md:w-8 md:h-7 w-7 h-6" src={vehicle ? (vehicle.length > 0 ? dataVehicles.find((data) => data.key == vehicle).image : iconCar) : iconCar} alt="Location Icon" />
                          </label>
                          <div className="relative w-full ml-1 text-start cursor-pointer">
                            <h3 id="input-vehicle" className="text-[#595959] bg-transparent text-body rounded-lg border-none outline-none focus:ring-0 focus:border-none focus:outline-none w-full py-2.5">
                              {vehicle ? (vehicle.length > 0 ? dataVehicles.find((data) => data.key == vehicle).name : "Kndraan [Dropdown]") : "Kndraan [Dropdown]"}
                            </h3>
                            <img
                              src={iconMiniArrow}
                              alt="Arrow"
                              className={`absolute top-1/2 right-0 cursor-pointer -translate-y-1/2 bg-white jbDropShadow px-1.5 py-2.5 rounded-lg transition-all duration-500 ${isSelectVehicle ? "rotate-180" : ""}`}
                              onClick={() => setIsSelectVehicle(!isSelectVehicle)}
                            />
                          </div>
                        </div>
                        <div>
                          {isSelectVehicle &&
                            dataVehicles.map((data, index) => {
                              return (
                                <div
                                  key={index}
                                  className={`flex gap-3 items-center justify-between py-2 px-4 border-b hover:bg-slate-50 cursor-pointer`}
                                  onClick={() => {
                                    if (!isLoading) {
                                      handleChangeVehicle(data.key);
                                    }
                                  }}
                                >
                                  <label htmlFor="input-vehicle" className="flex items-center justify-between h-[65%] w-12 pr-4 border-r border-[#BDBBBB] overflow-visible">
                                    <img className="md:w-8 md:h-7 w-7 h-6" src={data.image} alt="Location Icon" />
                                  </label>
                                  <div className="relative w-full text-start cursor-pointer">
                                    <h3 id="input-vehicle" className="text-[#595959] bg-transparent text-body rounded-lg border-none outline-none focus:ring-0 focus:border-none focus:outline-none w-full py-2.5 px-1 after:">
                                      {data.name}
                                    </h3>
                                  </div>
                                </div>
                              );
                            })}
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="text-black text-body inline-flex items-center bg-white hover:bg-slate-50 focus:ring-2 focus:outline-none focus:ring-slate-100 rounded-lg px-5 py-2.5 text-center mx-auto jbDropShadow mt-3"
                  >
                    {isLoading ? <div className="border-gray-300 lg:h-6 lg:w-6 w-4 h-4 animate-spin rounded-full border-2 border-t-white xl:mx-10 lg:mx-8 md:mx-6 sm:mx-5 mx-4 my-0.5" /> : placeholder}
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
