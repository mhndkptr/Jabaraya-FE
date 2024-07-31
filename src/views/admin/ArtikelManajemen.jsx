import NavbarAdmin from "./partials/NavbarAdmin";
import { SidebarAdmin } from "./partials/SidebarAdmin";
import { Table } from "flowbite-react";
import Axios from "axios";
import React, { useState, useEffect } from "react";

export default function ArtikelManajemen() {
    const [articles, setArticles] = useState([]);
    const [form, setForm] = useState({
        title: "",
        content: "",
        thumbnail: "",
    });
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        Axios.get("http://127.0.0.1:8000/api/articles")
            .then(response => {
                setArticles(response.data);
            })
            .catch(error => console.error("Error fetching articles:", error));
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleFileChange = (e) => {
        setForm({ ...form, thumbnail: e.target.files[0] });
    };
    // Fungsi Tammbah Data
    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("title", form.title);
        formData.append("content", form.content);
        if (form.thumbnail) {
            formData.append("thumbnail", form.thumbnail);
        }

        Axios.post("http://127.0.0.1:8000/api/articles", formData)
            .then(response => {
                setArticles([...articles, response.data]);
                setForm({ title: "", content: "", thumbnail: "" });
            })
            .catch(error => console.error("Error adding article:", error));
    };
    // Fungsi Edit Data
    const [editArticle, setEditArticle] = useState(null);
    const handleEdit = (article) => {
        console.log("Editing article:", article);
        setEditArticle(article);
        setForm({
            title: article.title,
            content: article.content,
            thumbnail: "", // Reset the file input
        });
    };
    
    const handleEditSubmit = (e) => {
        e.preventDefault();
    
        const formData = new FormData();
        formData.append("title", form.title);
        formData.append("content", form.content);
        if (form.thumbnail) {
            formData.append("thumbnail", form.thumbnail);
        }

        console.log("Form Data being sent:", formData);

        Axios.post(`http://127.0.0.1:8000/api/articles/${editArticle.id}`, formData, {
            headers: {
                'X-HTTP-Method-Override': 'PUT'
            }
        })
        .then(response => {
            console.log("Updated article:", response.data);
            setArticles(articles.map(article => article.id === editArticle.id ? response.data : article));
            setEditArticle(null); // Clear edit state
            setForm({ title: "", content: "", thumbnail: "" });
        })
        .catch(error => console.error("Error updating article:", error));
    };

    // Fungsi Delete Data
    const handleDelete = (id) => {
        Axios.delete(`http://127.0.0.1:8000/api/articles/${id}`)
            .then(() => {
                setArticles(articles.filter(article => article.id !== id));
            })
            .catch(error => console.error("Error deleting article:", error));
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const filteredArticles = articles.filter(article =>
        (article.title?.toLowerCase() || "").includes(searchQuery.toLowerCase()) ||
        (article.content?.toLowerCase() || "").includes(searchQuery.toLowerCase())
    );
    
    const [sortOrder, setSortOrder] = useState("asc");

    const handleSortChange = (e) => {
        setSortOrder(e.target.value);
    };

    const sortedArticles = [...filteredArticles].sort((a, b) => {
        const titleA = a.title || "";
        const titleB = b.title || "";
    
        if (sortOrder === "asc") {
            return titleA.localeCompare(titleB);
        } else {
            return titleB.localeCompare(titleA);
        }
    });
    
    const [currentPage, setCurrentPage] = useState(1);
    const articlesPerPage = 10;

    const indexOfLastArticle = currentPage * articlesPerPage;
    const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
    const currentArticles = sortedArticles.slice(indexOfFirstArticle, indexOfLastArticle);

    const handleNextPage = () => {
        if (currentPage < Math.ceil(sortedArticles.length / articlesPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return(
        
        <div className="">
            <NavbarAdmin/>
            <SidebarAdmin/>
                <div className="p-4 mt-10 sm:ml-64 dark:bg-gray-900 ">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 mt-10">
                        <div className="flex flex-col justify-between p-8 bg-white shadow-lg rounded-lg ring-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white">
                            <div>
                                <h1 className="text-sm">Data Artikel Yang Dipublish</h1>
                                <p className="text-4xl font-bold">{articles.length} Artikel</p>
                                <span className="mt-2">Sudah Dipublish</span>
                            </div>
                        </div>
                    </div>
                    {/* form update di hidden biar supprize,waokaokokwoawkoa*/}
                    <div className={editArticle ? "" : "hidden"}>
                        <form className="p-4 md:p-5" onSubmit={handleEditSubmit}>
                            <div className="grid gap-4 mb-4 grid-cols-2">
                                <div className="col-span-2">
                                    <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                                    <input type="text" id="title" name="title" value={form.title} onChange={handleInputChange} className="block w-full p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter Title"/>
                                </div>
                                <div className="col-span-2">
                                    <label htmlFor="thumbnail" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Thumbnail</label>
                                    <input type="file" id="thumbnail" name="thumbnail" onChange={handleFileChange} className="block w-full p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 shadow-md hover:shadow-lg focus:outline-none focus:bg-white dark:focus:bg-gray-700 transition duration-200 ease-in-out" />
                                </div>
                                <div className="col-span-2">
                                    <label htmlFor="content" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Content</label>
                                    <textarea id="content" name="content" value={form.content} onChange={handleInputChange} rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write content right here" required></textarea>
                                </div>
                            </div>
                            <button type="edit" className="inline-flex items-center text-black bg-transparent border border-black hover:bg-jabarayaColors-700 hover:text-white hover:border-none focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:hover:bg-gray-600 dark:hover:text-white">
                                Save Changes
                            </button>
                        </form>
                    </div>
                    <button data-modal-target="crud-modal" data-modal-toggle="crud-modal" className="mt-5 block text-black bg-transparent border border-black hover:bg-jabarayaColors-700 hover:text-white hover:border-none focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:hover:bg-gray-600 dark:hover:text-white dark:text-white dark:border-none dark:bg-gray-700" type="button">
                        Tambah Data
                    </button>
                    <div id="crud-modal" tabIndex="-1" aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                        <div className="relative p-4 w-full max-w-md max-h-full">
                            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                        Add new articles
                                    </h3>
                                    <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="crud-modal">
                                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                        </svg>
                                        <span className="sr-only">Close</span>
                                    </button>
                                </div>
                                <form className="p-4 md:p-5" onSubmit={handleSubmit}>
                                    <div className="grid gap-4 mb-4 grid-cols-2">
                                        <div className="col-span-2">
                                            <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                                            <input type="text" id="title" name="title" value={form.title} onChange={handleInputChange} className="block w-full p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter Title"/>
                                        </div>
                                        <div className="col-span-2">
                                            <label htmlFor="thumbnail" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Thumbnails</label>
                                            <input type="file" id="thumbnail" name="thumbnail" onChange={handleFileChange} aria-label="Upload thumbnails" className="block w-full p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-600 dark:border-gray-500 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 shadow-md hover:shadow-lg focus:outline-none focus:bg-white dark:focus:bg-gray-700 transition duration-200 ease-in-out" />
                                        </div>
                                        <div className="col-span-2">
                                            <label htmlFor="content" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Content</label>
                                            <textarea id="content" name="content" value={form.content} onChange={handleInputChange} rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write content right here" required></textarea>                    
                                        </div>
                                    </div>
                                    <button type="submit" className="inline-flex items-center text-black bg-transparent border border-black hover:bg-jabarayaColors-700 hover:text-white hover:border-none focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:hover:bg-gray-600 dark:hover:text-white dark:text-white dark:border-none dark:bg-gray-700">
                                        <svg className="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd"></path></svg>
                                        Tambah Artikel
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div> 
                    <div className="overflow-x-auto mt-5">
                        <form className="max-w-md mx-0 mb-2">
                            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                    </svg>
                                </div>
                                <input type="search" id="default-search" value={searchQuery} onChange={handleSearchChange} className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="Search articles..." required />
                            </div>
                        </form>
                        {/* Sort By */}
                        <div className="flex items-center justify-end mb-2">
                            <label htmlFor="sort" className="text-sm font-medium text-gray-900 me-2 dark:text-white">Sort By</label>
                            <select
                                id="sort"
                                name="sort"
                                value={sortOrder}
                                onChange={handleSortChange}
                                className="text-sm text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg p-2"
                            >
                                <option value="asc">Ascending</option>
                                <option value="desc">Descending</option>
                            </select>
                        </div>
                        <Table striped>
                            <Table.Head>
                                <Table.HeadCell>Title</Table.HeadCell>
                                <Table.HeadCell>Thumbnails</Table.HeadCell>
                                <Table.HeadCell>Content</Table.HeadCell>
                                <Table.HeadCell>Created At</Table.HeadCell>
                                <Table.HeadCell>Actions</Table.HeadCell>
                            </Table.Head>
                            <Table.Body className="divide-y">
                                {currentArticles.map(article => (
                                    <Table.Row key={article.id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                            {article.title}
                                        </Table.Cell>
                                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                            <img src={`http://127.0.0.1:8000/storage/${article.thumbnail}`} alt={article.title} className="w-20 h-20 object-cover rounded-lg" />
                                        </Table.Cell>
                                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                            {article.content}
                                        </Table.Cell>
                                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                            {new Date(article.created_at).toLocaleDateString()}
                                        </Table.Cell>
                                        <Table.Cell>
                                            <button onClick={() => handleEdit(article)} className="font-medium text-blue-600 hover:underline dark:text-blue-500">Edit</button>
                                            <span className="mx-2">|</span>
                                            <button onClick={() => handleDelete(article.id)} className="font-medium text-red-600 hover:underline dark:text-red-500">Delete</button>
                                        </Table.Cell>
                                    </Table.Row>
                                ))}
                            </Table.Body>
                        </Table>
                        {/* Pagination */}
                        <div className="flex items-center justify-between mt-5">
                            <span className="text-sm text-gray-900 dark:text-white">
                                Showing {indexOfFirstArticle + 1} to {Math.min(indexOfLastArticle, sortedArticles.length)} of {sortedArticles.length} entries
                            </span>
                            <div className="flex items-center">
                                <button onClick={handlePreviousPage} disabled={currentPage === 1} className="text-sm text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg p-2.5">Prev</button>
                                <button onClick={handleNextPage} disabled={currentPage === Math.ceil(sortedArticles.length / articlesPerPage)} className="text-sm text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg p-2.5 ms-2">Next</button>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
}
