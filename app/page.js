"use client";
import Navbar from "./components/navbar";
import Content from "./components/content";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#181A1C] text-white">
      <Navbar />
      <Content />
      <Footer />
    </main>
  );
}
