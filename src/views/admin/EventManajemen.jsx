import NavbarAdmin from "./partials/NavbarAdmin";
import { SidebarAdmin } from "./partials/SidebarAdmin";

export default function EventManajemen(){
    return(
        <div className="">
            <NavbarAdmin/>
            <SidebarAdmin/>
                <div className="p-4 mt-10 sm:ml-64">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 mt-10">
                        <div className="flex flex-col justify-between p-8 bg-white shadow-lg rounded-lg ring-1">
                            <div>
                            <h1 className="text-sm">Data Event Yang Dipublish</h1>
                            <p className="text-4xl font-bold">4 Event</p>
                            <span className="mt-2">Sudah Dipublish</span>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 mt-10">
                        <div className="flex flex-col justify-between p-8 bg-white shadow-lg rounded-lg ring-1">
                            <div>
                                <div className="shadow-lg rounded">
                                    <div className="bg-jabarayaColors-500 text-white p-4">
                                        <h5 className="text-lg font-semibold">Agenda Kegiatan Event</h5>
                                    </div>
                                    <div className="p-4">
                                    <form>
                                        <input type="hidden" name="id" value="" />
                                        <div className="col-span-2">
                                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nama Event</label>
                                            <input type="text" id="name" className="block w-full p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Judul Event"/>
                                        </div>
                                        <div className="col-span-2">
                                            <label htmlFor="thumbnail" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Thumbnail</label>
                                            <input type="file" id="thumbnail" className="block w-full p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"/>
                                        </div>
                                        <div className="col-span-2">
                                            <label htmlFor="start" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tanggal Mulai</label>
                                            <input type="datetime-local" id="start" className="block w-full p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"/>
                                        </div>
                                        <div className="col-span-2">
                                            <label htmlFor="end" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tanggal Selesai</label>
                                            <input type="datetime-local" id="end" className="block w-full p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"/>
                                        </div>
                                        <div className="col-span-2">
                                            <label htmlFor="location" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Lokasi</label>
                                            <input type="text" id="location" className="block w-full p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Lokasi Event"/>
                                        </div>
                                        <div className="col-span-2">
                                            <label htmlFor="content" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Deskripsi</label>
                                            <textarea id="content" className="block w-full p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Deskripsi Event"></textarea>
                                        </div>
                                        <div className="col-span-2">
                                            <label htmlFor="link" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Link</label>
                                            <input type="text" id="link" className="block w-full p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Link Event"/>
                                        </div>
                                        <div className="col-span-2">
                                            <label htmlFor="kategori" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Kategori</label>
                                            <select id="kategori" className="block w-full p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                                <option value="1">Pendidikan</option>
                                                <option value="2">Budaya</option>
                                                <option value="3">Seni</option>
                                            </select>
                                        </div>
                                        <div className="flex justify-center space-x-2 mt-5">
                                            <button className="bg-jabarayaColors-500 hover:bg-jabarayaColors-700 text-white font-medium py-2 px-4 rounded" type="submit" form="schedule-form"> Simpan </button>
                                            <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-2 px-4 rounded" type="reset" form="schedule-form"> Batal</button>
                                        </div>
                                    </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col justify-between p-8 bg-white shadow-lg rounded-lg ring-1">
                            <div>
                                <h1>disini kalender event</h1>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}