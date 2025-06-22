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
    const [movieApiLoading, setMovieApiLoading] = useState(false)


    const searchMovies = async (searchQuery) =>{
        setMovieApiLoading(true);
        setSearchedMovies([]);

        try{
            const resultAPI = await searchService.searchMovies({title : searchQuery});
       
            if (resultAPI) {
                setSearchedMovies(resultAPI);
                // console.log("Searched Movies: ", searchedMovies);
            }
        } catch (err){
                console.error("Movie search failed:", err);

        } finally {
            setMovieApiLoading(false);
        }
        
    }

    const getMovies = async (userId) => {
        const resultAPI =  await movieService.getMovies(userId);

        if (resultAPI.success){
            const sortedAddedMovies = resultAPI.result.sort((a, b) => b.rating -  a.rating );
            setAddedMovies(sortedAddedMovies);
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

    const updateRating = async (id, rating, userId) => {
        const resultAPI =  await movieService.updateRating(id, {rating});
        if (resultAPI.success){
            getMovies(userId);
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
        
        return addedMovies.map((movie, index) => (
        <SearchedMovieBox movie={{...movie, renderType, index}} key={movie.movieId} />
        ));
      }
      else if (renderType === RenderType.searchedMovie) {
        // return searchedMovies.map((movie, key) => (
        //   <div key={key} className='searched-movie'>
        //     <h2>{movie.title} ({movie.releaseYear})</h2>
        //     <img src={movie.imageSet.verticalPoster.w720} alt={`${movie.title} poster`} />
        //   </div>   
        
        //replaced for testing purposes (do not waste API calls)
        return searchedMovies.map((movie, index) => (
        <SearchedMovieBox movie={{...movie, renderType, index}} key={movie.id} />
        ));    
      }
    }


    
	return (
		<MoviesContext.Provider value={{searchedMovies, searchMovies, getMovies, addedMovies, addMovie, renderMovies, unaddMovie, getMovie, movie, updateRating, movieApiLoading}}>
			{children}
		</MoviesContext.Provider>
	);
};

export default MoviesContext;