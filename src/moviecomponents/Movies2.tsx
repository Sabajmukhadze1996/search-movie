import React from "react"
import { MovieData2 } from "../moviedata/MovieData2"
import {FaStar} from 'react-icons/fa'
import './movies.scss';



export const Movies2: React.FC = () => {
  return (
    <>
      <div className="outer-movie-div">
      {MovieData2.map((movie) => {
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
