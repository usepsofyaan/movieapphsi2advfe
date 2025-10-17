"use client"; // app router Next.js
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { UserIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="flex items-center justify-between px-[20px] py-[6px] md:px-[80px] md:py-[25px] bg-[#181A1C] text-white">
      {/* Logo dan Menu */}
      <div className="flex flex-row items-center gap-[12px] md:flex-row md:gap-[80px]">
        <div className="flex flex-column items-center">
          <Image src="/logo.png" alt="Logo" width={30} height={26} />
          <Link href="/page" className="font-londrina hidden md:inline text-[32px]">
            CHILL
          </Link>
        </div>

        <Link href="/api/movies" className="hover:underline text-[10px] md:text-[18px] font-medium">
          Series
        </Link>
        <Link href="/api/movies" className="hover:underline text-[10px] md:text-[18px] font-medium">
          Film
        </Link>
        <Link href="/api/movies" className="hover:underline text-[10px] md:text-[18px] font-medium">
          Daftar Saya
        </Link>
      </div>

      {/*Akun Saya */}
      <div className="relative">
        {/* Avatar + Chevron dalam satu button */}
        <button onClick={() => setOpen(!open)} className="flex items-center gap-2 px-2 py-1 rounded-full">
          <Image src="/avatar.png" alt="Avatar" width={40} height={40} className="object-cover w-[20px] h-[20px] md:w-[40px] md:h-[40px] rounded-full" />
          <ChevronDownIcon className="w-5 h-5 text-white" />
        </button>

        {/* Dropdown */}
        {open && (
          <div className="absolute right-0 mt-2 w-[113px] md:w-[200px] bg-[#181A1C] text-white rounded-[4px] shadow-lg z-50">
            <Link href="/login" className="flex items-center gap-2 px-4 py-2 rounded-lg hover:text-blue-500 transition-colors duration-200">
              <UserIcon className="h-5 w-5" />
              Profil Saya
            </Link>
            <Link href="/daftar" className="flex items-center gap-2 px-4 py-2 rounded-lg hover:text-blue-500 transition-colors duration-200">
              <Image src="/star.png" alt="star" width={16} height={16} />
              Ubah Premium
            </Link>
            <Link href="/daftar" className="flex items-center gap-2 px-4 py-2 rounded-lg hover:text-blue-500 transition-colors duration-200">
              <Image src="/login-variant.png" alt="signout" width={16} height={16} />
              Keluar
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
