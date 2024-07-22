import { Outlet } from "react-router-dom";
import Navbar from "../views/komponen/navbar";
import { useEffect } from "react";
import axiosClient from "../api/axios/axios";

export default function DefaultLayout() {
  useEffect(() => {
    const token = localStorage.getItem("ACCESS_TOKEN");
    if (token) {
      axiosClient
        .get("/user")
        .then((res) => {
          localStorage.setItem("USER_ROLE", res.data.data.user.role);
        })
        .catch((err) => {
          window.location.replace("/login");
          throw err;
        });
    } else {
      window.location.replace("/login");
    }
  }, []);

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
