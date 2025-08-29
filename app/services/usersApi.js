import { supabase } from "../lib/supabase";

// Ambil user login + data tabel users
export const getCurrentUser = async () => {
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error) throw error;
  if (!user) return null;

  const { data: userData, error: dbError } = await supabase.from("users").select("*").eq("id", user.id).single();

  if (dbError) throw dbError;

  return { ...user, ...userData };
};

// Update profil (nama, email, password, avatar)
export const updateProfile = async (userId, formData, file) => {
  let avatarUrl = formData.avatar_url || null;

  // Upload avatar kalau ada file
  if (file) {
    const fileExt = file.name.split(".").pop();
    const fileName = `${userId}.${fileExt}`;
    const filePath = `${userId}/${fileName}`;

    const { error: uploadError } = await supabase.storage.from("avatars").upload(filePath, file, { upsert: true });

    if (uploadError) throw uploadError;

    const { data: urlData } = supabase.storage.from("avatars").getPublicUrl(filePath);

    avatarUrl = urlData.publicUrl;
  }

  // Update auth (email, password)
  const updates = {};
  if (formData.email) updates.email = formData.email;
  if (formData.password) updates.password = formData.password;

  if (Object.keys(updates).length > 0) {
    const { error: authError } = await supabase.auth.updateUser(updates);
    if (authError) throw authError;
  }

  // Update tabel users
  const { error: dbError } = await supabase.from("users").upsert(
    {
      id: userId,
      nama: formData.nama,
      email: formData.email,
      avatar_url: avatarUrl,
    },
    { onConflict: "id" }
  );

  if (dbError) throw dbError;

  return true;
};
