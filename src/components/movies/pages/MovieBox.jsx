import React, { useContext, useState } from 'react'
import MoviesContext from '../context/MoviesContext.context';
import { RenderType } from '../models/RenderType.model.js'; 
import { Link } from 'react-router-dom';

export default function SearchedMovieBox(props) {
  
  const {id, title, releaseYear, overview, cast, renderType, directors, index} = props.movie;
  const { addedMovies, unaddMovie } = useContext(MoviesContext);

  const isAlreadyAdded = addedMovies.some((movie) => movie.movieId === id);
  const { addMovie, updateRating } = useContext(MoviesContext);

  const [showRatingInput, setShowRatingInput] = useState(false);
  const [newRating, setNewRating] = useState();

  const handleChange = (event) => {
    setNewRating(event.target.value);
    console.log("New Rating: ", event.target.value, newRating);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    updateRating(props.movie._id, newRating);
    
    setTimeout(() => setShowRatingInput(false), 10);
  } 
  
  //  console.log({...props.movie});
  // if (renderType === RenderType.addedMovie){
  //   console.log("Added ID: ", props.movie._id);
  //   console.log("Added MovieID: ", props.movie.movieId);
  // }

  return (
     <div className={renderType === RenderType.addedMovie ? 'searched-movie added-movie' : 'searched-movie'}>
        <div className='movie-box-buttons'>
          {renderType === RenderType.addedMovie  && <Link to={`/movie/${props.movie._id}`} className='movie-details-link'>i</Link>}
          {renderType === RenderType.addedMovie  && <span className="index-span" style={{backgroundColor : index === 0 ? "gold" : index === 1 ? "silver" : index === 2 ? "#cd7f32" : "rgb(251, 75, 16)"}}>{index + 1}</span>}
          {
            isAlreadyAdded
            ? <p>Already Added</p>
            : renderType === RenderType.searchedMovie 
            ? <button onClick={() => addMovie({movieId: id, title, releaseYear, verticalPoster: props.movie.imageSet.verticalPoster.w720, overview, cast, directors})} className='plus-button'>+</button> 
            : renderType === RenderType.addedMovie 
            ? <button onClick={() => unaddMovie(props.movie._id)} className={'minus-button'}>-</button>
            : <p>?</p>
          }
        </div>

        <h2>{title} ({releaseYear})</h2>
        {renderType === RenderType.searchedMovie ? <img src={props.movie.imageSet.verticalPoster.w720} alt={`${title} poster`} /> : <img src={props.movie.verticalPoster} alt={`${title} poster`} />}
        {
          renderType === RenderType.addedMovie && 
          <div className='movie-box-rating'>
            <div onClick={() => setShowRatingInput(true)}>
              {!!showRatingInput ? 
                <form onSubmit={handleSubmit}>
                  <input className="rating-input" type="number" max={10} min={0} step={0.1} value={newRating} onChange={handleChange}/> 
                  <button type="submit" style={{display: "none"}} tabIndex={-1}></button>
                </form>
                : <span>{props.movie.rating} </span>
              }
            </div>/10
          </div>
        }
    </div>
  )
}
