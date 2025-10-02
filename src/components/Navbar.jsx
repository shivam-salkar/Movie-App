import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='bg-gray-900 flex flex-row items-center justify-around pl-2 pr-2 p-4'>
      <Link to="/">
        <span className='text-4xl text-gradient font-extrabold'>
          MovieDB
        </span>
      </Link>

      <Link to="/" className='text-4xl font-thin text-white hover:underline-offset-1-'>
        <span>
          Home
        </span>
      </Link>

      <Link to="/movies" className='text-4xl font-thin text-white'>
        <span>
          Movies
        </span>
      </Link>

      <Link to="/about" className='text-4xl font-thin text-white'>
        <span>
          About
        </span>
      </Link>

      <Link to="/search" className='text-4xl font-thin text-white'>
        <span>
          Search
        </span>
      </Link>
    </nav>
  )
}

export default Navbar 