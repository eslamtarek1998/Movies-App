import React from 'react'
import './MovieControls.css'
import { useMovieContext } from './context/GlobalContext'
import * as actions from './context/ActionTypes'

export default function MovieControls(props) {

    const MovieContext=useMovieContext()

  return (
    <div className='inner-card-controls'>
        
        {props.type==="watchlist" &&(
            <>
            <button className='ctrl-btn' onClick={()=>MovieContext.MoviesDispatch({
                type:actions.ADD_MOVIE_TO_WATCHED,
                payload:props.movie

            })}>
                <i className='fa-solid fa-eye'></i>
                </button>

            <button className='ctrl-btn' onClick={()=>MovieContext.MoviesDispatch({
                type:actions.REMOVE_MOVIE_FROM_WATCHLIST,
                payload:props.movie.imdbID
            })}>
                <i className='fa-fw fa fa-times'></i></button>
            </>
        )}


        {props.type==="watched" &&(
            <>
            <button className='ctrl-btn' onClick={()=>MovieContext.MoviesDispatch({
                type:actions.MOVIE_TO_WATCHLIST,
                payload:props.movie
            })}>
                <i className='fa-solid fa fa-eye-slash' >
                    </i></button>
            <button className='ctrl-btn' onClick={()=>MovieContext.MoviesDispatch({
                    type:actions.REMOVE_MOVIE_FROM_WATCHED,
                    payload:props.movie.imdbID
                })}>
                <i className='fa-fw fa fa-times'></i>
                </button>
            </>
        )}
      
    </div>
  )
}
