"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMovies } from "../store/redux/movieSlice";

export default function MoviesPage() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movie.movies);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await fetch("/api/movies");
        const data = await res.json();
        dispatch(setMovies(data.results));
      } catch (error) {
        console.error("Gagal mengambil data movie:", error);
      }
    };

    fetchMovies();
  }, [dispatch]);

  return (
    <div className="max-w-6xl mx-auto p-6">
      {movies.length === 0 ? (
        <p>Sedang memuat data film...</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {movies.map((movie) => (
            <div key={movie.id} className="border rounded-lg overflow-hidden shadow">
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="w-full h-[300px] object-cover" />
              <div className="p-3">
                <h2 className="text-lg font-semibold">{movie.title}</h2>
                <p className="text-sm text-gray-500">Rating: {movie.vote_average.toFixed(1)}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
