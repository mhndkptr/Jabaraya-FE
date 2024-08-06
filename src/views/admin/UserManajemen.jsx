import NavbarAdmin from "./partials/NavbarAdmin";
import { SidebarAdmin } from "./partials/SidebarAdmin";
import { Table } from "flowbite-react";
import React, { useState, useEffect } from "react";
import axiosClient from "../../api/axios/axios";

export default function UserManajemen() {
    const [users, setUsers] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [sortOrder, setSortOrder] = useState("asc");
    const [currentPage, setCurrentPage] = useState(1);
    const usersPerPage = 10;

    useEffect(() => {
        axiosClient
            .get("/users")
            .then((res) => {
                setUsers(res.data.data);
                console.log(res.data.data);
            })
            .catch((err) => {
                const response = err.response;
                console.log(response);
            });
    }, []);

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
        setCurrentPage(1); 
    };

    const handleSortChange = (e) => {
        setSortOrder(e.target.value);
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const filteredUsers = users.filter((user) =>
        (user.name?.toLowerCase() || "").includes(searchQuery.toLowerCase()) ||
        (user.email?.toLowerCase() || "").includes(searchQuery.toLowerCase())
    );

    const sortedUsers = [...filteredUsers].sort((a, b) => {
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();

        if (sortOrder === "asc") {
            return nameA.localeCompare(nameB);
        } else {
            return nameB.localeCompare(nameA);
        }
    });

    // Pagination logic
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = sortedUsers.slice(indexOfFirstUser, indexOfLastUser);
    const totalPages = Math.ceil(sortedUsers.length / usersPerPage);

    return (
        <div className="">
            <NavbarAdmin />
            <SidebarAdmin />
            <div className="p-4 mt-10 sm:ml-64">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 mt-10">
                    <div className="flex flex-col justify-between p-8 bg-white shadow-lg rounded-lg ring-1">
                        <div>
                            <h1 className="text-sm">Data Users Jabaraya</h1>
                            <p className="text-4xl font-bold">{users.length} User{users.length !== 1 ? 's' : ''}</p>
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
                            <input
                                type="search"
                                id="default-search"
                                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Search Users..."
                                value={searchQuery}
                                onChange={handleSearchChange}
                                required
                            />
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
                    {users.length > 0 ? (
                        <>
                            <Table striped>
                                <Table.Head>
                                    <Table.HeadCell>Name</Table.HeadCell>
                                    <Table.HeadCell>Email</Table.HeadCell>
                                    <Table.HeadCell>Avatar</Table.HeadCell>
                                    <Table.HeadCell>Role</Table.HeadCell>
                                </Table.Head>
                                <Table.Body className="divide-y">
                                    {currentUsers.map(user => (
                                        <Table.Row key={user.id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{user.name}</Table.Cell>
                                            <Table.Cell>{user.email}</Table.Cell>
                                            <Table.Cell>
                                                <img src={user.avatar} alt="avatar" className="w-10 h-10 rounded-full"/>
                                            </Table.Cell>
                                            <Table.Cell>{user.role}</Table.Cell>
                                        </Table.Row>
                                    ))}
                                </Table.Body>
                            </Table>
                            {/* Pagination */}
                            <div className="flex justify-end mt-4">
                                {Array.from({ length: totalPages }, (_, index) => (
                                    <button
                                        key={index}
                                        className={`mx-1 px-3 py-1 border rounded-lg ${currentPage === index + 1 ? "bg-blue-500 text-white" : "bg-white text-gray-700"}`}
                                        onClick={() => handlePageChange(index + 1)}
                                    >
                                        {index + 1}
                                    </button>
                                ))}
                            </div>
                        </>
                    ) : (
                        <p>No users found or loading...</p>
                    )}
                </div>
            </div>
        </div>
    );
}
