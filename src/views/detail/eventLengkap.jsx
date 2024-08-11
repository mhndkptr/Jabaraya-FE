import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function EventLengkap() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch event data
    axios
      .get(`http://127.0.0.1:8000/api/events/${id}`)
      .then((response) => {
        setEvent(response.data);
      })
      .catch((error) => {
        console.error("Error fetching event data:", error);
      });

    // Fetch categories data
    axios
      .get("http://127.0.0.1:8000/api/categorys")
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error("Error fetching categories data:", error);
      });
  }, [id]);

  // Function to get category name by ID
  const getCategoryName = (categoryId) => {
    const category = categories.find((cat) => cat.id === categoryId);
    return category ? category.name : "Unknown Category";
  };

  if (!event) {
    return <p>Loading...</p>;
  }


  return (
    <section className="border-black w-full min-h-screen px-5 md:px-28 mt-10 -z-10">
      <button
        className="flex items-center rounded-md p-2 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] justify-center"
        onClick={() => navigate(-1)}>
        <span className="material-symbols-outlined">chevron_left</span>{" "}
        <p>Kembali</p>
      </button>
      <aside className="bg-jabarayaColors-200 flex flex-col w-full h-auto mt-5 rounded-xl lg:grid lg:grid-cols-[1fr,1fr] md:p-10 p-4 ">
        <div className="flex flex-col gap-2 md:gap-3 order-2 lg:order-1">
          <h2 className="lg:text-4xl text-[1.2rem] font-bold md:font-semibold lg:w-[700px]">
            {event.name}
          </h2>
          <p className="mt-1 p-2 bg-white w-[100px] rounded-md">
            {new Date(event.start_date).toLocaleDateString()}
          </p>
          <span className="text-xs border font-semibold border-jabarayaColors-700 p-1 rounded-md text-jabarayaColors-700 w-28">
            {getCategoryName(event.category_id)}
          </span>
          <div className="flex gap-2">
            <span className="material-symbols-outlined">location_on</span>
            <a href={event.location} target="blank" className="md:text-xl font-medium">{event.location}</a>
          </div>
          <div className="flex gap-2">
            <span className="material-symbols-outlined">child_care</span>
            <p className="md:text-xl font-medium">Aman bagi anak-anak</p>
          </div>
        </div>
        <div className="flex justify-center items-center order-1 lg:order-2 mb-2">
          <img
            src={`http://127.0.0.1:8000/storage/${event.thumbnail}`}
            alt=""
            className="border border-black rounded-lg lg:w-[350px] lg:h-[300px]"
          />
        </div>
      </aside>
      <main className="flex flex-col justify-center items-center mt-10">
        <div className="flex flex-col justify-center items-center">
          <img
            src={`http://127.0.0.1:8000/storage/${event.thumbnail}`}
            alt=""
            className="border border-black rounded-lg md:w-[350px] md:h-[300px]"
          />
        </div>
        <article className="mt-20 font-medium w-full px-3 ">
          <p className="mb-5 text-justify text-[12px] md:text-[1rem]" dangerouslySetInnerHTML={{ __html: event.content }}>
          </p>
          <div className="flex flex-col">
            <h2 className="text-xl font-semibold mb-2">Baca juga:</h2>
          </div>
          <div className="mt-10">
            <p>
              Created By <span className="font-bold">Admin Ganteng</span>
            </p>
          </div>
        </article>
      </main>
    </section>
  );
}
