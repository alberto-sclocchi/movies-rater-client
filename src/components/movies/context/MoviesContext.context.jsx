import { createContext, useState } from "react";
import SearchMoviesService from "../service/MoviesSearchService";
import {MoviesArray} from "../models/Movies.model.js"
import MoviesService from "../service/MoviesService.js";
import SearchedMovieBox from "../pages/MovieBox.jsx";
import { RenderType } from "../models/RenderType.model.js";

const MoviesContext = createContext({});
const searchService = new SearchMoviesService();
const movieService = new MoviesService();

export const MoviesProvider = ({ children }) => {

    const [searchedMovies, setSearchedMovies] = useState([]);
    const [addedMovies, setAddedMovies] = useState([]);
    const [movie, setMovie] = useState(null)

    const searchMovies = async (searchQuery) =>{
        const resultAPI = await searchService.searchMovies({title : searchQuery});
       
        if (resultAPI) {
            setSearchedMovies(resultAPI);
            // console.log("Searched Movies: ", searchedMovies);
        }
    }

    const getMovies = async () => {
        const resultAPI =  await movieService.getMovies();

        if (resultAPI.success){
            setAddedMovies(resultAPI.result);
            // console.log("Added Movies: ", addedMovies);
        }
    }

    const addMovie = async (movie) => {
        const resultAPI =  await movieService.addMovie(movie);

        if (resultAPI.success){
            setAddedMovies((prevState) => [...prevState, resultAPI.result]);
            // console.log("Added Movies: ", addedMovies);
        }
    }

    const unaddMovie = async (id) => {
        const resultAPI =  await movieService.unaddMovie(id);  
        if (resultAPI.success){ 
            setAddedMovies((prevState) => prevState.filter((movie) => movie._id !== id));
            // console.log("Added Movies: ", addedMovies);
        }
    }   
    
    const getMovie = async (id) => {
        const resultAPI =  await movieService.getMovie(id);
        if (resultAPI.success){
            setMovie(resultAPI.result);
            console.log("Movie Details: ", resultAPI.result);
        }
    }



    const renderMovies = (renderType) => {
      if (renderType === RenderType.addedMovie) {
        // return searchedMovies.map((movie, key) => (
        //   <div key={key} className='searched-movie'>
        //     <h2>{movie.title} ({movie.releaseYear})</h2>
        //     <img src={movie.imageSet.verticalPoster.w720} alt={`${movie.title} poster`} />
        //   </div>   
        
        //replaced for testing purposes (do not waste API calls)
        return addedMovies.map((movie) => (
        <SearchedMovieBox movie={{...movie, renderType}} key={movie.movieId} />
        ));
      }
      else if (renderType === RenderType.searchedMovie) {
        // return searchedMovies.map((movie, key) => (
        //   <div key={key} className='searched-movie'>
        //     <h2>{movie.title} ({movie.releaseYear})</h2>
        //     <img src={movie.imageSet.verticalPoster.w720} alt={`${movie.title} poster`} />
        //   </div>   
        
        //replaced for testing purposes (do not waste API calls)
        return searchedMovies.map((movie) => (
        <SearchedMovieBox movie={{...movie, renderType}} key={movie.id} />
        ));    
      }
    }


    
	return (
		<MoviesContext.Provider value={{searchedMovies, searchMovies, getMovies, addedMovies, addMovie, renderMovies, unaddMovie, getMovie, movie}}>
			{children}
		</MoviesContext.Provider>
	);
};

export default MoviesContext;