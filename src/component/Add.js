import React, { useEffect, useState } from 'react'
import './Add.css'
import axios from 'axios'
import ResultCard from './ResultCard'

export default function Add() {

    const[searchValue,setSearchValue]=useState("")
    const[movies,setMovies]=useState([])


    useEffect(()=>{
        axios.get(`https://www.omdbapi.com/?s=${searchValue}&apikey=2695c6e6`)
        .then((res)=>{
            if(res.data.Search){
                // console.log(res.data.Search)
                setMovies(res.data.Search)
            }
        })
        .catch((err)=>console.log(err))
    },[searchValue])


  return (
    <div className='add-page'>
      <div className='container'>
        <div className='add-content'>
            <div className='input-container'>
                <input onChange={(e)=>setSearchValue(e.target.value)} value={searchValue} type="text" placeholder='search for a movie' />
            </div>

           {movies.length > 0 &&  <ul className='results'> 
           {movies.map((ele)=><li key={ele.imdbID}>{<ResultCard movies={ele}/>}</li>  
          //            elmfrod nsmy elprop ele fo2k bzbt deh de movies msh movies 3shan hwa film wa7d bs y3ny blf wha5od film wa7d bs {ele}
          //            fa ent msln lma tb2a katb props.movies.title kda m3naha hant asm elfilm awo sorto awo snto whakza 
           )}   
           
            </ul>}


        </div>
      </div>
    </div>
  )
}
