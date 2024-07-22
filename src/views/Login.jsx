import React, { useRef, useState } from "react";
import axiosClient from "../api/axios/axios";

export default function Login() {
  const [errors, setErrors] = useState();

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleLogin = async (event) => {
    event.preventDefault();
    const payload = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    axiosClient
      .post("/auth/login", payload)
      .then((res) => {
        localStorage.setItem("USER_ROLE", res.data.data.user.role);
        localStorage.setItem("ACCESS_TOKEN", res.data.data.token);
        window.location.replace("/");
      })
      .catch((err) => {
        const response = err.response;
        if (response.data.statusCode === 403) {
          setErrors(response.data.errors ? response.data.errors : response.data.message);
        } else {
          window.location.replace("/login");
        }
      });
  };

  const handleGoogleLogin = (event) => {
    event.preventDefault();
    window.location.replace(import.meta.env.VITE_API_BASE_URL + "/api/login/google");
  };

  const handleFacebookLogin = (event) => {
    event.preventDefault();
    window.location.replace(import.meta.env.VITE_API_BASE_URL + "/api/login/facebook");
  };

  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="grid md:grid-cols-2 w-full">
        <div className="flex flex-col items-center justify-center bg-white py-10 px-5 md:py-24">
          <div className="max-w-lg w-full">
            <div className="w-full rounded overflow-hidden bg-white shadow-lg p-6">
              <a href="#">
                <img src="https://picsum.photos/seed/picsum/200/300" alt="Article" className="w-full h-64 object-cover" />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                  <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center bg-loginRegister-gradient py-10 px-5 md:py-24">
          <div className="max-w-lg w-full bg-white border rounded-xl p-5 md:p-10">
            <h1 className="text-l font-bold mb-5 md:text-5xl">Selamat datang! Silahkan masuk</h1>
            <form className="mb-4" name="wf-form-password" method="post" onSubmit={handleLogin}>
              <div className="relative mb-4">
                <label className="block text-left">Email</label>
                <input ref={emailRef} type="email" className="block w-full border rounded-xl bg-white px-3 py-2 text-sm text-black" name="email" placeholder="Masukan Email Kamu" required />
              </div>
              <div className="relative mb-4">
                <label className="block text-left">Password</label>
                <input ref={passwordRef} type="password" className="block w-full border rounded-xl bg-white px-3 py-2 text-sm text-black" placeholder="Masukan Password" required />
              </div>
              <button type="submit" className="block w-full bg-jabarayaColors-700 text-white font-bold text-sm py-3 rounded-xl">
                Login
              </button>
            </form>
            <p className="text-center">atau</p>
            <div className="mt-7 flex flex-col gap-2">
              <button
                onClick={handleGoogleLogin}
                className="mb-5 inline-flex h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60"
              >
                <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="h-[18px] w-[18px]" />
                Continue with Google
              </button>
              <button
                onClick={handleFacebookLogin}
                className="mb-5 inline-flex h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60"
              >
                <img src="https://www.svgrepo.com/show/448224/facebook.svg" alt="facebook" className="h-[18px] w-[18px]" />
                Continue with Facebook
              </button>
            </div>
            <p className="text-sm text-slate-500 mt-4">
              Tidak Punya Akun?{" "}
              <a href="Register" className="text-sm font-bold text-black">
                Daftar disini
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
