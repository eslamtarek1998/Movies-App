import React from 'react'
import './ResultCard.css'
import {useMovieContext} from './context/GlobalContext'
import * as actions from './context/ActionTypes'

export default function ResultCard(props) {

    const MovieContext=useMovieContext()
    const storedMovieWatchlist=MovieContext.watchlist.find((o)=>o.imdbID===props.movies.imdbID)
    const storedMovieWatched=MovieContext.watched.find((o)=>o.imdbID===props.movies.imdbID)
    const watchlistDisabled=storedMovieWatchlist ? true : storedMovieWatched ? true : false
    const watchedDisabled=storedMovieWatched ? true : false


  return (
    <div className='result-card'>


        <div className='poster-wrapper'>
            {props.movies.Poster ? <img src={props.movies.Poster} alt={props.movies.Title}/>
            :<div className='filter-poster'></div>
            }
        </div>


        <div className='info'>
            <div className='heading'>
                <h3 className='title'>{props.movies.Title}</h3>
                {props.movies.Year ? <h4 className='release-date'>{props.movies.Year}</h4>:"-"}
            </div>



        <div className='controls'>
            <button className='btn' disabled={watchlistDisabled} onClick={()=>

                MovieContext.MoviesDispatch({
                type:actions.ADD_MOVIE_TO_WATCHLIST,
                payload:props.movies

            })}>Add To Watchlist</button>


            <button className='btn btnn' disabled={watchedDisabled} onClick={()=>

            MovieContext.MoviesDispatch({
                type:actions.ADD_MOVIE_TO_WATCHED,
                payload:props.movies

            })}>Add To Watched</button>

            </div>
        </div>


        
      

    </div>
  )
}
