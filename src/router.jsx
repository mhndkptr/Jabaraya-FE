import { createBrowserRouter } from "react-router-dom";
import Login from "./views/Login";
import Register from "./views/Register";
import Profile from "./views/Profile";
import PerjalananFavorite from "./views/PerjalananFavorite";
import Event from "./views/Event";
import Berita from "./views/Berita";
import Beranda from "./views/Beranda";
import DaftarBudaya from "./views/DaftarBudaya";
import Artikel from "./views/Artikel";
import GuestLayout from "./components/GuestLayout";
import DefaultLayout from "./components/DefaultLayout";
import AdminLayout from "./components/AdminLayout";
import ProtectedRoute from "./components/ProtectedRoute";
import NotFound from "./views/NotFound";
import Dashboard from "./views/admin/Dashboard";
import BeritaManajemen from "./views/admin/BeritaManajemen";
import ArtikelManajemen from "./views/admin/ArtikelManajemen";
import EventManajemen from "./views/admin/EventManajemen";
import CulturelManajemen from "./views/admin/CulturelManajemen";
import UserManajemen from "./views/admin/UserManajemen";
import KategoriManajemen from "./views/admin/KategoriManajemen";
import SocialLoginRedirect from "./views/SocialLoginRedirect";
import BeritaLengkap from "./views/detail/beritaLengkap";
import ArtikelLengkap from "./views/detail/artikelLengkap";
import BudayaLengkap from "./views/detail/budayaLengkap";
import BuatRencana from "./views/BuatRencana";
import EventLengkap from "./views/detail/eventLengkap";
import ProfileUnauthorized from "./components/ProfileUnauthorized";
import ProfileSettings from "./views/ProfileSettings";

const isLoggedIn = () => !!localStorage.getItem("ACCESS_TOKEN");
const getRole = () => localStorage.getItem("USER_ROLE");

const router = createBrowserRouter([
  {
    path: "/",
    element: isLoggedIn() ? (
      <ProtectedRoute isAllowed={isLoggedIn() && getRole() === "user"} role={getRole()}>
        <DefaultLayout />
      </ProtectedRoute>
    ) : (
      <ProtectedRoute isAllowed={!isLoggedIn()} role={getRole()}>
        <GuestLayout />
      </ProtectedRoute>
    ),
    children: [
      { path: "/", element: <Beranda /> },
      { path: "/artikel", element: <Artikel /> },
      { path: "/berita", element: <Berita /> },
      { path: "/event", element: <Event /> },
      { path: "/daftarbudaya", element: <DaftarBudaya /> },
      { path: "/beritalengkap/:id", element: <BeritaLengkap /> },
      { path: "/artikellengkap", element: <ArtikelLengkap /> },
      { path: "/budayalengkap", element: <BudayaLengkap /> },
      { path: "/eventlengkap/:id", element: <EventLengkap /> },
    ],
  },
  {
    path: "/",
    element: (
      <ProtectedRoute isAllowed={isLoggedIn() && getRole() === "user"} role={getRole()} isLoggedIn={isLoggedIn()}>
        <DefaultLayout />
      </ProtectedRoute>
    ),
    children: [
      { path: "/perjalananfavorite/:travelPlanId", element: <PerjalananFavorite /> },
      { path: "/buatrencana", element: <BuatRencana /> },
    ],
  },
  {
    path: "/",
    element: isLoggedIn() ? (
      <ProtectedRoute isAllowed={isLoggedIn() && getRole() === "user"} role={getRole()} isLoggedIn={isLoggedIn()}>
        <DefaultLayout></DefaultLayout>
      </ProtectedRoute>
    ) : (
      <ProtectedRoute isAllowed={!isLoggedIn()} role={getRole()}>
        <GuestLayout></GuestLayout>
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/profile",
        element: isLoggedIn() ? <Profile /> : <ProfileUnauthorized />,
      },
      {
        path: "/profile/settings",
        element: isLoggedIn() ? <ProfileSettings /> : <ProfileUnauthorized />,
      },
    ],
  },
  {
    path: "/",
    element: <ProtectedRoute isAllowed={!isLoggedIn()} role={getRole()} isLoggedIn={isLoggedIn()} />,
    children: [
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
    ],
  },
  {
    path: "/",
    element: <ProtectedRoute isAllowed={isLoggedIn() && getRole() === "admin"} role={getRole()} isLoggedIn={isLoggedIn()} />,
    children: [
      {
        path: "/",
        element: <AdminLayout></AdminLayout>,
        children: [
          { path: "/dashboard", element: <Dashboard /> },
          { path: "/BeritaManajemen", element: <BeritaManajemen /> },
          { path: "/ArtikelManajemen", element: <ArtikelManajemen /> },
          { path: "/EventManajemen", element: <EventManajemen /> },
          { path: "/CulturelManajemen", element: <CulturelManajemen /> },
          { path: "/UserManajemen", element: <UserManajemen /> },
          { path: "/KategoriManajemen", element: <KategoriManajemen /> },
        ],
      },
    ],
  },
  {
    path: "/login/redirect",
    element: <SocialLoginRedirect />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
