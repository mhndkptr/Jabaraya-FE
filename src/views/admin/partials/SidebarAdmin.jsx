import { HiOutlineBookmarkAlt, HiOutlineFilm, HiOutlinePuzzle, HiOutlineServer, HiTemplate } from "react-icons/hi";
export function SidebarAdmin() {
  return (
    <aside
      id="logo-sidebar"
      className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-jabarayaColors-700 border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 pb-4 overflow-y-auto bg-jabarayaColors-700 dark:bg-gray-800">
        <ul className="space-y-2 font-medium">
          <li>
            <a href="/dashboard" className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-jabarayaColors-800 dark:hover:bg-gray-700 group">
              <HiTemplate className="w-5 h-5 text-white transition duration-75 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white" />
              <span className="ms-3">Dashboard</span>
            </a>
          </li>
          <li>
            <a href="/BeritaManajemen" className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-jabarayaColors-800 dark:hover:bg-gray-700 group">
              <HiOutlineBookmarkAlt className="w-5 h-5 text-white transition duration-75 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white" />
              <span className="flex-1 ms-3 whitespace-nowrap">Berita</span>
            </a>
          </li>
          <li>
            <a href="/ArtikelManajemen" className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-jabarayaColors-800 dark:hover:bg-gray-700 group">
              <HiOutlineBookmarkAlt className="w-5 h-5 text-white transition duration-75 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white" />
              <span className="flex-1 ms-3 whitespace-nowrap">Artikel</span>
            </a>
          </li>
          <li>
            <a href="/EventManajemen" className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-jabarayaColors-800 dark:hover:bg-gray-700 group">
              <HiOutlineFilm className="w-5 h-5 text-white transition duration-75 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white" />
              <span className="flex-1 ms-3 whitespace-nowrap">Event</span>
            </a>
          </li>
          <li>
            <a href="/CulturelManajemen" className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-jabarayaColors-800 dark:hover:bg-gray-700 group">
              <HiOutlinePuzzle className="w-5 h-5 text-white transition duration-75 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white" />
              <span className="flex-1 ms-3 whitespace-nowrap">Daftar Budaya</span>
            </a>
          </li>
          <li>
            <a href="/UserManajemen" className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-jabarayaColors-800 dark:hover:bg-gray-700 group">
              <svg
                className="flex-shrink-0 w-5 h-5 text-white transition duration-75 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 18"
              >
                <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
              </svg>
              <span className="flex-1 ms-3 whitespace-nowrap">Users</span>
            </a>
          </li>
          <li>
            <a href="/KategoriManajemen" className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-jabarayaColors-800 dark:hover:bg-gray-700 group">
              <HiOutlineServer className="w-5 h-5 text-white transition duration-75 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white" />
              <span className="flex-1 ms-3 whitespace-nowrap">Kategori</span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}
