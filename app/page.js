"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/navbar";
import { ChevronLeftIcon, ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import { InformationCircleIcon } from "@heroicons/react/24/outline";

const thumbnails = ["/film1.png", "/film2.png", "/film3.png", "/film4.png", "/film5.png", "/thumb6.jpg", "/thumb7.jpg", "/thumb8.jpg"];

const ITEMS_PER_PAGE = 4;

export default function Home() {
  const [startIndex, setStartIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const genreList = ["Aksi", "Anak-anak", "Anime", "Britania", "Drama", "Fantasi Ilmiah", "Kejahatan", "Kdrama", "Komedi", "Petualangan", "Perang", "Romantis", "Sains & Alam"];
  const bantuanList = ["FAQ", "Kontak Kami", "Privasi", "Syarat dan Ketentuan"];

  const prev = () => {
    setStartIndex((prev) => Math.max(prev - 1, 0));
  };

  const next = () => {
    setStartIndex((prev) => Math.min(prev + 1, thumbnails.length - ITEMS_PER_PAGE));
  };

  const visibleItems = thumbnails.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  return (
    <main className="min-h-screen bg-[#181A1C] text-white">
      <Navbar />
      <div className="width-full flex">
        <div className="relative w-full h-[300px] md:h-[500px]">
          <Image src="/film1.png" alt="film1" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#181A1C] via-transparent to-transparent" />
          <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center px-4 md:px-20 py-8">
            <h2 className="text-[24px] md:text-[48px] font-bold mb-4">Duty After School</h2>
            {/* Versi mobile (teks terpotong) */}
            <p className="text-[12px] mb-6 max-w-xl line-clamp-2 md:hidden">
              Sebuah benda tak dikenal mengambil alih dunia. Dalam keputusasaan, Departemen Pertahanan mulai merekrut lebih banyak tentara, termasuk siswa sekolah menengah. Mereka pun segera menjadi pejuang garis depan dalam perang.
            </p>

            {/* Versi desktop (teks lengkap) */}
            <p className="hidden md:block text-[18px] mb-6 max-w-xl">
              Sebuah benda tak dikenal mengambil alih dunia. Dalam keputusasaan, Departemen Pertahanan mulai merekrut lebih banyak tentara, termasuk siswa sekolah menengah. Mereka pun segera menjadi pejuang garis depan dalam perang.
            </p>

            <div className="flex flex-wrap items-center gap-2">
              <button className="text-[12px] md:text-[16px] px-[12px] py-[4px] md:px-[26px] md:py-[10px] rounded-full bg-[#0F1E93] text-white">Mulai</button>
              <button className="flex flex-cols text-[12px] md:text-[16px] px-[12px] py-[4px] md:py-[10px] md:px-[26px] rounded-full bg-[#22282A] text-white">
                <InformationCircleIcon className="w-[24px] h-[24px] px-[2px]" /> Selengkapnya
              </button>
              <button className="text-sm md:text-base p-[4px] md:p-[10px] border-[1px] rounded-[24px] text-[#C1C2C4]">18+</button>
            </div>
          </div>
        </div>
      </div>
      <section className="px-4 md:px-20 py-[20px] md:py-[40px]">
        <h2 className="text-[20px] md:text-[32px] font-bold mb-4">Melanjutkan Tonton Film</h2>
        <div className="relative">
          {/* Tombol navigasi */}
          <button onClick={prev} className="absolute left-[-20px] top-1/2 -translate-y-1/2 z-10 bg-black/60 text-white p-2 rounded-full hover:bg-black">
            <ChevronLeftIcon className="w-5 h-5" />
          </button>

          <div className="flex overflow-hidden gap-4">
            {visibleItems.map((src, index) => (
              <div key={index} className="relative w-[302px] h-[162px] flex-shrink-0 rounded-lg overflow-hidden">
                {/* Gambar */}
                <Image src={src} alt={`Film ${startIndex + index + 1}`} width={302} height={162} className="object-cover w-full h-full" />

                {/* Overlay teks */}
                <div className="absolute top-30 left-0 right-0 px-3 py-2 flex justify-between items-start text-white text-xs md:text-sm font-semibold">
                  <span className="text-[14px] md:text-[18px]">Judul Film</span>
                  <span className="text-right text-[14px] md:text-[18px]">⭐ 8.5/10</span>
                </div>
              </div>
            ))}
          </div>

          <button onClick={next} className="absolute right-[-20px] top-1/2 -translate-y-1/2 z-10 bg-black/60 text-white p-2 rounded-full hover:bg-black">
            <ChevronRightIcon className="w-5 h-5" />
          </button>
        </div>
      </section>
      <section className="px-4 md:px-20 py-[20px] md:py-[40px]">
        <h2 className="text-[20px] md:text-[32px] font-bold mb-4">Top Rating Film dan Series Hari Ini</h2>
        <div className="relative">
          {/* Tombol navigasi */}
          <button onClick={prev} className="absolute left-[-20px] top-1/2 -translate-y-1/2 z-10 bg-black/60 text-white p-2 rounded-full hover:bg-black">
            <ChevronLeftIcon className="w-5 h-5" />
          </button>

          <div className="flex overflow-hidden gap-4">
            {visibleItems.map((src, index) => (
              <div key={index} className="w-[95px] h-[145px] md:w-[234px] md:h-[365px] flex-shrink-0 rounded-lg overflow-hidden">
                <Image src={src} alt={`Film ${startIndex + index + 1}`} width={234} height={365} className="object-cover w-full h-full" />
                <span className="bg-white">Episode Baru</span>
              </div>
            ))}
          </div>

          <button onClick={next} className="absolute right-[-20px] top-1/2 -translate-y-1/2 z-10 bg-black/60 text-white p-2 rounded-full hover:bg-black">
            <ChevronRightIcon className="w-5 h-5" />
          </button>
        </div>
      </section>
      <section className="px-4 md:px-20 py-[20px] md:py-[40px]">
        <h2 className="text-[20px] md:text-[32px] font-bold mb-4">Film Trending</h2>
        <div className="relative">
          {/* Tombol navigasi */}
          <button onClick={prev} className="absolute left-[-20px] top-1/2 -translate-y-1/2 z-10 bg-black/60 text-white p-2 rounded-full hover:bg-black">
            <ChevronLeftIcon className="w-5 h-5" />
          </button>

          <div className="flex overflow-hidden gap-4">
            {visibleItems.map((src, index) => (
              <div key={index} className="w-[95px] h-[145px] md:w-[234px] md:h-[365px] flex-shrink-0 rounded-lg overflow-hidden">
                <Image src={src} alt={`Film ${startIndex + index + 1}`} width={302} height={162} className="object-cover w-full h-full" />
              </div>
            ))}
          </div>

          <button onClick={next} className="absolute right-[-20px] top-1/2 -translate-y-1/2 z-10 bg-black/60 text-white p-2 rounded-full hover:bg-black">
            <ChevronRightIcon className="w-5 h-5" />
          </button>
        </div>
      </section>
      <section className="px-4 md:px-20 py-[20px] md:py-[40px]">
        <h2 className="text-[20px] md:text-[32px] font-bold mb-4">Rilis Baru</h2>
        <div className="relative">
          {/* Tombol navigasi */}
          <button onClick={prev} className="absolute left-[-20px] top-1/2 -translate-y-1/2 z-10 bg-black/60 text-white p-2 rounded-full hover:bg-black">
            <ChevronLeftIcon className="w-5 h-5" />
          </button>

          <div className="flex overflow-hidden gap-4">
            {visibleItems.map((src, index) => (
              <div key={index} className="w-[95px] h-[145px] md:w-[234px] md:h-[365px] flex-shrink-0 rounded-lg overflow-hidden">
                <Image src={src} alt={`Film ${startIndex + index + 1}`} width={302} height={162} className="object-cover w-full h-full" />
              </div>
            ))}
          </div>

          <button onClick={next} className="absolute right-[-20px] top-1/2 -translate-y-1/2 z-10 bg-black/60 text-white p-2 rounded-full hover:bg-black">
            <ChevronRightIcon className="w-5 h-5" />
          </button>
        </div>
      </section>
      <footer className="bg-[#181A1C] text-white p-[20px] md:px-[80px] py-10">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-[8px] p-[20px]">
          {/*Logo + Hak Cipta */}
          <div>
            <div className="mb-4 gap-[40px] md:gap-[26px] w-[28px] h-[25px] md:w-[50px] md:h-[44px]">
              <Image src="/logo.png" alt="Logo" width={100} height={40} />
            </div>
            <p className="text-gray-400 text-[12px] md:text-[16px] mt:[12px] md:mt-[26px]">© 2025 Chill All rights reserved.</p>
          </div>

          {/* Kolom 2: Genre */}
          <div>
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
            <div className="hidden md:block md:gap-x-[28px]">
              <h3 className="text-lg font-semibold mb-3">Genre</h3>
              <ul className="grid [grid-template-columns:repeat(4,minmax(120px,1fr))] gap-x-[28px] gap-y-[13px] text-sm text-gray-300">
                {genreList.map((genre, idx) => (
                  <li key={idx}>{genre}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Kolom 3: Bantuan */}
          <div>
            <button onClick={() => setOpen2(!open2)} className="flex items-center justify-between w-full mb-3 md:hidden">
              <h3 className="text-[16px] font-medium">Bantuan</h3>
              {open2 ? <ChevronDownIcon className="w-5 h-5 text-white" /> : <ChevronRightIcon className="w-5 h-5 text-white" />}
            </button>

            {open2 && (
              <ul className="grid grid-cols-2 gap-x-6 gap-y-1 text-sm text-gray-300 md:hidden">
                {bantuanList.map((genre, idx) => (
                  <li key={idx}>{genre}</li>
                ))}
              </ul>
            )}

            <div className="hidden md:block">
              <h3 className="text-lg font-semibold">Bantuan</h3>
              <ul className="grid grid-cols gap-y-[15px] text-sm text-gray-300">
                {bantuanList.map((genre, idx) => (
                  <li key={idx}>{genre}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
