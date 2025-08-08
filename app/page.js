"use client";
import { useState } from "react";
import Image from "next/image";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { InformationCircleIcon } from "@heroicons/react/24/outline";

const thumbnails = ["/film1.png", "/film2.png", "/film3.png", "/film4.png", "/film5.png", "/film10.png", "/film11.png", "/film13.png"];

const ITEMS_PER_PAGE = 4;
const ITEMS_SEC_1 = 5;

export default function Home() {
  const [startIndex, setStartIndex] = useState(0);
  const [hoverIndex, setHoverIndex] = useState(null);

  const prev = () => {
    setStartIndex((prev) => Math.max(prev - 1, 0));
  };

  const next = () => {
    setStartIndex((prev) => Math.min(prev + 1, thumbnails.length - ITEMS_PER_PAGE));
  };

  const visibleItems = thumbnails.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  const visibleItems2 = thumbnails.slice(startIndex, startIndex + ITEMS_SEC_1);
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

      {/* Melanjutkan Tonton Film */}
      <section className="px-4 md:px-20 py-[20px] md:py-[40px]">
        <h2 className="text-[20px] md:text-[32px] font-bold mb-4">Melanjutkan Tonton Film</h2>
        <div className="relative">
          {/* Tombol navigasi */}
          <button onClick={prev} className="absolute left-[-20px] top-1/2 -translate-y-1/2 z-10 bg-black/60 text-white p-2 rounded-full hover:bg-black">
            <ChevronLeftIcon className="w-5 h-5" />
          </button>

          <div className="flex overflow-hidden gap-4">
            {visibleItems.map((src, index) => (
              <div key={index} className="relative w-[302px] h-[162px] flex-shrink-0 rounded-lg overflow-hidden" onMouseEnter={() => setHoverIndex(index)} onMouseLeave={() => setHoverIndex(null)}>
                {/* Gambar utama */}
                <Image src={src} alt={`Film ${startIndex + index + 1}`} width={302} height={162} className="object-cover w-full h-full rounded-lg" />

                {/* Overlay teks */}
                <div className="absolute top-2 left-0 right-0 px-3 py-2 flex justify-between items-start text-white text-xs md:text-sm font-semibold z-10">
                  <span className="text-[14px] md:text-[18px]">Judul Film</span>
                  <span className="text-right text-[14px] md:text-[18px]">⭐ 8.5/10</span>
                </div>

                {/* Hover Preview (tampil di atas gambar utama) */}
              </div>
            ))}
            <div>
              {visibleItems.map((src, index) => (
                <div key={index}>
                  {hoverIndex === index && (
                    <div className="absolute -top-[200px] -left-[50px] w-[408px] bg-[#141414] rounded-lg z-50 shadow-xl p-4 flex flex-col gap-3 transition-all duration-200">
                      {/* Gambar Preview */}
                      <Image src={src} alt="Preview" width={408} height={230} className="object-cover rounded-md" />

                      {/* Tombol-tombol */}
                      <div className="flex items-center justify-between">
                        <div className="flex gap-2">
                          <button className="bg-white text-black w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-300">▶</button>
                          <button className="bg-neutral-700 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-neutral-600">✓</button>
                          <button className="bg-neutral-700 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-neutral-600">⌄</button>
                        </div>
                      </div>

                      {/* Info Tambahan */}
                      <div className="flex items-center gap-2 text-gray-300 text-sm">
                        <span className="border border-gray-400 px-2 py-[2px] rounded text-xs">13+</span>
                        <span>16 Episode</span>
                      </div>

                      {/* Genre */}
                      <div className="text-sm text-gray-400 flex gap-2">
                        <span>Misteri</span>
                        <span>•</span>
                        <span>Kriminal</span>
                        <span>•</span>
                        <span>Fantasi</span>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <button onClick={next} className="absolute right-[-20px] top-1/2 -translate-y-1/2 z-10 bg-black/60 text-white p-2 rounded-full hover:bg-black">
            <ChevronRightIcon className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Top Rating */}
      <section className="px-4 md:px-20 py-[20px] md:py-[40px]">
        <h2 className="text-[20px] md:text-[32px] font-bold mb-4">Top Rating Film dan Series Hari Ini</h2>
        <div className="relative">
          {/* Tombol navigasi */}
          <button onClick={prev} className="absolute left-[-20px] top-1/2 -translate-y-1/2 z-10 bg-black/60 text-white p-2 rounded-full hover:bg-black">
            <ChevronLeftIcon className="w-5 h-5" />
          </button>

          <div className="flex overflow-hidden gap-4">
            {visibleItems2.map((src, index) => (
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

      {/* Film Trending */}
      <section className="px-4 md:px-20 py-[20px] md:py-[40px]">
        <h2 className="text-[20px] md:text-[32px] font-bold mb-4">Film Trending</h2>
        <div className="relative">
          {/* Tombol navigasi */}
          <button onClick={prev} className="absolute left-[-20px] top-1/2 -translate-y-1/2 z-10 bg-black/60 text-white p-2 rounded-full hover:bg-black">
            <ChevronLeftIcon className="w-5 h-5" />
          </button>

          <div className="flex overflow-hidden gap-4">
            {visibleItems2.map((src, index) => (
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

      {/* Rilis Baru */}
      <section className="px-4 md:px-20 py-[20px] md:py-[40px]">
        <h2 className="text-[20px] md:text-[32px] font-bold mb-4">Rilis Baru</h2>
        <div className="relative">
          {/* Tombol navigasi */}
          <button onClick={prev} className="absolute left-[-20px] top-1/2 -translate-y-1/2 z-10 bg-black/60 text-white p-2 rounded-full hover:bg-black">
            <ChevronLeftIcon className="w-5 h-5" />
          </button>

          <div className="flex overflow-hidden gap-4">
            {visibleItems2.map((src, index) => (
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

      {/* footer */}
      <Footer />
    </main>
  );
}
