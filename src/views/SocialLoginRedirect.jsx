import { useLocation } from "react-router-dom";
import axiosClient from "../api/axios/axios";
import { useEffect } from "react";
import Loading from "../components/Loading";
import toast from "react-hot-toast";

export default function SocialLoginRedirect() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  useEffect(() => {
    let token = queryParams.get("token");
    localStorage.setItem("ACCESS_TOKEN", token);
    getProfileData();
  }, []);

  const getProfileData = async () => {
    axiosClient
      .get("/user")
      .then((res) => {
        localStorage.setItem("USER_ROLE", res.data.data.user.role);
        window.location.replace("/");
        toast.success(res.data?.message);
      })
      .catch((err) => {
        const response = err.response;
        window.location.replace("/login");
        console.error(response);
        toast.error("Something went wrong!");
      });
  };

  return <Loading />;
}
