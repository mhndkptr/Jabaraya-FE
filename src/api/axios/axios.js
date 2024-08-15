import axios from "axios";

const axiosClient = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`,
  timeout: 30000,
  headers: {
    "Content-Type": "application/json, multipart/form-data",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Methods": "*",
    "Access-Control-Allow-Credentials": "true",
  },
});

axiosClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("ACCESS_TOKEN");
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const { response } = error;

    if (error.code === "ERR_NETWORK") {
      localStorage.removeItem("ACCESS_TOKEN");
      localStorage.removeItem("USER_ROLE");
      window.alert("Error Network");
      window.location.replace("/");
    }

    if (response?.status === 401) {
      localStorage.removeItem("ACCESS_TOKEN");
      localStorage.removeItem("USER_ROLE");
      window.location.reload();
    }

    throw error;
  }
);

export default axiosClient;
