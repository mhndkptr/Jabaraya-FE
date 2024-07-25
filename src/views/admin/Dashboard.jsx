import NavbarAdmin from "./partials/NavbarAdmin";
import { SidebarAdmin } from "./partials/SidebarAdmin";
import Axios from "axios";
import React, { useState, useEffect } from "react";
export default function Dashboard() {
  const [berita, setberita] = useState([]);
  useEffect(() => {
      Axios.get("http://127.0.0.1:8000/api/news")
          .then(response => {
              setberita(response.data);
          })
          .catch(error => console.error("Error fetching news:", error));
  }, []);

  const [artikel, setArticles] = useState([]);
  useEffect(() => {
      Axios.get("http://127.0.0.1:8000/api/articles")
          .then(response => {
              setArticles(response.data);
          })
          .catch(error => console.error("Error fetching news:", error));
  }, []);

  const [Event, setEvent] = useState([]);
  useEffect(() => {
      Axios.get("http://127.0.0.1:8000/api/events")
          .then(response => {
              setEvent(response.data);
          })
          .catch(error => console.error("Error fetching news:", error));
  }, [])

  const [Budaya, setCulture] = useState([]);
  useEffect(() => {
      Axios.get("http://127.0.0.1:8000/api/cultures")
          .then(response => {
              setCulture(response.data);
          })
          .catch(error => console.error("Error fetching news:", error));
  }, [])
  return <div className="">
    <NavbarAdmin/>
    <SidebarAdmin/>
    <div className="p-4 mt-10 sm:ml-64">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mt-10">
        <div className="flex flex-col justify-between p-8 bg-white shadow-lg rounded-lg ring-1">
          <div>
            <h1 className="text-sm">Data Berita Yang Dipublish</h1>
            <p className="text-4xl font-bold">{berita.length} Berita</p>
            <span className="mt-2">Sudah Dipublish</span>
          </div>
        </div>
        <div className="flex flex-col justify-between p-8 bg-white shadow-lg rounded-lg ring-1">
          <div>
            <h1 className="text-sm">Data Artikel Yang Dipublish</h1>
            <p className="text-4xl font-bold">{artikel.length} Artikel</p>
            <span className="mt-2">Sudah Dipublish</span>
          </div>
        </div>
        <div className="flex flex-col justify-between p-8 bg-white shadow-lg rounded-lg ring-1">
          <div>
            <h1 className="text-sm">Data Event Yang Dipublish</h1>
            <p className="text-4xl font-bold">{Event.length} Event</p>
            <span className="mt-2">Sudah Dipublish</span>
          </div>
        </div>
        <div className="flex flex-col justify-between p-8 bg-white shadow-lg rounded-lg ring-1">
          <div>
            <h1 className="text-sm">Data Budaya Yang Dipublish</h1>
            <p className="text-4xl font-bold">{Budaya.length} Budaya</p>
            <span className="mt-2">Sudah Dipublish</span>
          </div>
        </div>
      </div>
    </div>
  </div>;
}
