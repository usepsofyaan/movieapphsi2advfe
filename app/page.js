import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#121212] text-white">
      <Navbar />
      <div className="p-8">
        <h1 className="text-2xl font-bold">Selamat datang di halaman beranda!</h1>
        {/* Tambahkan konten beranda di sini */}
      </div>
    </main>
  );
}
