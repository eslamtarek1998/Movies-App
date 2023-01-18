import React from 'react'
import './MovieCard.css'
import MovieControls from './MovieControls'

export default function MovieCard(props) {
  return (
    <div className='movie-card'>
        <div className='overlay'></div>
            {props.movie.Poster ? (<img src={props.movie.Poster} alt={props.movie.Title}/>)
            :(<div className='filter-poster'></div>)}
            <MovieControls movie={props.movie} type={props.type}/>
        
      
    </div>
  )
}
