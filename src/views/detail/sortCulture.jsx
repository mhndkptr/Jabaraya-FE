import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "../css/style.css";
import logo from "../../assets/img-beranda/JABARAYA.png";

export default function SortCulture() {
    const [cultures, setCultures] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch cultures filtered by category ID
        axios.get(`http://127.0.0.1:8000/api/cultures?category_id=${id}`)
            .then(response => setCultures(response.data))
            .catch(error => console.error("Error fetching cultures:", error));
    }, [id]);

    return (
        <section className="border-black w-full min-h-screen px-5 md:px-28 mt-10 -z-10">
            <h2 className="text-4xl text-center mt-16 font-semibold">
                Budaya Asli Bandung
            </h2>
            <div className="h-10 text-center w-full flex justify-center items-center relative mt-3">
                <div className="relative w-8 h-8 bg-white after:after-content after:w-[165px] after:h-[1px] after:bg-[#D9D9D9] after:absolute after:top-[50%] after:left-12 before:after-content before:w-[165px] before:h-[1px] before:bg-[#D9D9D9] before:absolute before:top-[50%] before:right-12">
                    <img src={logo} alt="" />
                </div>
            </div>
            <div className="mx-44 relative mt-5 hidden lg:block">
                <div className="flex items-center gap-2 relative after:after-content after:min-w-[80%] after:h-[1px] after:left-[16.5%] after:absolute after:bg-[#D9D9D9]">
                    <div className="w-3 h-3 bg-[#D9D9D9] rounded-full"></div>
                    <p className="text-body-bold">Budaya Asli Bandung </p>
                </div>
            </div>
            <button
                className="flex items-center rounded-md p-2 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] justify-start"
                onClick={() => navigate(-1)}>
                <span className="material-symbols-outlined">chevron_left</span>{" "}
                <p>Kembali</p>
            </button>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cultures.map(culture => (
                    <div key={culture.id} className="bg-white shadow-md rounded-lg p-4">
                        <img
                            src={`http://127.0.0.1:8000/storage/${culture.thumbnail}`}
                            alt={culture.title}
                            className="object-cover rounded-md w-full h-48 mb-2 lg:mb-4"
                        />
                        <h3 className="mt-4 text-xl font-semibold">{culture.title}</h3>
                        <div className="flex justify-between mt-4">
                            <p>{culture.name}</p>
                        </div>
                        <button className="w-full rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] px-2 py-3 flex justify-center items-center mt-4">
                            <a href={`/budayaLengkap/${culture.id}`}  className="font-medium">
                                Baca Selengkapnya
                            </a>
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}
