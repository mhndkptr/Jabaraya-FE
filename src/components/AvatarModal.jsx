import React from "react";

export default function AvatarModal({ open, onClose, children }) {
  return (
    <>
      <div
        onClick={onClose}
        className={`
        fixed inset-0 flex justify-center items-center transition-colors
        ${open ? "visible bg-black/20" : "invisible"}
      `}
      >
        {/* modal */}
        <div
          onClick={(e) => e.stopPropagation()}
          className={`
          bg-white rounded-xl shadow p-6 xl:w-[45%] md:w-1/2 transition-all
          ${open ? "scale-100 opacity-100" : "scale-100 opacity-0"}
        `}
        >
          <button onClick={onClose} className="absolute top-6 right-6 lg:p-3 md:p-2.5 rounded-lg text-2xl text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600 jbDropShadow">
            <svg className="lg:w-5 lg:h-5 w-4 h-4" width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.33333 1.33496L19.6667 19.6683" stroke="black" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M19.6668 1.33496L1.33349 19.6683" stroke="black" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </button>

          {children}
        </div>
      </div>
    </>
  );
}
