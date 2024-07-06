import React from "react";

export default function Register() {
    return (
        <section className="min-h-screen flex items-center justify-center">
            <div className="grid md:grid-cols-2 w-full">
                <div className="flex flex-col items-center justify-center bg-loginRegister-gradient py-10 px-5 md:py-24">
                    <div className="max-w-lg w-full bg-white border rounded-xl p-5 md:p-10">
                        <h1 className="text-l font-bold mb-5 md:text-5xl">Daftarin akun kamu</h1>
                        <form className="mb-4" name="wf-form-password" method="get">
                            <div className="relative mb-4">
                                <label className="block text-left">Nama</label>
                                <input type="text" className="block w-full border rounded-xl bg-white px-3 py-2 text-sm text-black" name="name" placeholder="Masukan Nama" required />
                            </div>
                            <div className="relative mb-4">
                                <label className="block text-left">Email</label>
                                <input type="email" className="block w-full border rounded-xl bg-white px-3 py-2 text-sm text-black" name="email" placeholder="Masukan Email Kamu" required />
                            </div>
                            <div className="relative mb-4">
                                <label className="block text-left">Nomor Telepon</label>
                                <input type="number" className="block w-full border rounded-xl bg-white px-3 py-2 text-sm text-black" name="phone" placeholder="Masukan Nomor Telepon" required />
                            </div>
                            <div className="relative mb-4">
                                <label className="block text-left">Password</label>
                                <input type="password" className="block w-full border rounded-xl bg-white px-3 py-2 text-sm text-black" placeholder="Masukan Password" required />
                            </div>
                            <div className="relative mb-4">
                                <label className="block text-left">Konfirmasi Password</label>
                                <input type="password" className="block w-full border rounded-xl bg-white px-3 py-2 text-sm text-black" placeholder="Konfirmasi Password" required />
                            </div>
                            <label className="mb-6 flex items-center">
                                <input type="checkbox" name="checkbox" />
                                <span className="ml-4 inline-block cursor-pointer text-sm">I agree with the <a href="#" className="font-bold text-[#0b0b1f]">Terms &amp; Conditions</a></span>
                            </label>
                            <button type="submit" className="block w-full bg-jabarayaColors-700 text-white font-bold text-sm py-3 rounded-xl">Daftarkan</button>
                        </form>
                        <p className="text-sm text-slate-500">Sudah Punya Akun? <a href="Login" className="text-sm font-bold text-black">Login disini</a></p>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center bg-white py-10 px-5 md:py-24">
                    <div className="max-w-lg w-full">
                        <div className="w-full rounded overflow-hidden bg-white shadow-lg p-6">
                            <h1 className="font-bold text-2xl text-center mb-5">JABARAYA</h1>
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl text-center mb-5">Buat Profile Kamu</div>
                                <img src="https://randomuser.me/api/portraits/lego/2.jpg" alt="profile" className="w-32 h-32 mx-auto rounded-full ring-4" />
                                <button className="block w-full bg-jabarayaColors-700 text-white font-bold text-sm py-3 rounded-xl mt-4">Atur Profile</button>
                            </div>
                        </div>                    
                    </div>
                </div>
            </div>
        </section>
    );
}
