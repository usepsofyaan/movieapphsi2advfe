"use client"; // jika pakai app router Next.js
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="flex items-center justify-between px-[80px] py-[25px] bg-black text-white">
      {/* Logo dan Menu */}
      <div className="flex items-center gap-[80px]">
        <Image src="/logo.png" alt="Logo" width={103.55} height={44} />
        <Link href="/series" className="hover:underline font-[-18px] font-medium">
          Series
        </Link>
        <Link href="/film" className="hover:underline font-[-18px] font-medium">
          Film
        </Link>
        <Link href="/daftar-saya" className="hover:underline font-[-18px] font-medium">
          Daftar Saya
        </Link>
      </div>

      {/*Akun Saya */}
      <div className="relative">
        {/* Avatar + Chevron dalam satu button */}
        <button onClick={() => setOpen(!open)} className="flex items-center gap-2 px-2 py-1 rounded-full">
          <Image src="/avatar.png" alt="Avatar" width={40} height={40} className="object-cover w-10 h-10 rounded-full" />
          <ChevronDownIcon className="w-5 h-5 text-white" />
        </button>

        {/* Dropdown */}
        {open && (
          <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded-lg shadow-lg z-50">
            <Link href="/login" className="block px-4 py-2 hover:bg-gray-300 rounded-lg">
              Masuk
            </Link>
            <Link href="/daftar" className="block px-4 py-2 hover:bg-gray-300 rounded-lg">
              Daftar
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
