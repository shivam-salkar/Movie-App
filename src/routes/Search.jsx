import React, { useEffect, useState } from 'react'

const API_BASE_URL = 'https://api.themoviedb.org/3/discover/movie'
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`
  }
}


const Search = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const fetchMovies  = async()=> {
    try {

      const endPoint = `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;

      const response = await fetch(endPoint, API_OPTIONS);

      throw new Error('Failed to fetch movies')

    } catch(error){
      console.error(`Error fetching movies: ${error}`);
      setErrorMessage(`Error Fetching Movies...`);
    }
  }

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className='flex flex-col items-center text-3xl text-white'>

      <h2 className='text-gradient text-4xl m-10'>Search through 3000+ movies online</h2>

       {/* Search Bar */}
      <div className="flex flex-row items-center justify-center m-5 mt-10 bg-[#0F0D23] p-5 rounded-4xl w-[700px]">
        <img src="./Search-Icon.svg" alt="Search Icon" className="w-10 h-10 p-2 mr-5" />
        <input
          type="search"
          placeholder="Search"
          className="focus:outline-0 bg-transparent text-white text-2xl flex-1"
        />
      </div>


      <section className='all-movies'>
      
        <h2>All Movies</h2>
        {errorMessage && <p className='text-red-500'>{errorMessage}</p>}
      
      </section>

    </div>
  )
}

export default Search 