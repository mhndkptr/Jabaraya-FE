import React from "react";

export default function Register() {
  return (
    <div className="flex h-auto rounded-lg shadow-lg">
    <div className="flex flex-col gap-4 p-5 bg-white rounded-l-lg w-80">
        <div className="flex flex-col items-center my-4">
            <label className="font-bold text-center text-[15px] text-[#2B2B2F] mb-2">Create an Account</label>
            <p className="text-center font-semibold text-[10px] text-[#5F5D6B] max-w-[80%]">Create your account in no time and enjoy our best online courses for free.</p>
        </div>
        <div className="relative flex flex-col gap-1">
            <svg className="absolute w-5 h-5 z-10 left-3 bottom-2.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 8.5L9.94202 10.2394C11.6572 11.2535 12.3428 11.2535 14.058 10.2394L17 8.5M2.01577 13.4756C2.08114 16.5412 2.11383 18.0739 3.24496 19.2094C4.37608 20.3448 5.95033 20.3843 9.09883 20.4634C11.0393 20.5122 12.9607 20.5122 14.9012 20.4634C18.0497 20.3843 19.6239 20.3448 20.7551 19.2094C21.8862 18.0739 21.9189 16.5412 21.9842 13.4756C22.0053 12.4899 22.0053 11.5101 21.9842 10.5244C21.9189 7.45886 21.8862 5.92609 20.7551 4.79066C19.6239 3.65523 18.0497 3.61568 14.9012 3.53657C12.9607 3.48781 11.0393 3.48781 9.09882 3.53656C5.95033 3.61566 4.37608 3.65521 3.24495 4.79065C2.11382 5.92608 2.08114 7.45885 2.01576 10.5244C1.99474 11.5101 1.99475 12.4899 2.01577 13.4756Z" />
            </svg>
            <input id="email_field" className="w-auto h-10 pl-10 pr-3 rounded-md outline-none border border-gray-200 shadow-sm transition-all duration-300 focus:border-transparent focus:ring-2 focus:ring-blue-600" type="text" placeholder="name@mail.com" />
        </div>
        <div className="relative flex flex-col gap-1">
            <svg className="absolute w-5 h-5 z-10 left-3 bottom-2.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18 11.0041C17.4166 9.91704 16.273 9.15775 14.9519 9.0993C13.477 9.03404 11.9788 9 10.329 9C8.67911 9 7.18091 9.03404 5.70604 9.0993C3.95328 9.17685 2.51295 10.4881 2.27882 12.1618C2.12602 13.2541 2 14.3734 2 15.5134C2 16.6534 2.12602 17.7727 2.27882 18.865C2.51295 20.5387 3.95328 21.8499 5.70604 21.9275C6.42013 21.9591 7.26041 21.9834 8 22M6 9V6.5C6 4.01472 8.01472 2 10.5 2C12.9853 2 15 4.01472 15 6.5V9M21.2046 15.1045L20.6242 15.6956V15.6956L21.2046 15.1045ZM21.4196 16.4767C21.7461 16.7972 22.2706 16.7924 22.5911 16.466C22.9116 16.1395 22.9068 15.615 22.5804 15.2945L21.4196 16.4767ZM18.0228 15.1045L17.4424 14.5134V14.5134L18.0228 15.1045ZM18.2379 18.0387C18.5643 18.3593 19.0888 18.3545 19.4094 18.028C19.7299 17.7016 19.7251 17.1771 19.3987 16.8565L18.2379 18.0387ZM14.2603 20.7619C13.7039 21.3082 12.7957 21.3082 12.2394 20.7619L11.0786 21.9441C12.2794 23.1232 14.2202 23.1232 15.4211 21.9441L14.2603 20.7619ZM12.2394 20.7619C11.6914 20.2239 11.6914 19.358 12.2394 18.82L11.0786 17.6378C9.86927 18.8252 9.86927 20.7567 11.0786 21.9441L12.2394 20.7619ZM12.2394 18.82C12.7957 18.2737 13.7039 18.2737 14.2603 18.82L15.4211 17.6378C14.2202 16.4587 12.2794 16.4587 11.0786 17.6378L12.2394 18.82ZM14.2603 18.82C14.8082 19.358 14.8082 20.2239 14.2603 20.7619L15.4211 21.9441C16.6304 20.7567 16.6304 18.8252 15.4211 17.6378L14.2603 18.82ZM20.6242 15.6956L21.4196 16.4767L22.5804 15.2945L21.785 14.5134L20.6242 15.6956ZM15.4211 18.82L17.8078 16.4767L16.647 15.2944L14.2603 17.6377L15.4211 18.82ZM18.0228 15.1045L20.6242 15.6956L21.785 14.5134L19.1835 13.9223L18.0228 15.1045ZM14.2603 15.6234C13.7694 15.1383 13.2306 15.1383 12.7397 15.6234L15.4211 18.82C15.9203 18.2971 15.9203 17.6849 15.4211 17.162L12.7397 15.6234ZM18.0228 18.0387L15.4211 20.7619L17.8078 18.82L20.4094 18.028L18.0228 18.0387Z" />
            </svg>
            <input id="password_field" className="w-auto h-10 pl-10 pr-3 rounded-md outline-none border border-gray-200 shadow-sm transition-all duration-300 focus:border-transparent focus:ring-2 focus:ring-blue-600" type="password" placeholder="password" />
        </div>
        <button className="w-auto h-10 text-center font-bold text-white rounded-md bg-[#5624d0] hover:bg-opacity-90 transition-all duration-300 shadow-md">Sign Up</button>
    </div>
    <div className="flex items-center justify-center flex-1 bg-cover bg-center rounded-r-lg" style={{ backgroundImage: "url('https://via.placeholder.com/150')" }}>
        <div className="flex flex-col items-center gap-1 p-3 w-full h-full bg-[#5f5d6bb3] rounded-r-lg">
            <label className="font-bold text-[18px] text-white text-center">E-learning Platform</label>
            <p className="text-[14px] text-white text-center font-semibold">Learn new skills online with top educators</p>
        </div>
    </div>
</div>
  );
}