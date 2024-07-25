import NavbarAdmin from "./partials/NavbarAdmin";
import { SidebarAdmin } from "./partials/SidebarAdmin";
import { Table } from "flowbite-react";
import Axios from "axios";
import React, { useState, useEffect } from "react";
export default function UserManajemen(){
    const [user, setUser] = useState({});

    useEffect(() => {
        const token = 'your-auth-token';

        Axios.get('http://127.0.0.1:8000/api/user', {
            headers: { Authorization: `Bearer ${token}` }
        })
            .then(response => {
                setUser(response.data);
            })
            .catch(error => console.error('Error fetching user:', error));
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
                            <p className="text-4xl font-bold">{user.length} User</p>
                            </div>
                        </div>
                    </div>
                    <button data-modal-target="crud-modal" data-modal-toggle="crud-modal" className="mt-5 block text-black bg-transparent border border-black hover:bg-jabarayaColors-700 hover:text-white hover:border-none focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                        Tambah Data
                    </button>
                    <div id="crud-modal" tabIndex="-1" aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                        <div className="relative p-4 w-full max-w-md max-h-full">
                            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                        Add new Users
                                    </h3>
                                    <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="crud-modal">
                                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                        </svg>
                                        <span className="sr-only">Close</span>
                                    </button>
                                </div>
                                <form className="p-4 md:p-5">
                                    <div className="grid gap-4 mb-4 grid-cols-2">
                                        <div className="col-span-2">
                                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nama</label>
                                            <input type="text" id="name" className="block w-full p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter name"/>
                                        </div>
                                        <div className="col-span-2">
                                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                            <input type="email" id="email" className="block w-full p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter email"/>
                                        </div>
                                        <div className="col-span-2">
                                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                            <input type="password" id="password" className="block w-full p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter password"/>
                                        </div>
                                        <div className="col-span-2">
                                            <label htmlFor="role" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Role</label>
                                            <select id="role" className="block w-full p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                                <option value="admin">Admin</option>
                                                <option value="user">User</option>
                                            </select>
                                        </div>
                                    </div>
                                    <button type="submit" className="inline-flex items-center text-black bg-transparent border border-black hover:bg-jabarayaColors-700 hover:text-white hover:border-none focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        <svg className="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd"></path></svg>
                                        Tambah User
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
                                <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
                                <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                            </div>
                        </form>
                        <Table striped>
                        <Table.Head>
                            <Table.HeadCell>Product name</Table.HeadCell>
                            <Table.HeadCell>Color</Table.HeadCell>
                            <Table.HeadCell>Category</Table.HeadCell>
                            <Table.HeadCell>Price</Table.HeadCell>
                            <Table.HeadCell>
                            <span className="sr-only">Edit</span>
                            </Table.HeadCell>
                        </Table.Head>
                        <Table.Body className="divide-y">
                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                {'Apple MacBook Pro 17"'}
                            </Table.Cell>
                            <Table.Cell>Sliver</Table.Cell>
                            <Table.Cell>Laptop</Table.Cell>
                            <Table.Cell>$2999</Table.Cell>
                            <Table.Cell>
                                <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                                Edit
                                </a>
                            </Table.Cell>
                            </Table.Row>
                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                Microsoft Surface Pro
                            </Table.Cell>
                            <Table.Cell>White</Table.Cell>
                            <Table.Cell>Laptop PC</Table.Cell>
                            <Table.Cell>$1999</Table.Cell>
                            <Table.Cell>
                                <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                                Edit
                                </a>
                            </Table.Cell>
                            </Table.Row>
                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">Magic Mouse 2</Table.Cell>
                            <Table.Cell>Black</Table.Cell>
                            <Table.Cell>Accessories</Table.Cell>
                            <Table.Cell>$99</Table.Cell>
                            <Table.Cell>
                                <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                                Edit
                                </a>
                            </Table.Cell>
                            </Table.Row>
                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                Google Pixel Phone
                            </Table.Cell>
                            <Table.Cell>Gray</Table.Cell>
                            <Table.Cell>Phone</Table.Cell>
                            <Table.Cell>$799</Table.Cell>
                            <Table.Cell>
                                <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                                Edit
                                </a>
                            </Table.Cell>
                            </Table.Row>
                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">Apple Watch 5</Table.Cell>
                            <Table.Cell>Red</Table.Cell>
                            <Table.Cell>Wearables</Table.Cell>
                            <Table.Cell>$999</Table.Cell>
                            <Table.Cell>
                                <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                                Edit
                                </a>
                            </Table.Cell>
                            </Table.Row>
                        </Table.Body>
                        </Table>
                    </div>
                </div>
        </div>
    )
}