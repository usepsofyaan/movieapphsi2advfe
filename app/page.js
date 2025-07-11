"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/navbar";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { InformationCircleIcon } from "@heroicons/react/24/outline";

const thumbnails = ["/film1.png", "/film2.png", "/film3.png", "/film4.png", "/film5.png", "/thumb6.jpg", "/thumb7.jpg", "/thumb8.jpg"];

const ITEMS_PER_PAGE = 4;

export default function Home() {
  const [startIndex, setStartIndex] = useState(0);

  const prev = () => {
    setStartIndex((prev) => Math.max(prev - 1, 0));
  };

  const next = () => {
    setStartIndex((prev) => Math.min(prev + 1, thumbnails.length - ITEMS_PER_PAGE));
  };

  const visibleItems = thumbnails.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  return (
    <main className="min-h-screen bg-[#121212] text-white">
      <Navbar />
      <div className="width-full flex">
        <div className="relative w-full h-[300px] md:h-[587px]">
          <Image src="/film1.png" alt="film1" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center px-4 md:px-20 py-8">
            <h2 className="text-xl md:text-3xl font-bold mb-4">Duty After School</h2>
            <p className="text-sm md:text-base mb-6 max-w-xl">Sebuah benda tak dikenal...</p>
            <div className="flex flex-wrap items-center gap-2">
              <button className="text-sm md:text-base px-4 py-2 rounded-full bg-white text-black">Mulai</button>
              <button className="text-sm md:text-base px-4 py-2 rounded-full bg-white text-black">Selengkapnya</button>
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
              <div key={index} className="w-[302px] h-[162px] flex-shrink-0 rounded-lg overflow-hidden">
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
              <div key={index} className="w-[302px] h-[162px] flex-shrink-0 rounded-lg overflow-hidden">
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
              <div key={index} className="w-[302px] h-[162px] flex-shrink-0 rounded-lg overflow-hidden">
                <Image src={src} alt={`Film ${startIndex + index + 1}`} width={302} height={162} className="object-cover w-full h-full" />
              </div>
            ))}
          </div>

          <button onClick={next} className="absolute right-[-20px] top-1/2 -translate-y-1/2 z-10 bg-black/60 text-white p-2 rounded-full hover:bg-black">
            <ChevronRightIcon className="w-5 h-5" />
          </button>
        </div>
      </section>
    </main>
  );
}
