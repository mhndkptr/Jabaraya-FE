import axiosClient from "./axios";

window.addEventListener("storage", async (event) => {
  if (event.key === "ACCESS_TOKEN" || event.key === "USER_ROLE") {
    const token = localStorage.getItem("ACCESS_TOKEN");
    if (token) {
      await axiosClient
        .get("/user")
        .then((res) => {
          localStorage.setItem("USER_ROLE", res.data.data.user.role);
        })
        .catch((err) => {
          localStorage.removeItem("ACCESS_TOKEN");
          localStorage.removeItem("USER_ROLE");
          throw err;
        });
    }

    window.location.reload();
  }
});
