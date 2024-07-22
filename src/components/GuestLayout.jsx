import { Link, Outlet } from "react-router-dom";
import Navbar from "../views/komponen/navbar";

export default function DefaultLayout() {
  return (
    <>
      <Navbar></Navbar>
      <Outlet />
    </>
  );
}
