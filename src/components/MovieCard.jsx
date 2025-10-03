import React from 'react'

const MovieCard = ({movie}) => {
  return (
    <div className='movie-card flex flex-col items-center m-3'>

      <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className='p-6'/>

      {/* <p key={movie.id} className='text-white'>{movie.title}</p> */}
      <div className='flex flex-col '>
        <p key={movie.id} className='text-white text-[16px] font-bold mt-2 mb-2'>{movie.title}</p>

        <div>
          <p className='text-[12px] text-gray-500'>{ movie.overview ?  movie.overview.split(' ').slice(0, 25).join(" "):"N/A"}. . . </p>
        </div>

        <div className='flex flex-row mt-2'>
          <img src="https://img.icons8.com/stickers/100/star--v1.png" alt="" className='w-4 h-4' />       
          <p className='text-gray-500 text-sm ml-2'>{movie.vote_average.toFixed(1)}</p>
          <p className='text-gray-500 text-sm ml-3'>{movie.release_date ? movie.release_date.split('-')[0]:'N/A'}</p>
        </div>

      </div>

    </div>
  )
}

export default MovieCard