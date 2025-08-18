"use client";
import { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { supabase } from "../lib/supabase";

export default function Profil() {
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [file, setFile] = useState(null);

  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    password: "",
  });

  // Ambil data user login
  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (user) {
        setUser(user);

        // Ambil data dari tabel users
        const { data } = await supabase.from("users").select("*").eq("id", user.id).single();

        if (data) {
          setFormData({
            nama: data.nama || "",
            email: data.email || user.email,
            password: "",
          });
          setPreview(data.avatar_url || "/avatar.png");
        }
      }
    };
    getUser();
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
    if (!user) return;

    setLoading(true);
    try {
      let avatarUrl = preview;

      // Upload foto baru jika ada
      if (file) {
        const fileExt = file.name.split(".").pop();
        const fileName = `${user.id}.${fileExt}`;
        const filePath = `${user.id}/${fileName}`;

        const { error: uploadError } = await supabase.storage.from("avatars").upload(filePath, file, { upsert: true });

        if (uploadError) throw uploadError;

        const { data: publicUrl } = supabase.storage.from("avatars").getPublicUrl(filePath);

        avatarUrl = publicUrl.publicUrl;
      }

      // Update email & password di Auth
      const updates = {};
      if (formData.email && formData.email !== user.email) {
        updates.email = formData.email;
      }
      if (formData.password) {
        updates.password = formData.password;
      }
      if (Object.keys(updates).length > 0) {
        const { error: authError } = await supabase.auth.updateUser(updates);
        if (authError) throw authError;
      }

      // Update tabel users
      const { error: dbError } = await supabase.from("users").upsert({
        id: user.id,
        nama: formData.nama,
        email: formData.email,
        avatar_url: avatarUrl,
      });

      if (dbError) throw dbError;

      alert("Profil berhasil diperbarui!");
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
        <h1 className="text-[20px] md-text-[32px] font-bold mb-6">Profil Saya</h1>

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

          <button type="submit" disabled={loading} className={`px-6 py-2 rounded-[24px] text-white ${loading ? "bg-[#09147A]" : "bg-[#09147A] hover:bg-[#09147A]-600"}`}>
            {loading ? "Menyimpan..." : "Simpan"}
          </button>
        </form>

        <div className="bg-[#3D4142] rounded-[12px]">
          <h1 className="text-black">Saat ini anda belum berlangganan</h1>
        </div>
      </div>
      <Footer />
    </>
  );
}
