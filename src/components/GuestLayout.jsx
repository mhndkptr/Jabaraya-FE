import React from "react";
import { Outlet } from "react-router-dom";
import Beranda from "../views/Beranda";

export default function DefaultLayout() {
  return (
    <>
      <Outlet />
    </>
  );
}
