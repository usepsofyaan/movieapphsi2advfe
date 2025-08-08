"use client";
import { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Profil() {
  const [preview, setPreview] = useState(null);
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    password: "",
  });

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Cek ukuran maksimal 2MB
    if (file.size > 2 * 1024 * 1024) {
      alert("Ukuran file maksimal 2MB");
      return;
    }

    setPreview(URL.createObjectURL(file));
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Data yang disimpan:", formData);
    alert("Data profil berhasil disimpan");
  };

  return (
    <>
      <Navbar />
      <div className="max-w-3xl mx-auto p-6">
        {/* Section 1 */}
        <h1 className="text-2xl font-bold mb-6">Profil Saya</h1>

        <div className="flex items-center mb-6">
          <img
            src={preview || "/avatar.png"} // default jika belum upload
            alt="Foto Profil"
            className="w-[140px] h-[140px] rounded-full object-cover border"
          />
          <div className="ml-4">
            <label className="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer">
              Upload Foto
              <input type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
            </label>
            <p className="text-sm text-gray-500 mt-1">Maksimal 2MB</p>
          </div>
        </div>

        {/* Form Edit Data */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Nama Pengguna</label>
            <input type="text" name="nama" value={formData.nama} onChange={handleChange} className="w-full border rounded px-3 py-2" placeholder="Masukkan nama pengguna" />
          </div>

          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full border rounded px-3 py-2" placeholder="Masukkan email" />
          </div>

          <div>
            <label className="block mb-1 font-medium">Password</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} className="w-full border rounded px-3 py-2" placeholder="Masukkan password" />
          </div>

          <button type="submit" className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600">
            Simpan
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}
