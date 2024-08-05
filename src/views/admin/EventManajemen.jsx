import NavbarAdmin from "./partials/NavbarAdmin";
import { SidebarAdmin } from "./partials/SidebarAdmin";
import Axios from "axios";
import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction"; // for selectable
import Swal from 'sweetalert2';
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default function EventManajemen() {
    const [kategori, setKategori] = useState([]);
    const [event, setEvent] = useState([]);
    const [form, setForm] = useState({
        name: "",
        thumbnail: "",
        start_date: "",
        end_date: "",
        location: "",
        content: "",
        link: "",
        category_id: "",
    });
    // const [searchQuery, setSearchQuery] = useState("");
    const [EditEvent, setEditEvent] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);

    useEffect(() => {
        Axios.get("http://127.0.0.1:8000/api/categorys")
            .then(response => {
                setKategori(response.data);
            })
            .catch(error => console.error("Error fetching categories:", error));
    }, []);
    
    useEffect(() => {
        Axios.get("http://127.0.0.1:8000/api/events")
            .then(response => {
                setEvent(response.data);
            })
            .catch(error => console.error("Error fetching event:", error));
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleFileChange = (e) => {
        setForm({ ...form, thumbnail: e.target.files[0] });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("name", form.name);
        formData.append("start_date", form.start_date);
        formData.append("end_date", form.end_date);
        formData.append("location", form.location);
        formData.append("content", form.content);
        formData.append("link", form.link);
        formData.append("category_id", form.category_id);
        if (form.thumbnail) {
            formData.append("thumbnail", form.thumbnail);
        }

        Axios.post("http://127.0.0.1:8000/api/events", formData)
            .then(response => {
                setEvent([...event, response.data]);
                setForm({ name: "", start_date: "", end_date: "", location: "", content: "", link: "", thumbnail: "", category_id: "" });
                Swal.fire({
                    title: 'Success!',
                    text: 'Data berhasil ditambahkan!',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                });
            })
            .catch(error => console.error("Error adding event:", error));
    };

    const handleEdit = (event) => {
        console.log("Editing event:", event);
        setEditEvent(event);
        setForm({
            name: event.name,
            content: event.content,
            start_date: event.start_date,
            end_date: event.end_date,
            location: event.location,
            link: event.link,
            thumbnail: "",
            category_id: event.category_id,
        });
    };

    const handleEditSubmit = (e) => {
        e.preventDefault();
        
        const formData = new FormData();
        formData.append("name", form.name);
        formData.append("start_date", form.start_date);
        formData.append("end_date", form.end_date);
        formData.append("location", form.location);
        formData.append("content", form.content);
        formData.append("link", form.link);
        formData.append("category_id", form.category_id);
        if (form.thumbnail) {
            formData.append("thumbnail", form.thumbnail);
        }

        console.log("Form Data being sent:", formData);

        Axios.post(`http://127.0.0.1:8000/api/events/${EditEvent.id}`, formData, {
            headers: {
                'X-HTTP-Method-Override': 'PUT'
            }
        })
            .then(response => {
                console.log("Updated event:", response.data);
                setEvent(event.map(events => events.id === EditEvent.id ? response.data : events));
                setEditEvent(null); // Clear edit state
                setForm({ name: "", content: "", thumbnail: "", category_id: "" });
                Swal.fire({
                    title: 'Success!',
                    text: 'Data berhasil diupdate!',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                });
            })
            .catch(error => console.error("Error updating event:", error));
    };
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                Axios.delete(`http://127.0.0.1:8000/api/events/${id}`)
                    .then(() => {
                        setEvent(event.filter(events => events.id !== id));
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                    })
            .catch(error => console.error("Error deleting article:", error));
            }
        });
    };

    const handleEventClick = (info) => {
        const eventData = event.find(events => events.name === info.event.title);
        setSelectedEvent(eventData);
        setModalVisible(true);
    };

    const events = event.map(events => ({
        title: events.name,
        start: events.start_date,
        end: events.end_date
    }));

    const closeModal = () => {
        setModalVisible(false);
        setSelectedEvent(null);
    };

    return(
        <div className="">
        <NavbarAdmin/>
        <SidebarAdmin/>
        <div className="p-4 mt-10 sm:ml-64">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 mt-10">
                <div className="flex flex-col justify-between p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg ring-1 dark:ring-gray-700">
                    <div>
                        <h1 className="text-sm text-gray-900 dark:text-gray-100">Data Event Yang Dipublish</h1>
                        <p className="text-4xl font-bold text-gray-900 dark:text-gray-100">{event.length} Event</p>
                        <span className="mt-2 text-gray-700 dark:text-gray-300">Sudah Dipublish</span>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 mt-10">
                <div className="flex flex-col justify-between p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg ring-1 dark:ring-gray-700">
                    <div>
                        <div className="shadow-lg rounded bg-jabarayaColors-500 dark:bg-jabarayaColors-600 text-white">
                            <div className="p-4">
                                <h5 className="text-lg font-semibold">Agenda Kegiatan Event</h5>
                            </div>
                        </div>
                        <div className="p-4">
                            <FullCalendar
                                plugins={[dayGridPlugin, interactionPlugin]}
                                initialView="dayGridMonth"
                                events={events}
                                eventClick={handleEventClick}
                            />
                        </div>
                    </div>
                    {EditEvent && (
                            <div>
                                <h1 className="text-gray-900 dark:text-gray-100">Edit Event</h1>
                                <form className="p-4 md:p-5" onSubmit={handleEditSubmit}>
                                    <div className="grid gap-4 mb-4 grid-cols-2">
                                        <div className="col-span-2">
                                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-100">Nama Event</label>
                                            <input type="text" id="name" name="name" value={form.name} onChange={handleInputChange} className="block w-full p-2.5 text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter name" />
                                        </div>
                                        <div className="col-span-2">
                                            <label htmlFor="thumbnail" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-100">Thumbnails</label>
                                            <input type="file" id="thumbnail" name="thumbnail" onChange={handleFileChange} aria-label="Upload thumbnails" className="block w-full p-2.5 text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 shadow-md hover:shadow-lg focus:outline-none focus:bg-white dark:focus:bg-gray-600 transition duration-200 ease-in-out" />
                                        </div>
                                        <div className="col-span-2">
                                            <label htmlFor="start_date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-100">Start Date</label>
                                            <input type="datetime-local" id="start_date" name="start_date" value={form.start_date} onChange={handleInputChange} className="block w-full p-2.5 text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Select start date" />
                                        </div>
                                        <div className="col-span-2">
                                            <label htmlFor="end_date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-100">End Date</label>
                                            <input type="datetime-local" id="end_date" name="end_date" value={form.end_date} onChange={handleInputChange} className="block w-full p-2.5 text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Select end date" />
                                        </div>
                                        <div className="col-span-2">
                                            <label htmlFor="location" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-100">Location</label>
                                            <input type="text" id="location" name="location" value={form.location} onChange={handleInputChange} className="block w-full p-2.5 text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter location" />
                                        </div>
                                        <div className="col-span-2">
                                            <label htmlFor="content" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-100">Content</label>
                                            <CKEditor
                                        editor={ClassicEditor}
                                        data={form.content}
                                        onChange={(event, editor) => {
                                            const data = editor.getData();
                                            setForm({ ...form, content: data });
                                        }}
                                        config={{
                                            ckfinder: {
                                                uploadUrl: 'http://127.0.0.1:8000/api/events/upload-image',
                                            },
                                            toolbar: [
                                                "heading",
                                                "|",
                                                "bold",
                                                "italic",
                                                "link",
                                                "bulletedList",
                                                "numberedList",
                                                "|",
                                                "imageInsert",
                                                "blockQuote",
                                                "insertTable",
                                                "mediaEmbed",
                                                "undo",
                                                "redo",
                                            ],
                                        }}
                                    />
                                        </div>
                                        <div className="col-span-2">
                                            <label htmlFor="link" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-100">Link</label>
                                            <input type="url" id="link" name="link" value={form.link} onChange={handleInputChange} className="block w-full p-2.5 text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter link" />
                                        </div>
                                        <div className="col-span-2">
                                            <label htmlFor="category_id" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-100">Category</label>
                                            <select id="category_id" name="category_id" value={form.category_id} onChange={handleInputChange} className="block w-full p-2.5 text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                                <option value="">Select category</option>
                                                {kategori.map(category => (
                                                    <option key={category.id} value={category.id}>{category.name}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                    <button type="submit" className="bg-jabarayaColors-500 w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                        Update Event
                                    </button>
                                </form>
                            </div>
                        )}
                </div>
                <div className="flex flex-col justify-between p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg ring-1 dark:ring-gray-700">
                    <div>
                        <h1 className="text-gray-900 dark:text-gray-100">Event Form</h1>
                        <form className="p-4 md:p-5" onSubmit={handleSubmit}>
                            <div className="grid gap-4 mb-4 grid-cols-2">
                                <div className="col-span-2">
                                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-100">Nama Event</label>
                                    <input type="text" id="name" name="name" value={form.name} onChange={handleInputChange} className="block w-full p-2.5 text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter name"/>
                                </div>
                                <div className="col-span-2">
                                    <label htmlFor="thumbnail" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-100">Thumbnails</label>
                                    <input type="file" id="thumbnail" name="thumbnail" onChange={handleFileChange} aria-label="Upload thumbnails" className="block w-full p-2.5 text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 shadow-md hover:shadow-lg focus:outline-none focus:bg-white dark:focus:bg-gray-600 transition duration-200 ease-in-out" />
                                </div>
                                <div className="col-span-2">
                                    <label htmlFor="start_date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-100">Start Date</label>
                                    <input type="datetime-local" id="start_date" name="start_date" value={form.start_date} onChange={handleInputChange} className="block w-full p-2.5 text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500" required/>
                                </div>
                                <div className="col-span-2">
                                    <label htmlFor="end_date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-100">End Date</label>
                                    <input type="datetime-local" id="end_date" name="end_date" value={form.end_date} onChange={handleInputChange} className="block w-full p-2.5 text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500" required/>
                                </div>
                                <div className="col-span-2">
                                    <label htmlFor="location" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-100">Location</label>
                                    <input type="text" id="location" name="location" value={form.location} onChange={handleInputChange} className="block w-full p-2.5 text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter location" required/>
                                </div>
                                <div className="col-span-2">
                                    <label htmlFor="content" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-100">Content</label>
                                    <CKEditor
                                            editor={ClassicEditor}
                                            data={form.content}
                                            onChange={(event, editor) => {
                                                const data = editor.getData();
                                                setForm({ ...form, content: data });
                                            }}
                                            config={{
                                                ckfinder: {
                                                    uploadUrl: 'http://127.0.0.1:8000/api/events/upload-image',
                                                },
                                                toolbar: [
                                                    "heading",
                                                    "|",
                                                    "bold",
                                                    "italic",
                                                    "link",
                                                    "bulletedList",
                                                    "numberedList",
                                                    "|",
                                                    "imageUpload",
                                                    "blockQuote",
                                                    "insertTable",
                                                    "mediaEmbed",
                                                    "undo",
                                                    "redo",
                                                ],
                                            }}
                                        />                         
                                </div>
                                <div className="col-span-2">
                                    <label htmlFor="link" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-100">Link</label>
                                    <input type="text" id="link" name="link" value={form.link} onChange={handleInputChange} className="block w-full p-2.5 text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter link" required/>
                                </div>
                                <div className="col-span-2">
                                    <label htmlFor="category_id" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-100">Category</label>
                                    <select id="category_id" name="category_id" value={form.category_id} onChange={handleInputChange} className="block w-full p-2.5 text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                        <option value="">Select Category</option>
                                        {kategori.map((category) => (
                                            <option key={category.id} value={category.id}>
                                                {category.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>    
                            </div>
                            <button type="submit" className="inline-flex items-center text-black bg-transparent border border-black hover:bg-jabarayaColors-700 hover:text-white hover:border-none focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:hover:bg-gray-600 dark:hover:text-white dark:text-white dark:border-none dark:bg-gray-700">
                                <svg className="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd"></path></svg>
                                Tambah Berita   
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        {modalVisible && selectedEvent && (
            <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-11/12 md:w-1/3">
                    <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">{selectedEvent.name}</h2>
                    {/* thumbnail */}
                    <img src={`http://127.0.0.1:8000/storage/${selectedEvent.thumbnail}`} alt={selectedEvent.name} className="w-full h-64 object-cover mb-4 rounded-lg" />
                    <p className="dark:text-white"><strong className="text-gray-900 dark:text-gray-100">Location:</strong> <a href={selectedEvent.location} target="_blank" rel="noopener noreferrer" className="text-blue-500 dark:text-blue-400">{selectedEvent.location}</a></p>
                    <p className="dark:text-white"><strong className="text-gray-900 dark:text-gray-100">Start Date:</strong> {selectedEvent.start_date}</p>
                    <p className="dark:text-white"><strong className="text-gray-900 dark:text-gray-100">End Date:</strong> {selectedEvent.end_date}</p>
                    <p className="dark:text-white"><strong className="text-gray-900 dark:text-gray-100">Content:</strong> {selectedEvent.content}</p>
                    <p><strong className="text-gray-900 dark:text-gray-100">Link:</strong> <a href={selectedEvent.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 dark:text-blue-400">{selectedEvent.link}</a></p>
                    <button onClick={closeModal} className="mt-4 inline-flex items-center text-black bg-transparent border border-black hover:bg-jabarayaColors-700 hover:text-white hover:border-none focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:hover:bg-gray-600 dark:hover:text-white dark:text-white dark:border-none dark:bg-gray-700">
                        Close
                    </button>
                    <button onClick={() => handleDelete(selectedEvent.id)} className="mx-2 mt-4 inline-flex items-center text-red-700 bg-transparent border border-black hover:bg-red-700 hover:text-white hover:border-none focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:hover:bg-gray-600 dark:hover:text-white dark:text-white dark:border-none dark:bg-gray-700">
                        Delete
                    </button>
                    <button onClick={() => handleEdit(selectedEvent)} className="mt-4 inline-flex items-center text-black bg-transparent border border-black hover:bg-jabarayaColors-700 hover:text-white hover:border-none focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:hover:bg-gray-600 dark:hover:text-white dark:text-white dark:border-none dark:bg-gray-700">
                        Edit
                    </button>
                </div>
            </div>
        )}
    </div>    
    )
}
