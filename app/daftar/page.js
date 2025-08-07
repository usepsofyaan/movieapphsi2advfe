"use client";
import { useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { supabase } from "../lib/supabase";
import { useRouter } from "next/navigation";

export default function Daftar() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      setErrorMsg(error.message);
      return;
    }

    if (password !== confirmPassword) {
      setError("Kata sandi tidak cocok");
      return;
    }

    alert("Berhasil daftar! Silakan login.");
    router.push("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center p-[20px]" style={{ backgroundImage: "url('/backlogin.jpg')" }}>
      <div className="bg-[#181A1CD6] rounded-[8px] shadow-xl p-[24px] w-full max-w-md">
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <div className="flex flex-cols items-center">
            <Image src="/logo.png" alt="Logo" width={50} height={44} />
            <Link href="/page" className="md:inline text-[28px] md:text-[50px]">
              CHILL
            </Link>
          </div>
        </div>

        {/* Teks Selamat Datang */}
        <div className="text-center mb-6">
          <h3 className="text-[18px] md:text-[32px] font-bold text-[#ffffff] mb-[5px]">Daftar</h3>
          <h3 className="text-[18px] md:text-[32px] font-bold text-[#ffffff]">Selamat Datang Kembali</h3>
        </div>

        {/* Form Daftar */}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-1 font-medium text-[#ffffff]">Username</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full border border-[#E7E3FC3B] rounded-[24px] px-3 py-2 text-[#ffffff]" placeholder="Masukkan username" />
          </div>

          {/* Kata sandi*/}
          <div className="mb-4">
            <label className="block mb-1 font-medium text-[#ffffff]">Kata Sandi</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-[#E7E3FC3B] rounded-[24px] px-3 py-2 text-[#ffffff] pr-10 bg-transparent"
                placeholder="Masukkan kata sandi"
              />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white">
                {showPassword ? <EyeSlashIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
              </button>
            </div>
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-medium text-[#ffffff]">Konfirmasi Kata Sandi</label>
            <div className="relative">
              <input
                type={showPassword2 ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full border border-[#E7E3FC3B] rounded-[24px] px-3 py-2 text-[#ffffff] pr-10 bg-transparent"
                placeholder="Masukkan kata sandi"
              />
              <button type="button" onClick={() => setShowPassword2(!showPassword2)} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white">
                {showPassword2 ? <EyeSlashIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {/* Link Daftar & Lupa Sandi */}
          <div className="flex justify-between text-sm mb-4">
            <Link href="/login" className="text-[#ffffff]">
              Sudah punya akun? Masuk
            </Link>
          </div>

          {errorMsg && <p className="text-red-500">{errorMsg}</p>}

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
