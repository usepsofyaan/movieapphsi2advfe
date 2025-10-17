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

  // limit display just 5 movies
  const displayMovies = movies.slice(0, 5);

  return (
    <div className="flex overflow-hidden gap-4">
      {movies.length === 0 ? (
        <p>Sedang memuat data film...</p>
      ) : (
        // one column for 5 movies
        <div className="grid grid-cols-5 gap-6 w-full overflow-x-auto">
          {displayMovies.map((movie) => (
            <div key={movie.id} className="rounded-lg overflow-hidden">
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="object-cover w-full h-[365px]" />
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
