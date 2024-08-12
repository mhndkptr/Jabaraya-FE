import { useNavigate } from "react-router-dom";
import avatarDefaultNull from "../assets/avatars/avatar-default-null.png";
import iconEnter from "../assets/icons/icon-enter.png";

export default function ProfileUnauthorized() {
  const navigate = useNavigate();

  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center">
        <div className="rounded-xl jbDropShadow bg-white flex flex-col justify-center items-center lg:gap-10 sm:gap-8 gap-6 w-full py-8 xl:mx-48 lg:mx-44 md:mx-40 sm:mx-32 mx-10 ">
          <img src={avatarDefaultNull} alt="Avatar Default" className="xl:w-40 lg:w-36 md:w-32 sm:w-28 w-24" />
          <button
            className="flex flex-row gap-2 jbDropShadow items-center justify-center lg:py-2 sm:py-1.5 py-1 lg:px-16 md:px-14 sm:px-12 px-10 rounded-lg bg-white hover:bg-slate-50 transition"
            type="button"
            onClick={() => navigate("/login")}
          >
            <img src={iconEnter} alt="Enter" />
            <h4 className="text-body-bold">Masuk atau Buat Akun</h4>
          </button>
        </div>
      </div>
    </>
  );
}
