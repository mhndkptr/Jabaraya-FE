import React, { useEffect, useState } from "react";
import Navbar from "./komponen/navbar";
import axiosClient from "../api/axios/axios";

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
          <div className="mx-20 p-4 py-8 rounded-xl shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] flex justify-start items-center">
            <div className="rounded-full w-[150px] h-[150px]">
              <img src={`${userProfile.avatar}`} alt="profile" className="w-32 h-32 mx-auto rounded-full ring-4" />
            </div>
            <div className="ml-5 h-auto flex flex-col  ">
              <h2 className="font-semibold text-xl">{userProfile.name}</h2>
              <h3>{userProfile.phone}</h3>
              <h3 className="mb-2">{userProfile.email}</h3>
              <a href="" className="p-2 border border-gray-200 text-xs rounded-md">
                Pengaturan & edit profile
              </a>
            </div>
          </div>
          {/* CONTAINER 2 */}
          <div className="mx-20 mt-6 ">
            <h1 className="font-bold text-3xl">DAFTAR PERJALANAN</h1>
            <div className="p-3 mt-4 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] rounded-lg">
              <h1 className="text-2xl font-medium">Perjalanan seru bulan Juli!</h1>
              <div className="flex w-full justify-evenly  items-center p-2 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] rounded-md mt-4 py-4">
                <span>🤦‍♀️</span>
                <span>🤦‍♀️</span>
                <span>🤦‍♀️</span>
                <span>🤦‍♀️</span>
              </div>
              <div className="w-full flex justify-between items-center mt-4">
                <button className="shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] p-2 px-3 rounded-md">
                  <p>Hapus perjalanan</p>
                </button>
                <button className="shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] p-2 px-3 rounded-md">
                  <p>Lihat Perjalananmu!</p>
                </button>
              </div>
            </div>
          </div>
          <div className="mx-20 mt-6 ">
            <div className="p-3 mt-4 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] rounded-lg">
              <h1 className="text-2xl font-medium">Rencana trip bulan September!</h1>
              <div className="flex w-full justify-evenly  items-center p-2 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] rounded-md mt-4 py-4">
                <span>🤦‍♀️</span>
                <span>🤦‍♀️</span>
                <span>🤦‍♀️</span>
                <span>🤦‍♀️</span>
              </div>
              <div className="w-full flex justify-between items-center mt-4">
                <button className="shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] p-2 px-3 rounded-md">
                  <p>Hapus perjalanan</p>
                </button>
                <button className="shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] p-2 px-3 rounded-md">
                  <p>Lihat Perjalananmu!</p>
                </button>
              </div>
            </div>
          </div>
          <button className="border rounded-lg px-4 py-2" onClick={handleLogout}>
            Logout
          </button>
        </section>
      ) : (
        <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
          <div className="grid min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
            <svg className="w-16 h-16 animate-spin text-gray-900/50" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
              <path
                d="M32 3C35.8083 3 39.5794 3.75011 43.0978 5.20749C46.6163 6.66488 49.8132 8.80101 52.5061 11.4939C55.199 14.1868 57.3351 17.3837 58.7925 20.9022C60.2499 24.4206 61 28.1917 61 32C61 35.8083 60.2499 39.5794 58.7925 43.0978C57.3351 46.6163 55.199 49.8132 52.5061 52.5061C49.8132 55.199 46.6163 57.3351 43.0978 58.7925C39.5794 60.2499 35.8083 61 32 61C28.1917 61 24.4206 60.2499 20.9022 58.7925C17.3837 57.3351 14.1868 55.199 11.4939 52.5061C8.801 49.8132 6.66487 46.6163 5.20749 43.0978C3.7501 39.5794 3 35.8083 3 32C3 28.1917 3.75011 24.4206 5.2075 20.9022C6.66489 17.3837 8.80101 14.1868 11.4939 11.4939C14.1868 8.80099 17.3838 6.66487 20.9022 5.20749C24.4206 3.7501 28.1917 3 32 3L32 3Z"
                stroke="currentColor"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M32 3C36.5778 3 41.0906 4.08374 45.1692 6.16256C49.2477 8.24138 52.7762 11.2562 55.466 14.9605C58.1558 18.6647 59.9304 22.9531 60.6448 27.4748C61.3591 31.9965 60.9928 36.6232 59.5759 40.9762"
                stroke="currentColor"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gray-900"
              ></path>
            </svg>
          </div>
        </div>
      )}
    </>
  );
}
