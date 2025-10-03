import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

const API_BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

const Movies = () => {
  const [favouriteMovies, setFavouriteMovies] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [romanceMovies, setRomanceMovies] = useState([]);
  const [indianMovies, setIndianMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        // All Time Favourites (most voted)
        const favRes = await fetch(
          `${API_BASE_URL}/discover/movie?sort_by=vote_count.desc`,
          API_OPTIONS
        );
        const favData = await favRes.json();
        setFavouriteMovies(favData.results || []);

        // Hot and Trending (most popular)
        const trendRes = await fetch(
          `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`,
          API_OPTIONS
        );
        const trendData = await trendRes.json();
        setTrendingMovies(trendData.results || []);

        // Romance Movies
        const romRes = await fetch(
          `${API_BASE_URL}/discover/movie?with_genres=10749&sort_by=vote_count.desc`,
          API_OPTIONS
        );
        const romData = await romRes.json();
        setRomanceMovies(romData.results || []);

        // Indian Movies (region=IN, language=hi)
        const indRes = await fetch(
          `${API_BASE_URL}/discover/movie?region=IN&with_original_language=hi&sort_by=vote_count.desc`,
          API_OPTIONS
        );
        const indData = await indRes.json();
        setIndianMovies(indData.results || []);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <section className="all-movies flex flex-col items-center bg-[#101828] text-white pb-30 p-10">
      {/* ALL TIME FAVOURITES */}
      <div className="w-full flex flex-col items-center animate-fade-up">
        <h2 className="mt-10 p-5 text-5xl">All Time Favourites !</h2>
        <ul className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {favouriteMovies.slice(0, 4).map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </ul>
      </div>

      {/* HOT AND TRENDING */}
      <div className="w-full flex flex-col items-center animate-fade-up">
        <h2 className="mt-10 p-5 text-5xl">Hot and Trending !</h2>
        <ul className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trendingMovies.slice(0, 4).map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </ul>
      </div>

      {/* ROMANCE */}
      <div className="w-full flex flex-col items-center animate-fade-up">
        <h2 className="mt-10 p-5 text-5xl">Top Romance !</h2>
        <ul className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {romanceMovies.slice(0, 4).map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </ul>
      </div>

      {/* INDIAN MOVIES */}
      <div className="w-full flex flex-col items-center animate-fade-up">
        <h2 className="mt-10 p-5 text-5xl">Top Indian Movies !</h2>
        <ul className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {indianMovies.slice(0, 4).map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Movies;
