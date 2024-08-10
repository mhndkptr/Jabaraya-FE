import NavbarAdmin from "./partials/NavbarAdmin";
import { SidebarAdmin } from "./partials/SidebarAdmin";
import Axios from "axios";
import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function Dashboard() {
  const [berita, setBerita] = useState([]);
  const [artikel, setArticles] = useState([]);
  const [events, setEvents] = useState([]);
  const [budaya, setCulture] = useState([]);
  const [chartData, setChartData] = useState({ labels: [], datasets: [] });

  useEffect(() => {
    Axios.get("http://127.0.0.1:8000/api/news")
      .then(response => setBerita(response.data))
      .catch(error => console.error("Error fetching news:", error));
    
    Axios.get("http://127.0.0.1:8000/api/articles")
      .then(response => {
        setArticles(response.data);
        generateChartData(response.data);
      })
      .catch(error => console.error("Error fetching articles:", error));
    
    Axios.get("http://127.0.0.1:8000/api/events")
      .then(response => setEvents(response.data))
      .catch(error => console.error("Error fetching events:", error));
    
    Axios.get("http://127.0.0.1:8000/api/cultures")
      .then(response => setCulture(response.data))
      .catch(error => console.error("Error fetching cultures:", error));
  }, []);

  const generateChartData = (articles) => {
    const uploadsPerDay = {};

    articles.forEach(article => {
      const date = new Date(article.published_at).toLocaleDateString('en-US', { weekday: 'long' });
      uploadsPerDay[date] = (uploadsPerDay[date] || 0) + 1;
    });

    const labels = Object.keys(uploadsPerDay);
    const data = Object.values(uploadsPerDay);

    setChartData({
      labels,
      datasets: [
        {
          label: 'Uploads',
          data,
          borderColor: 'rgba(75, 192, 192, 1)',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          fill: true,
        },
      ],
    });
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Uploads Over Time',
      },
    },
  };

  return (
    <div>
      <NavbarAdmin />
      <SidebarAdmin />
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
              <p className="text-4xl font-bold">{events.length} Event</p>
              <span className="mt-2">Sudah Dipublish</span>
            </div>
          </div>
          <div className="flex flex-col justify-between p-8 bg-white shadow-lg rounded-lg ring-1">
            <div>
              <h1 className="text-sm">Data Budaya Yang Dipublish</h1>
              <p className="text-4xl font-bold">{budaya.length} Budaya</p>
              <span className="mt-2">Sudah Dipublish</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row mt-10 gap-2">
          <div className="w-full">
            <Line data={chartData} options={chartOptions} />
          </div>
          <div className="w-full">
            <h1 className="text-2xl font-semibold mb-2">Event Hari Ini</h1>
            <ul className="list-none border-b-2">
              {events.map(event => (
                <li key={event.id} className="media flex mb-4">
                  <img 
                    className="mr-3 rounded-full w-12 h-12" 
                    src={`http://127.0.0.1:8000/storage/${event.thumbnail}`} 
                    alt={event.name} 
                  />
                  <div className="media-body">
                    <div className="float-right text-blue-500">{new Date(event.start_date).toLocaleString()}</div>
                    <div className="media-title font-semibold">{event.name}</div>
                    <br></br>
                    {event.location && (
                      <a href={event.location} className="text-sm text-gray-400" target="_blank" rel="noopener noreferrer">
                        {event.location}
                      </a>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
