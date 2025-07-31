// app/api/signup/route.js
export async function POST(req) {
  const body = await req.json();
  const { username, password } = body;

  console.log("Data masuk:", { username, password });

  // Di sini kamu bisa simpan ke database atau validasi dll
  return new Response(JSON.stringify({ message: "Akun berhasil dibuat" }), {
    status: 201,
    headers: { "Content-Type": "application/json" },
  });
}
