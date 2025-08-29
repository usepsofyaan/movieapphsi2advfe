"use client";

import { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { getCurrentUser, updateProfile } from "../services/usersApi";

export default function Profil() {
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState(null);
  const [file, setFile] = useState(null);

  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    password: "",
    avatar_url: "",
  });

  // Ambil data user login + tabel users
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await getCurrentUser();
        if (user) {
          setUserId(user.id);
          setFormData({
            nama: user.nama || "",
            email: user.email || "",
            password: "",
            avatar_url: user.avatar_url || "",
          });
          setPreview(user.avatar_url || "/avatar.png");
        }
      } catch (err) {
        console.error("Gagal mengambil user:", err);
      }
    };
    fetchUser();
  }, []);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) return;

    if (selectedFile.size > 2 * 1024 * 1024) {
      alert("Ukuran file maksimal 2MB");
      return;
    }

    setFile(selectedFile);
    setPreview(URL.createObjectURL(selectedFile));
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userId) return;

    setLoading(true);
    try {
      await updateProfile(userId, formData, file);
      alert("Profil berhasil diperbarui!");
      setFormData((prev) => ({ ...prev, password: "" })); // kosongkan password setelah update
    } catch (error) {
      console.error(error);
      alert("Gagal menyimpan profil!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-[20px] md:text-[32px] font-bold mb-6">Profil Saya</h1>

        <div className="flex items-center mb-6">
          <img src={preview || "/avatar.png"} alt="Foto Profil" className="w-[140px] h-[140px] rounded-full object-cover border" />
          <div className="ml-4">
            <label className="px-4 py-2 text-[#3254FF] border border-[#3254FF] rounded-[48px] cursor-pointer">
              Ubah Foto
              <input type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
            </label>
            <p className="text-sm text-gray-500 mt-1">Maksimal 2MB</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Nama Pengguna</label>
            <input type="text" name="nama" value={formData.nama} onChange={handleChange} className="w-full border border-[#E7E3FC3B] rounded-[8px] px-3 py-2" placeholder="Masukkan nama pengguna" />
          </div>

          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full border border-[#E7E3FC3B] rounded-[8px] px-3 py-2" placeholder="Masukkan email" />
          </div>

          <div>
            <label className="block mb-1 font-medium">Password</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} className="w-full border border-[#E7E3FC3B] rounded-[8px] px-3 py-2" placeholder="Masukkan password baru" />
          </div>

          <button type="submit" disabled={loading} className={`px-6 py-2 rounded-[24px] text-white ${loading ? "bg-[#09147A] opacity-70 cursor-not-allowed" : "bg-[#09147A] hover:bg-[#09147A]/80"}`}>
            {loading ? "Menyimpan..." : "Simpan"}
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}
