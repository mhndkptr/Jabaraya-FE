import React, { useEffect, useState } from "react";
import axios from "axios";
import kelinci from "../assets/img-beranda/kelinci.png";
import berita1 from "../assets/img-beranda/berita1.png";
import emoji from "../assets/img-beranda/Group.png";
import tropical from "../assets/img-beranda/tropical.png";
import jalan from "../assets/img-beranda/jalan.png";
import money from "../assets/img-beranda/money.png";
import jam from "../assets/img-beranda/jam.png";
import mobil from "../assets/img-beranda/mobil.png";
import axiosClient from "../api/axios/axios";
import toast from "react-hot-toast";
import iconCar from "../assets/icons/icon-car.svg";
import iconMotorcycle from "../assets/icons/icon-motorcycle.svg";
import iconBus from "../assets/icons/icon-bus.svg";
import iconPlane from "../assets/icons/icon-plane.svg";
import iconTrain from "../assets/icons/icon-train.svg";
import { useNavigate } from "react-router-dom";

export default function Beranda() {
  const [articles, setArticles] = useState([]);
  const [news, setNews] = useState([]);
  const [events, setEvents] = useState([]);
  const [cultures, setCultures] = useState([]);
  const [categories, setCategories] = useState([]);
  const [travelPlan, setTravelPlan] = useState(null);

  useEffect(() => {
    axiosClient
      .get("/articles")
      .then((response) => {
        const sortedArticles = response.data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
        setArticles(sortedArticles.slice(0, 3));
      })
      .catch((error) => console.error("Error fetching articles:", error));

    axiosClient
      .get("/news")
      .then((response) => {
        const sortedNews = response.data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
        setNews(sortedNews.slice(0, 3));
      })
      .catch((error) => console.error("Error fetching news:", error));

    axiosClient
      .get("/events")
      .then((response) => {
        const sortedEvents = response.data.sort((a, b) => new Date(b.start_date) - new Date(a.start_date));
        setEvents(sortedEvents.slice(0, 3));
      })
      .catch((error) => console.error("Error fetching events:", error));

    axiosClient
      .get("/categorys")
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error("Error fetching categories data:", error);
      });

    axiosClient
      .get("/cultures-all")
      .then((response) => {
        setCultures(response.data);
      })
      .catch((error) => console.error("Error fetching cultures:", error));

    getTravelPlan();
  }, []);

  const getTravelPlan = () => {
    const isLoggedIn = () => !!localStorage.getItem("ACCESS_TOKEN");
    const getRole = () => localStorage.getItem("USER_ROLE");
    if (isLoggedIn() && getRole() === "user") {
      axiosClient
        .get(`/travel-plans/latest`)
        .then((res) => {
          if (res.data?.data) {
            if (res.data?.data.id) {
              setTravelPlan(res.data.data);
            }
          } else {
            toast.error("Something went wrong!");
          }
        })
        .catch((err) => {
          const response = err.response;
          console.error(response);
          toast.error("Something went wrong!");
        });
    }
  };

  return (
    <section>
      {/* SECTION 1 BERANDA HALAMAN UTAMA */}
      <section className="md:w-full md:h-screen md:bg-jabarayaColors-100 md:pt-0 pt-20 p-4">
        <div className="md:flex md:flex-col items-center justify-center">
          <div className="flex justify-between items-center w-full md:h-screen">
            <img src={kelinci} alt="" className="h-[400px] w-[300px]  hidden lg:block " />
            <div className="md:text-center  w-full py-4 text-start">
              <h1 className="text-4xl font-bold md:text-center text-black">Selamat Datang di JABARAYA!</h1>
              <h2 className="md:mt-5 mt-2 text-xl md:text-2xl font-medium">Tempat kamu mengeksplor Bandung</h2>
              <h2 className="md:text-2xl text-xl font-medium">dengan pengalaman terbaik!</h2>
              <button onClick={() => (window.location.href = "#BuatRencana")} className="mt-5 px-5 md:py-3 py-2 bg-jabarayaColors-700 rounded-md hover:bg-jabarayaColors-800 transition">
                <h1 className="text-white text-base font-light">Yuk Eksplor Bandung!</h1>
              </button>
            </div>
            <img src={kelinci} alt="" className="h-[400px] w-[300px] hidden lg:block " />
          </div>
        </div>
      </section>

      {/* // SECTION 2 PERJALANAN */}
      <section id="BuatRencana" className="w-full md:w-auto md:h-screen h-auto bg-white md:bg-jabarayaColors-50 flex justify-center items-center px-4 pt-10">
        <div className="flex flex-col justify-center items-center w-full">
          <h1 className="font-semibold text-4xl text-center mb-4 hidden md:block">Buat Rencana Perjalanan Anda</h1>

          <h3 className="font-medium text-xl text-center mb-4 hidden md:block">Lihat Rencana Perjalanan Anda</h3>
          {/* BELUM BUAT RENCANA */}
          {!travelPlan && (
            <div className="lg:w-1/2 md:h-[310px] w-full h-[200px] bg-gradient-to-r from-[#6C4EE4] to-[#1B78AD] jbDropShadow rounded-xl flex-col justify-center items-center">
              <div className="flex flex-col items-center h-full justify-center">
                <img src={emoji} alt="" className="w-[70px] h-[80px] " />
                <button
                  onClick={() => {
                    window.location.replace("/buatrencana");
                  }}
                  className="p-3 bg-white rounded-xl mt-5 px-4 hover:bg-slate-200 transition"
                >
                  <p className="titel2 text-[#1C426B] ">Buat rencana Healing disinii</p>
                </button>
              </div>
            </div>
          )}

          {/* SETELAH BUAT RENCANA */}
          {travelPlan && travelPlan.id && <TravelCard travelPlan={travelPlan} getTravelPlan={getTravelPlan} setTravelPlan={setTravelPlan} />}

          <button
            onClick={() => {
              window.location.replace("/buatrencana");
            }}
            className="p-4 bg-jabarayaColors-700 hover:bg-jabarayaColors-800 transition lg:w-1/2 mt-4 w-full rounded-md hidden md:block "
          >
            <h1 className="text-white titel2-bold">Buat rencana perjalanan kamu disini!</h1>
          </button>
        </div>
      </section>

      {/* SECTION 3 BERITA TERKINI DIBANDUNG */}
      <section className="w-full pt-10 md:mt-0 h-auto md:h-screen px-4 flex-col md:flex-row bg-white md:bg-jabarayaColors-100 flex lg:justify-center items-center md:px-4">
        <div className="flex flex-col  w-full  md:items-center py-2 ">
          <div className="flex justify-between items-center ">
            <h1 className="font-semibold  text-2xl md:text-4xl text-center lg:mb-4">Seputar Bandung</h1>
            <button className=" md:px-10 px-5  block md:hidden py-2 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-white rounded-md">
              <p className="font-semibold text-xs">Selengkapnya</p>
            </button>
          </div>
          <h3 className="font-medium text-xl text-center  hidden md:block   ">Dapatkan Update Terkini di Bandung</h3>
          {/* CONTAINER BERITA */}
          <div className="mt-6 min-w-[350px]  h-[420px] md:min-w-[750px] lg:w-auto md:h-auto md:flex md:px-4 grid grid-flow-col gap-4 lg:justify-center items-center overflow-x-auto md:overflow-hidden    ">
            {news.map((newsItem, index) => (
              <div key={index} className=" bg-slate-50 shadow-md rounded-lg h-auto w-[310px] p-2 inline-block ">
                <div className="flex flex-col justify-center items-center">
                  <img src={`${newsItem.thumbnail}`} alt={newsItem.title} className="object-cover rounded-md w-full h-48 mb-2 lg:mb-4" />
                  <h2 className="font-semibold mb-2">{newsItem.title}</h2>
                  <div className="flex justify-between items-center w-full">
                    <div>
                      <p className="text-xs">
                        Oleh <a className="font-semibold text-jabarayaColors-700">Admin Ganteng</a>{" "}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <a className="text-xs font-semibold border border-jabarayaColors-700 p-1 rounded-md  text-jabarayaColors-700 ">{new Date(newsItem.created_at).toLocaleDateString()}</a>
                    </div>
                  </div>
                  <button className="w-full rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] px-2 py-3 flex justify-center items-center mt-4">
                    <a href={`/beritaLengkap/${newsItem.id}`} className="font-medium">
                      Baca Selengkapnya
                    </a>
                  </button>
                </div>
              </div>
            ))}
          </div>
          <button className="mt-10 px-10  hidden md:block py-2 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-white rounded-md">
            <a href="/berita" className="font-semibold">
              Lihat lebih banyak{" "}
            </a>
          </button>
        </div>
      </section>

      {/* SECTION 4 ARTIKEL  */}
      <section className="w-full mt-4 md:mt-0 h-auto md:h-screen px-4 flex-col md:flex-row md:bg-jabarayaColors-50 bg-white  flex lg:justify-center items-center md:px-4 ">
        <div className="flex flex-col  w-full  md:items-center py-2 ">
          <div className="flex justify-between items-center ">
            <h1 className="font-semibold  text-2xl md:text-4xl text-center lg:mb-4">Yang Lagi Viral!</h1>
            <button className=" md:px-10 px-5  block md:hidden py-2 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-white rounded-md">
              <p className="font-semibold text-xs">Selengkapnya</p>
            </button>
          </div>
          <h3 className="font-medium text-xl text-center  hidden md:block   ">Dapatkan Artikel Viral Terkini di Bandung</h3>
          {/* CONTAINER ARTIKEL */}
          <div className="mt-6min-w-[350px]  h-[420px] md:min-w-[750px] lg:w-auto md:h-auto md:flex md:px-4 grid grid-flow-col gap-4 lg:justify-center items-center overflow-x-auto md:overflow-hidden    ">
            {articles.map((article, index) => (
              <div key={index} className=" bg-slate-50 shadow-md rounded-lg h-auto  w-[310px] p-2 inline-block ">
                <div className="flex flex-col justify-center items-center">
                  <img src={`${article.thumbnail}`} alt={article.title} className="object-cover rounded-md w-full h-48 mb-2 lg:mb-4" />
                  <h2 className="font-semibold mb-2">{article.title}</h2>
                  <div className="flex justify-between items-center w-full">
                    <div>
                      <p className="text-xs">
                        Oleh <a className="font-semibold text-jabarayaColors-700">Admin Ganteng</a>{" "}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <a className="text-xs font-semibold border border-jabarayaColors-700 p-1 rounded-md  text-jabarayaColors-700 ">{new Date(article.created_at).toLocaleDateString()}</a>
                    </div>
                  </div>
                  <button className="w-full rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] px-2 py-3 flex justify-center items-center mt-4">
                    <a href={`/artikelLengkap/${article.id}`} className="font-medium">
                      Baca Selengkapnya
                    </a>
                  </button>
                </div>
              </div>
            ))}
          </div>
          <button className="mt-10 px-10  hidden md:block py-2 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-white rounded-md">
            <a href="/Artikel" className="font-semibold">
              Lihat lebih banyak{" "}
            </a>
          </button>
        </div>
      </section>

      {/* SECTION 5 EVENT  */}
      <section className="w-full mt-4 md:mt-0 h-auto md:h-screen px-4 flex-col md:flex-row bg-white md:bg-jabarayaColors-100 flex lg:justify-center items-center md:px-4 ">
        <div className="flex flex-col  w-full  md:items-center py-2 ">
          <div className="flex justify-between items-center ">
            <h1 className="font-semibold  text-2xl md:text-4xl text-center lg:mb-4">Event Seru di Bandung</h1>
            <button className=" md:px-10 px-5  block md:hidden py-2 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-white rounded-md">
              <p className="font-semibold text-xs">Selengkapnya</p>
            </button>
          </div>
          <h3 className="font-medium text-xl text-center  hidden md:block   ">Lihat Event-Event Menarik di Bandung</h3>
          {/* CONTAINER EVENT */}
          <div className="mt-6 min-w-[350px]  h-[420px] md:min-w-[750px] lg:w-auto md:h-auto md:flex md:px-4 grid grid-flow-col gap-4 lg:justify-center items-center overflow-x-auto md:overflow-hidden    ">
            {events.map((event, index) => (
              <div key={index} className=" bg-slate-50 shadow-md rounded-lg h-auto  w-[310px] p-2 inline-block">
                <div className="flex flex-col justify-center items-center">
                  <img src={`${event.thumbnail}`} alt={event.title} className="object-cover rounded-md w-full h-48 mb-2 lg:mb-4" />
                  <h2 className="font-semibold mb-2">{event.name}</h2>
                  <div className="flex justify-between items-center w-full">
                    <div>
                      <p className="text-xs">
                        Oleh <a className="font-semibold text-jabarayaColors-700">Admin Ganteng</a>{" "}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <a className="text-xs font-semibold border border-jabarayaColors-700 p-1 rounded-md  text-jabarayaColors-700 ">Start : {new Date(event.start_date).toLocaleDateString("en-US")}</a>
                      <a className="text-xs border font-semibold border-jabarayaColors-700 p-1 rounded-md  text-jabarayaColors-700">{categories.find((category) => category.id === event.category_id)?.name}</a>
                    </div>
                  </div>
                  <button className="w-full rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] px-2 py-3 flex justify-center items-center mt-4">
                    <a href={`/eventLengkap/${event.id}`} className="font-medium">
                      Baca Selengkapnya
                    </a>
                  </button>
                </div>
              </div>
            ))}
          </div>
          <button className="mt-10 px-10  hidden md:block py-2 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-white rounded-md">
            <a href="/Event" className="font-semibold">
              Lihat lebih banyak{" "}
            </a>
          </button>
        </div>
      </section>

      {/* SECTION 6 TELUSURI BUDAYA  */}
      <section id="DaftarBudaya" className="w-full bg-white flex justify-center items-center md:bg-jabarayaColors-50 py-10">
        <div className="flex flex-col justify-center items-center mt-10">
          <div className="flex justify-between items-center w-full px-2 md:px-4">
            <h1 className="font-semibold md:hidden block text-[20px] md:text-4xl text-center lg:mb-4">Budaya di Bandung</h1>
            <button className=" md:px-10 px-5  block md:hidden py-2 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-white rounded-md">
              <p className="font-semibold text-xs">Selengkapnya</p>
            </button>
          </div>
          <h1 className="font-semibold hidden md:block text-2xl md:text-4xl text-center lg:mb-4">Budaya di Bandung</h1>
          <h3 className="font-medium hidden md:block text-xl text-center">Lihat budaya Bandung dengan lebih luas!</h3>
          {/* CONTAINER */}
          {/* Container 1 */}
          <div className="h-auto mt-5 flex justify-center items-center flex-wrap gap-4 md:gap-6 lg:gap-8">
            {categories.map((category, index) => (
              <div key={index} className="bg-slate-50 shadow-md rounded-lg  flex flex-col justify-start items-start gap-0 w-[152px] h-auto p-2  md:w-[300px] md:h-[370px] lg:w-[362px] lg:h-[390px]">
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
        </div>
      </section>
    </section>
  );
}

const TravelCard = ({ travelPlan, getTravelPlan, setTravelPlan }) => {
  const navigate = useNavigate();
  const [vehicles, setVehicles] = useState("-");
  const [duration, setDuration] = useState("-");
  const [isLoading, setIsLoading] = useState(false);
  const destinations = travelPlan.destinations;

  useEffect(() => {
    function calculateDaysBetweenDates(date1, date2) {
      const startDate = new Date(date1);
      const endDate = new Date(date2);

      const timeDifference = endDate - startDate;

      let dayDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

      if (dayDifference === 0) {
        dayDifference = 1;
      }

      return `${dayDifference} Hari`;
    }

    if (destinations.length > 0) {
      let vehicleData = [];
      destinations.map((destination) => {
        vehicleData.push(destination.vehicle);
      });

      let uniqueArray = [...new Set(vehicleData)];
      uniqueArray = uniqueArray.map((item) => item.charAt(0).toUpperCase() + item.slice(1));

      setVehicles(uniqueArray.join(", ") + ".");
      setDuration(calculateDaysBetweenDates(travelPlan.startAt, travelPlan.endAt));
    }
  }, []);

  const handleDelete = (e, id) => {
    e.preventDefault();
    setIsLoading(true);
    axiosClient
      .delete(`/travel-plans/${id}`)
      .then((res) => {
        if (res.data?.statusCode === 200) {
          toast.success(res.data?.message);
          setTravelPlan(null);
          getTravelPlan();
        } else {
          toast.error("Failed to delete Travel Plan");
        }
      })
      .catch((err) => {
        const response = err.response;
        toast.error("Failed to delete Travel Plan");
        console.error(response);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="bg-[#2F70B5] jbDropShadow rounded-xl p-4 lg:w-1/2 w-full">
      <div className="flex gap-3 text-white items-center">
        <img src={tropical} alt="" className="w-[30px] h-[30px] " />
        <h3 className="font-semibold  text-[16px] md:text-xl">{travelPlan.name}</h3>
      </div>
      <div>
        <div className="grid grid-cols-2 mt-5 gap-2 md:gap-5">
          <div className="flex items-center gap-2 bg-white p-2 rounded-lg flex-1">
            <img src={money} alt="" className="h-[20px] w-[20px] " />
            <p className=" text-[12px] md:text-[15px] font-semibold text-[#1C426B] ">{toRupiah(travelPlan.estimation)}</p>
          </div>
          <div className="flex items-center gap-2 bg-white p-2 rounded-lg flex-1">
            <img
              src={
                destinations.length > 0
                  ? destinations[0].vehicle === "car"
                    ? iconCar
                    : destinations[0].vehicle === "motorcycle"
                    ? iconMotorcycle
                    : destinations[0].vehicle === "bus"
                    ? iconBus
                    : destinations[0].vehicle === "plane"
                    ? iconPlane
                    : destinations[0].vehicle === "train"
                    ? iconTrain
                    : iconCar
                  : iconCar
              }
              alt="Vehicle"
              className="h-[20px] w-[20px] icon-blue-color"
            />
            <p className=" text-[12px] md:text-[15px] font-semibold text-[#1C426B] capitalize">{vehicles}</p>
          </div>
          <div className="flex items-center gap-2 bg-white p-2 rounded-lg flex-1">
            <img src={jalan} alt="" className="h-[20px] w-[20px] " />
            <p className=" text-[12px] md:text-[15px] font-semibold text-[#1C426B]">{Math.trunc(travelPlan.totalDistance)} KM</p>
          </div>
          <div className="flex items-center gap-2 bg-white p-2 rounded-lg flex-1">
            <img src={jam} alt="" className="h-[20px] w-[20px] " />
            <p className=" text-[12px] md:text-[15px] font-semibold text-[#1C426B] ">{duration}</p>
          </div>
        </div>

        <div className="flex items-center justify-between mt-5 text-white">
          <h1 className="font-medium text-[12px] md:text-[20px] text-nowrap">{travelPlan.start_location.name}</h1>
          <div className="w-full h-[1px] flex items-center ml-3">
            <span className="w-full border-b-[2px] border-dotted border-white h-[1px] "></span>
            <span className="material-symbols-outlined ">chevron_right</span>
          </div>
          <h1 className="font-medium text-[12px] md:text-[20px] text-nowrap">{travelPlan.destinations.length > 0 ? travelPlan.destinations[travelPlan.destinations.length - 1].detail_location.name : ""}</h1>
        </div>

        <div className="flex gap-2 items-center justify-center mt-4">
          <button
            type="button"
            className="text-[#1C426B] flex justify-center p-2 md:p-3 flex-1 bg-white rounded-lg hover:bg-slate-200 transition font-semibold text-[12px] md:text-xl "
            onClick={() => navigate(`/perjalananfavorite/${travelPlan.id}`)}
            disabled={isLoading}
          >
            Lihat rencana Perjalanan
          </button>
          <button
            type="button"
            className="bg-transparent rounded-lg md:rounded-xl transition-all group"
            onClick={(e) => {
              handleDelete(e, travelPlan.id);
            }}
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="border-gray-300 lg:h-6 lg:w-6 w-4 h-4 animate-spin rounded-full border-2 border-t-white m-2 md:my-3" />
            ) : (
              <span className="material-symbols-outlined border text-[16px] p-2 md:text-[1.7rem] text-white border-white group-hover:bg-slate-50 transition group-hover:text-jabarayaColors-900 rounded-lg md:rounded-xl md:py-3 md:px-[15px]">
                delete
              </span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

const toRupiah = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(number);
};
