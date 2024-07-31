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
          <div className="mx-20 p-4 py-8 rounded-xl shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] flex justify-start items-center">
            <div className="rounded-full w-[150px] h-[150px]">
              <img
                src={`${userProfile.avatar}`}
                alt="profile"
                className="w-32 h-32 mx-auto rounded-full ring-4"
              />
            </div>
            <div className="ml-5 h-auto flex flex-col  ">
              <h2 className="font-semibold text-xl">{userProfile.name}</h2>
              <h3>{userProfile.phone}</h3>
              <h3 className="mb-2">{userProfile.email}</h3>
              <a
                href=""
                className="p-2 border border-gray-200 text-xs rounded-md"
              >
                Pengaturan & edit profile
              </a>
            </div>
          </div>
          {/* CONTAINER 2 */}
          <div className="mx-20 mt-6 ">
            <h1 className="font-bold text-3xl">DAFTAR PERJALANAN</h1>
            <div className="p-3 mt-4 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] rounded-lg">
              <h1 className="text-2xl font-medium">
                Perjalanan seru bulan Juli!
              </h1>
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
              <h1 className="text-2xl font-medium">
                Rencana trip bulan September!
              </h1>
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
