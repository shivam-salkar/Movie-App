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

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMovies = async () => {
    setIsLoading(true);
    setErrorMessage("");

    try {
      const endPoint = `${API_BASE_URL}/discover/movie?sort_by=vote_count.desc`;

      const response = await fetch(endPoint, API_OPTIONS);

      if (!response.ok) {
        throw new Error("Failed to fetch movies");
      }

      const data = await response.json();

      if (!data.results) {
        setErrorMessage("No movies found");
        setMovieList([]);
        return;
      }

      setMovieList(data.results);
    } catch (error) {
      console.error(`Error fetching movies: ${error}`);
      setErrorMessage(`Error Fetching Movies...`);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="flex flex-col items-center text-3xl text-white w-full h-full bg-linear-to-b from-[#101828] to-[#1f3156]">
      <h2 className="text-gradient text-4xl m-10">
        Search through 3000+ movies online
      </h2>

      {/* Search Bar */}
      <div className="flex flex-row items-center justify-center m-5 mt-10 bg-[#0F0D23] p-5 rounded-4xl w-[700px]">
        <img
          src="./Search-Icon.svg"
          alt="Search Icon"
          className="w-10 h-10 p-2 mr-5"
        />
        <input
          type="search"
          placeholder="Search"
          className="focus:outline-0 bg-transparent text-white text-2xl flex-1"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* MOVIE SECTION */}
      <section className="all-movies flex flex-col items-center ">
        <h2 className="mt-5">All Movies</h2>

        {isLoading ? (
          <h1 className="text-white">Loading...</h1>
        ) : errorMessage ? (
          <h1 className="text-red-500">{errorMessage}</h1>
        ) : (
          <ul className="mt-10">
            {movieList.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </ul>
        )}
      </section>
    </div>
  );
};

export default Search;
