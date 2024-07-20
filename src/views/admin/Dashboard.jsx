  import React from "react";
  import NavbarAdmin from "./partials/NavbarAdmin";
  import { SidebarAdmin } from "./partials/SidebarAdmin";
  import { Table } from "flowbite-react";

  export default function Dashboard() {
    return <div className="">
      <NavbarAdmin/>
      <SidebarAdmin/>
      <div className="p-4 mt-10 sm:ml-64">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mt-10">
          <div className="flex flex-col justify-between p-8 bg-white shadow-lg rounded-lg ring-1">
            <div>
              <h1 className="text-sm">Data Berita Yang Dipublish</h1>
              <p className="text-4xl font-bold">4 Berita</p>
              <span className="mt-2">Sudah Dipublish</span>
            </div>
          </div>
          <div className="flex flex-col justify-between p-8 bg-white shadow-lg rounded-lg ring-1">
            <div>
              <h1 className="text-sm">Data Artikel Yang Dipublish</h1>
              <p className="text-4xl font-bold">4 Artikel</p>
              <span className="mt-2">Sudah Dipublish</span>
            </div>
          </div>
          <div className="flex flex-col justify-between p-8 bg-white shadow-lg rounded-lg ring-1">
            <div>
              <h1 className="text-sm">Data Event Yang Dipublish</h1>
              <p className="text-4xl font-bold">4 Event</p>
              <span className="mt-2">Sudah Dipublish</span>
            </div>
          </div>
          <div className="flex flex-col justify-between p-8 bg-white shadow-lg rounded-lg ring-1">
            <div>
              <h1 className="text-sm">Data Budaya Yang Dipublish</h1>
              <p className="text-4xl font-bold">4 Budaya</p>
              <span className="mt-2">Sudah Dipublish</span>
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
    </div>;
  }
