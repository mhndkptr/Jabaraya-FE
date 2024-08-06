import NavbarAdmin from "./partials/NavbarAdmin";
import { SidebarAdmin } from "./partials/SidebarAdmin";
import { Table } from "flowbite-react";
import Axios from "axios";
import React, { useState, useEffect } from "react";

export default function UserManajemen(){
    const [users, setUsers] = useState(null);  // Initialize users as null

    useEffect(() => {
        const token = localStorage.getItem("ACCESS_TOKEN");

        Axios.get('https://jabaraya-be-production.up.railway.app/api/users', {
            headers: { Authorization: `Bearer ${token}` }
        })
            .then(response => {
                setUsers(response.data);  // Ensure response.data is an array
            })
            .catch(error => console.error('Error fetching users:', error));
    }, []);

    return(
        <div className="">
            <NavbarAdmin/>
            <SidebarAdmin/>
            <div className="p-4 mt-10 sm:ml-64">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 mt-10">
                    <div className="flex flex-col justify-between p-8 bg-white shadow-lg rounded-lg ring-1">
                        <div>
                            <h1 className="text-sm">Data Users Jabaraya</h1>
                            <p className="text-4xl font-bold">{users ? users.length : 0} User</p>
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
                            <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
                        </div>
                    </form>
                    {users && Array.isArray(users) ? (
                        <Table striped>
                            <Table.Head>
                                <Table.HeadCell>Name</Table.HeadCell>
                                <Table.HeadCell>Email</Table.HeadCell>
                                <Table.HeadCell>Avatar</Table.HeadCell>
                                <Table.HeadCell>Role</Table.HeadCell>
                                <Table.HeadCell>
                                    <span className="sr-only">Edit</span>
                                </Table.HeadCell>
                            </Table.Head>
                            <Table.Body className="divide-y">
                                {users.map(user => (
                                    <Table.Row key={user.id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{user.name}</Table.Cell>
                                        <Table.Cell>{user.email}</Table.Cell>
                                        <Table.Cell>
                                            <img src={user.avatar} alt="avatar" className="w-10 h-10 rounded-full"/>
                                        </Table.Cell>
                                        <Table.Cell>{user.role}</Table.Cell>
                                        <Table.Cell>
                                            <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                                                Delete
                                            </a>
                                        </Table.Cell>
                                    </Table.Row>
                                ))}
                            </Table.Body>
                        </Table>
                    ) : (
                        <p>No users found or loading...</p>
                    )}
                </div>
            </div>
        </div>
    )
}
