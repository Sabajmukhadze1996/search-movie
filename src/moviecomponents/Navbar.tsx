import React from 'react'
import { FaStar } from 'react-icons/fa'
import { BiCameraMovie } from 'react-icons/bi'
import { MovieData } from '../moviedata/MovieData'
import { MovieData2 } from '../moviedata/MovieData2'
import { useState } from 'react'
import './navbar.scss'
import './movies.scss'

const fullMovieArray = MovieData.concat(MovieData2)

interface NavbarProps {
    moviedata: string | number | object
    moviedata2: string | number | object
}

export const Navbar = (props: NavbarProps) => {

  const [searchMovie, setSearchMovie] = 
  useState<string | number | object | any>("")

  

  return (
<>
  <nav className="navbar bg-dark text-white px-5">
   <div className="container-fluid inner-div">
     <div className="logo-and-text">
         <BiCameraMovie className="movie-logo" />
         <span>Top 50 Movie</span>
     </div>
     <div className="input-div">
        <input 
        className="form-control me-2" 
        type="text" 
        placeholder="Search..." 
        autoFocus
        onChange={event => {setSearchMovie(event.target.value)}}
        />
      </div>
   </div>
  </nav>

  <div className="outer-movie-div pt-5">
      {fullMovieArray.filter((movie) => {
         if (searchMovie === "") {
            return movie
         } else if (movie.title.toLowerCase().includes(searchMovie.toLowerCase())) {
            return movie
         } 
      }).map((movie) => {
          return (
            <div key={movie.id} className="inner-movie-div">
               <img src={movie.img} className="movie-img"/>
               <h6 className="movie-title">{movie.title}</h6>
               <h6 className="release-year">({movie.release_year})</h6>
               <h6 className="movie-rating">
                 <FaStar style={{color: "#ffe135"}} />
                 {movie.rating} 
               </h6>
               <p>
                 {movie.description}
               </p>
               <small><span style={{color: "#ffe135"}}>Director </span> 
               -  {movie.director}
               </small>
               <br />
               <small><span style={{color: "#ffe135"}}>Stars </span> 
               -  {movie.stars}.
               </small>
               <div className="votes-and-gross">
                  <small>
                    <span style={{color: "#ffe135"}}>Votes:</span> {movie.votes}
                  </small>
                  <small>
                    <span style={{color: "#ffe135"}}>Gross:</span> {movie.gross}
                  </small>
               </div>
               <small style={{display: "flex", 
               justifyContent: "center", gap: "6px", marginTop: "1rem"}}>
                   <span style={{color: "#ffe135"}}>Top:
                   </span> {movie.top}
               </small>
            </div>
          )
      })}
    </div>
</>
  )
}


