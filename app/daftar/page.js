"use client";
import { useState } from "react";
import Image from "next/image";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";

export default function Daftar() {
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/backlogin.jpg')" }}>
      <div className="bg-[#181A1CD6] rounded-xl shadow-xl p-6 w-full max-w-md">
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <Image src="/logo.png" alt="Logo" width={80} height={80} />
        </div>

        {/* Teks Selamat Datang */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-[#ffffff] mb-[5px]">Daftar</h2>
          <h5 className="text-2xl font-bold text-[#ffffff]">Selamat Datang</h5>
        </div>

        {/* Form Login */}
        <form>
          <div className="mb-4">
            <label className="block mb-1 font-medium text-[#ffffff]">Username</label>
            <input type="text" className="w-full border border-[#E7E3FC3B] rounded-[24px] px-3 py-2 text-[#ffffff]" placeholder="Masukkan username" />
          </div>

          {/* Kata sandi*/}
          <div className="mb-4">
            <label className="block mb-1 font-medium text-[#ffffff]">Kata Sandi</label>
            <div className="relative">
              <input type={showPassword ? "text" : "password"} className="w-full border border-[#E7E3FC3B] rounded-[24px] px-3 py-2 text-[#ffffff] pr-10 bg-transparent" placeholder="Masukkan kata sandi" />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white">
                {showPassword ? <EyeSlashIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
              </button>
            </div>
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-medium text-[#ffffff]">Konfirmasi Kata Sandi</label>
            <div className="relative">
              <input type={showPassword2 ? "text" : "password"} className="w-full border border-[#E7E3FC3B] rounded-[24px] px-3 py-2 text-[#ffffff] pr-10 bg-transparent" placeholder="Masukkan kata sandi" />
              <button type="button" onClick={() => setShowPassword2(!showPassword2)} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white">
                {showPassword2 ? <EyeSlashIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {/* Link Daftar & Lupa Sandi */}
          <div className="flex justify-between text-sm mb-4">
            <a href="/login" className="text-[#ffffff]">
              Sudah punya akun? Masuk
            </a>
            <a href="/lupa-password" className="text-[#ffffff]">
              Lupa kata sandi?
            </a>
          </div>

          {/* Tombol Masuk */}
          <button type="submit" className="w-full bg-[#3D4142] text-white py-2 border border-[#E7E3FC3B] rounded-[24px] font-semibold">
            Daftar
          </button>

          {/* Atau Masuk dengan Google */}
          <div className="text-center mt-4 text-sm text-gray-600">atau</div>
          <button type="button" className="w-full border border-[#E7E3FC3B] py-2 rounded-[24px] flex items-center justify-center hover:bg-gray-100">
            <Image src="/google.png" alt="Google" width={20} height={20} className="mr-2" />
            Daftar dengan Google
          </button>
        </form>
      </div>
    </div>
  );
}
