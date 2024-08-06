import React, { useEffect, useState } from "react";
import Navbar from "./komponen/navbar";
import axiosClient from "../api/axios/axios";
import Loading from "../components/Loading";

export default function Profile() {
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    getProfileData();
  }, []);

  const handleLogout = async (event) => {
    event.preventDefault();
    axiosClient
      .post("/auth/logout")
      .then(() => {
        localStorage.removeItem("USER_ROLE");
        localStorage.removeItem("ACCESS_TOKEN");
        window.location.replace("/");
      })
      .catch((err) => {
        const response = err.response;
        console.log(response);
      });
  };

  const getProfileData = async () => {
    axiosClient
      .get("/user")
      .then((res) => {
        setUserProfile(res.data.data.user);
      })
      .catch((err) => {
        const response = err.response;
        console.log(response);
      });
  };

  return (
    <>
      {/* <Navbar /> */}
      {/* container 1 */}
      {userProfile ? (
        <section className="mt-10">
          <main className="flex flex-col items-center justify-center "></main>
          <div className="p-4 py-8 flex-col md:flex-row w-full rounded-xl shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] flex justify-start items-center">
            <div className="rounded-full w-[150px] h-[150px]">
              <img
                src={`${userProfile.avatar}`}
                alt="profile"
                className="w-32 h-32 mx-auto rounded-full ring-4"
              />
            </div>
            <div className="ml-5 h-auto flex flex-col  ">
              <h2 className="titel2-bold text-xl">{userProfile.name}</h2>
              <span className="flex items-center justify-start gap-7 mb-2 ">
                <h3 className="text-caption">{userProfile.phone}</h3>
                <h3 className="mb-1 text-caption">{userProfile.email}</h3>
              </span>

              <a
                href=""
                className="p-2 border border-gray-200 text-[13px] rounded-md font-semibold shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] flex justify-center items-center gap-2"
              >
                <span class="material-symbols-outlined">settings</span>
                Pengaturan & Edit Profile
              </a>
            </div>
          </div>
          <div className="mt-6 ">
            <h1 className="font-bold text-3xl text-start">Daftar Perjalanan</h1>

            <div className="md:w-full lg:w-[800px] xl:w-[90%] 2xl:w-full md:h-[310px]  w-[328px]  mt-5 h-[253px] bg-jabarayaColors-700  shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-xl p-4">
              <div className="flex gap-3 text-white items-center">
                <img src={tropical} alt="" className="w-[30px] h-[30px] " />
                <h3 className="font-semibold  text-[16px] md:text-xl">
                  Perjalanan seru bulan Juli!
                </h3>
              </div>
              <div>
                <div className="flex flex-wrap  mt-5 gap-2 md:gap-5">
                  <div className="flex items-center gap-2 bg-white p-2 rounded-lg flex-1">
                    <img src={money} alt="" className="h-[20px] w-[20px] " />
                    <p className=" text-[12px] md:text-[15px] font-semibold text-[#1C426B] ">
                      Rp. 1.000.000
                    </p>
                  </div>
                  <div className="flex items-center gap-2 bg-white p-2 rounded-lg flex-1">
                    <img src={mobil} alt="" className="h-[20px] w-[20px] " />
                    <p className=" text-[12px] md:text-[15px] font-semibold text-[#1C426B] ">
                      Mobil
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap  mt-[16px] md:mt-5 gap-2 md:gap-5">
                  <div className="flex items-center gap-2 bg-white p-2 rounded-lg flex-1">
                    <img src={jalan} alt="" className="h-[20px] w-[20px] " />
                    <p className=" text-[12px] md:text-[15px] font-semibold text-[#1C426B] ">
                      150KM
                    </p>
                  </div>
                  <div className="flex items-center gap-2 bg-white p-2 rounded-lg flex-1">
                    <img src={jam} alt="" className="h-[20px] w-[20px] " />
                    <p className=" text-[12px] md:text-[15px] font-semibold text-[#1C426B] ">
                      5 Jam
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-5 text-white">
                  <h1 className="font-medium text-[12px] md:text-[20px] ">
                    Tangerang
                  </h1>
                  <div className="w-auto md:w-[500px] h-[1px] flex lg:w-max items-center ml-3">
                    <span className="w-[150px] md:w-[500px] lg:w-[1000px] border-b-[2px] border-dotted border-white h-[1px] "></span>
                    <span class="material-symbols-outlined ">
                      chevron_right
                    </span>
                  </div>
                  <h1 className="font-medium text-[12px] md:text-[20px] ">
                    Lembang
                  </h1>
                </div>
                {/* button lihat rencana perjalanan */}
                <div className="flex gap-2 items-center justify-center mt-4">
                  <button className="text-[#1C426B] flex justify-center p-2 md:p-3 flex-1 bg-white rounded-lg  font-semibold text-[12px] md:text-xl ">
                    Lihat rencana Perjalanan
                  </button>
                  <button>
                    <span class="material-symbols-outlined border text-[16px] p-2 md:text-[1.7rem] text-white border-white rounded-lg md:rounded-xl md:py-3 md:px-[15px]">
                      delete
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <main />
          {/* CONTAINER 2 */}

          <button
            className="border rounded-lg px-4 py-2"
            onClick={handleLogout}
          >
            Logout
          </button>
        </section>
      ) : (
        <Loading />
      )}
    </>
  );
}
