import React from 'react'
import { useMovieContext } from './context/GlobalContext'
import MovieCard from './MovieCard'
import './Watched.css'


export default function Watched() {

  const MovieContext=useMovieContext()

  return (
    <div>
      <div className='watched'>
      <div className='container'>
        <div className='main-heading'>
          <h1>My Watched</h1>
          <span className='movies-count'>
          {MovieContext.watched.length}
            {MovieContext.watched.length===1 ? "Movie" :"Movies"}
          </span>
        </div>
        {MovieContext.watched.length>0 ? (
          <div className='movie-grid'>
            {MovieContext.watched.map((ele)=>(
              <MovieCard key={ele.imdbID} movie={ele} type="watched"/>
            ))}

          </div>
        ):<h2 className='no-movies'>No Movies In Your Watched , Add Some</h2>}
      </div>
      
    </div>
    </div>
  )
}
