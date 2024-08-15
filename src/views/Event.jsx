import React, { useState, useEffect } from "react";
import logo from "../assets/img-beranda/JABARAYA.png";
import kelinci from "../assets/img-beranda/kelinci.png";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import axios from "axios";
import axiosClient from "../api/axios/axios";

export default function Event() {
  const [events, setEvents] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(9);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    // Fetch events
    axiosClient
      .get("/events")
      .then((response) => {
        const eventData = response.data
          .map((event) => ({
            id: event.id,
            name: event.name,
            thumbnail: event.thumbnail,
            start_date: event.start_date,
            end_date: event.end_date,
            location: event.location,
            content: event.content,
            category_id: event.category_id,
          }))
          .sort((a, b) => b.id - a.id);
        setEvents(eventData);
        setTotalPages(Math.ceil(eventData.length / itemsPerPage));
      })
      .catch((error) => {
        console.error("Error fetching events data:", error);
      });

    // Fetch categories
    axiosClient
      .get("/categorys")
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error("Error fetching categories data:", error);
      });
  }, [itemsPerPage]);

  const handleEventClick = (info) => {
    const event = events.find((e) => e.id === parseInt(info.event.id));
    setSelectedEvent(event);
  };

  const closeModal = () => {
    setSelectedEvent(null);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  // Calculate the events to display based on the current page
  const indexOfLastEvent = currentPage * itemsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - itemsPerPage;
  const currentEvents = events.slice(indexOfFirstEvent, indexOfLastEvent);
  // Function to get the category name by category_id
  const getCategoryName = (categoryId) => {
    const category = categories.find((cat) => cat.id === categoryId);
    return category ? category.name : "Unknown";
  };
  return (
    <section className="min-h-screen mb-0 md:mb-10">
      <h2 className="text-4xl text-center mt-16 font-semibold">Event Seru di Bandung</h2>
      <div className="h-10 text-center w-full flex justify-center items-center relative mt-3">
        <div className="relative w-8 h-8 bg-white after:w-[165px] after:h-[1px] after:bg-[#D9D9D9] after:absolute after:top-[50%] after:left-12 before:w-[165px] before:h-[1px] before:bg-[#D9D9D9] before:absolute before:top-[50%] before:right-12">
          <img src={logo} alt="" />
        </div>
      </div>
      <div className="xl:mx-28 grid-cols-[1fr,1fr] md:grid mt-8 mb-5 items-center justify-center hidden p-2">
        <div className="w-full flex flex-col justify-center items-center">
          <h1 className="lg:text-[48px] font-semibold">Cek Event Seru Bulan ini!</h1>
          <h1 className="lg:text-[20px] font-semibold">Lihat info terbaru event seru di Bandung!</h1>
          <img src={kelinci} alt="" className="w-[270px] h-[300px] lg:w-[300px] lg:h-[329px]" />
        </div>
        <div className="p-4">
          <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            events={currentEvents.map((event) => ({
              id: event.id,
              title: event.name,
              start: event.start_date,
              end: event.end_date,
            }))}
            eventClick={handleEventClick}
          />
        </div>
      </div>
      <div id="Berita" className="h-auto flex flex-wrap md:mx-10 lg:mx-20 justify-center items-center mt-3">
        <div className="flex flex-wrap justify-center items-start mx-auto">
          {currentEvents.map((event) => (
            <div key={event.id} className="flex flex-wrap justify-center items-start gap-5 px-6 md:px-1 mb-5">
              <div className="bg-slate-50 shadow-md rounded-lg flex flex-col lg:h-[400px] h-auto w-full lg:w-[310px] p-2">
                <img src={`${event.thumbnail}`} alt={event.name} className="object-cover rounded-md w-[130px] h-[130px] lg:w-auto lg:h-[200px] mb-2 lg:mb-4" />
                <div className="flex flex-col justify-between flex-grow">
                  <div>
                    <h2 className="font-semibold mb-2">{event.name}</h2>
                    <div className="flex gap-2 mb-4 justify-end">
                      <span className="text-xs font-semibold border border-jabarayaColors-700 p-1 rounded-md text-jabarayaColors-700">{new Date(event.start_date).toLocaleDateString()}</span>
                      <span className="text-xs border font-semibold border-jabarayaColors-700 p-1 rounded-md text-jabarayaColors-700">Umum</span>
                      <span className="text-xs border font-semibold border-jabarayaColors-700 p-1 rounded-md text-jabarayaColors-700">{getCategoryName(event.category_id)}</span>
                    </div>
                  </div>
                  <a
                    href={`/eventLengkap/${event.id}`}
                    className="w-full rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] px-2 py-3 md:flex justify-center items-center mt-4"
                  >
                    <p className="font-medium">Baca Selengkapnya</p>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <nav aria-label="Page navigation example" className="flex justify-center">
        <ul className="flex items-center -space-x-px h-10 text-base">
          <li>
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <span className="sr-only">Previous</span>
              <svg className="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
              </svg>
            </button>
          </li>
          {Array.from({ length: totalPages }, (_, index) => (
            <li key={index}>
              <button
                onClick={() => handlePageChange(index + 1)}
                className={`flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ${
                  currentPage === index + 1 ? "text-blue-600 border-blue-300 bg-blue-50" : ""
                } dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
              >
                {index + 1}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <span className="sr-only">Next</span>
              <svg className="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4L1 1" />
              </svg>
            </button>
          </li>
        </ul>
      </nav>
      {selectedEvent && (
        <div id="default-modal" tabIndex="-1" aria-hidden="true" className="fixed inset-0 flex items-center justify-center z-50 overflow-auto bg-black bg-opacity-50">
          <div className="relative w-full max-w-2xl p-4 max-h-full">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{selectedEvent.name}</h3>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={closeModal}
                >
                  <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <div className="p-4 md:p-5 space-y-4">
                <img src={`${selectedEvent.thumbnail}`} alt={selectedEvent.name} className="object-cover rounded-md w-full h-auto mb-2 lg:mb-4" />
                <p className="text-black font-bold dark:text-white text-sm">{selectedEvent.name}</p>
                {/* <p className="text-base leading-relaxed text-black dark:text-white"
                  dangerouslySetInnerHTML={{ __html: selectedEvent.content }}>
                </p> */}
                <p className="text-base leading-relaxed text-black dark:text-white">
                  Tanggal: {new Date(selectedEvent.start_date).toLocaleDateString()} - {new Date(selectedEvent.end_date).toLocaleDateString()}
                </p>
                <p className="text-base leading-relaxed text-black dark:text-white">Lokasi: {selectedEvent.location}</p>
              </div>
              <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600 gap-2">
                <a
                  href={`/eventLengkap/${selectedEvent.id}`}
                  className="w-full hidden rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] px-2 py-3 md:flex justify-center items-center mt-4"
                >
                  <p className="font-medium">Baca Selengkapnya</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
