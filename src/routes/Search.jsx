import React from 'react'

const Search = () => {
  return (
    <div className='flex flex-col items-center text-3xl text-white'>

      <h2 className='text-gradient text-4xl m-10'>Search through 3000+ movies online</h2>

      <div className="flex flex-row items-center justify-center m-5 mt-10 bg-[#0F0D23] p-5 rounded-4xl w-[700px]">
        <img src="./Search-Icon.svg" alt="Search Icon" className="w-10 h-10 p-2 mr-5" />
        <input
          type="search"
          placeholder="Search"
          className="focus:outline-0 bg-transparent text-white text-2xl flex-1"
        />
      </div>


    </div>
  )
}

export default Search 