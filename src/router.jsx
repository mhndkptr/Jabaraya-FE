import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./views/Dashboard";
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

const isLoggedIn = () => !!localStorage.getItem("USER_TOKEN");
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
      { path: "/perjalananfavorite", element: <PerjalananFavorite /> },
      { path: "/profile", element: <Profile /> },
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
        path: "/dashboard",
        element: (
          <AdminLayout>
            <Dashboard />
          </AdminLayout>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
