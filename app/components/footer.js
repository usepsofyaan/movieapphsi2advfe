"use client"; // app router Next.js
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

export default function Footer() {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const genreList = ["Aksi", "Anak-anak", "Anime", "Britania", "Drama", "Fantasi Ilmiah", "Kejahatan", "Kdrama", "Komedi", "Petualangan", "Perang", "Romantis", "Sains & Alam"];
  const bantuanList = ["FAQ", "Kontak Kami", "Privasi", "Syarat dan Ketentuan"];
  return (
    <footer className="bg-[#181A1C] text-white p-[20px] md:py-[60px] md:px-[80px] border-t border-gray-700">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 p-[20px]">
        {/*Kolom 1 Logo + Hak Cipta */}
        <div className="min-w-0 mb-[20px]">
          <div className="mb-4 gap-[40px] md:gap-[26px] w-[28px] h-[25px] md:w-[50px] md:h-[44px]">
            <Image src="/logo.png" alt="Logo" width={100} height={40} />
          </div>
          <p className="text-gray-400 text-[12px] md:text-[16px] mt-[12px] md:mt-[26px]">© 2025 Chill All rights reserved.</p>
        </div>

        {/* Kolom 2: Genre */}
        <div className="min-w-0">
          {/*Toggle Button (di mobile) */}
          <button onClick={() => setOpen(!open)} className="flex items-center justify-between w-full mb-3 md:hidden">
            <h3 className="text-[16px] font-medium">Genre</h3>
            {open ? <ChevronDownIcon className="w-5 h-5 text-white" /> : <ChevronRightIcon className="w-5 h-5 text-white" />}
          </button>

          {/* Mobile: dropdown */}
          {open && (
            <ul className="grid grid-cols-2 gap-x-6 gap-y-1 text-sm text-gray-300 md:hidden">
              {genreList.map((genre, idx) => (
                <li key={idx}>{genre}</li>
              ))}
            </ul>
          )}

          {/* Desktop*/}
          <div className="hidden md:block">
            <h3 className="text-[16px] font-bold mb-3">Genre</h3>
            <ul className="grid [grid-template-columns:repeat(4,minmax(100px,1fr))] gap-x-[28px] gap-y-[13px] text-sm text-gray-300">
              {genreList.map((genre, idx) => (
                <li key={idx}>{genre}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bantuan */}
        <div className="min-w-0 ">
          <button onClick={() => setOpen2(!open2)} className="flex items-center justify-between w-full mb-3 md:hidden">
            <h3 className="text-[16px] font-bold">Bantuan</h3>
            {open2 ? <ChevronDownIcon className="w-5 h-5 text-white" /> : <ChevronRightIcon className="w-5 h-5 text-white" />}
          </button>

          {open2 && (
            <ul className="grid grid-cols-2 gap-x-6 gap-y-1 text-sm text-gray-300 md:hidden">
              {bantuanList.map((genre, idx) => (
                <li key={idx}>{genre}</li>
              ))}
            </ul>
          )}

          <div className="hidden md:block md:ml-[250px]">
            <h3 className="text-[16px] font-bold mb-3">Bantuan</h3>
            <ul className="grid grid-cols-1 gap-y-[15px] text-sm text-gray-300">
              {bantuanList.map((genre, idx) => (
                <li key={idx}>{genre}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
