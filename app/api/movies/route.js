export async function GET() {
  try {
    const apiKey = process.env.TMDB_API_KEY;

    const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=id-ID&page=1`);

    if (!res.ok) {
      return Response.json({ error: "Gagal mengambil data TMDB" }, { status: res.status });
    }

    const data = await res.json();
    return Response.json(data); // kirim ke client
  } catch (error) {
    console.error("Error fetch TMDB:", error);
    return Response.json({ error: "Terjadi kesalahan server" }, { status: 500 });
  }
}
