import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/navbar";
import { InformationCircleIcon } from "@heroicons/react/24/outline";

export const metadata = {
  title: "Beranda",
  description: "...",
};

export default function Home() {
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
      <section>
        <h2 className="text-[32px]">Melanjutkan Tonton Film</h2>
      </section>
    </main>
  );
}
