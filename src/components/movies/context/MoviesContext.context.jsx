import { createContext, useState } from "react";
import SearchMoviesService from "../service/MoviesSearchService";

const MoviesContext = createContext({});
const service = new SearchMoviesService();

export const MoviesProvider = ({ children }) => {

    const [searchedMovies, setSearchedMovies] = useState([]);


    const searchMovies = async (searchQuery) =>{
        const resultAPI = await service.searchMovies({title : searchQuery});
       
        if (resultAPI) {
            setSearchedMovies(resultAPI);
            // console.log("Searched Movies: ", searchedMovies);
        }
    }

    const renderSearchedMovies = () => {
    return searchedMovies.map((movie, key) => (
      <div key={key} className='searched-movie'>
        <h2>{movie.title} ({movie.releaseYear})</h2>
        <img src={movie.imageSet.verticalPoster.w720} alt={`${movie.title} poster`} />
      </div>    
    ));
  }
    
	return (
		<MoviesContext.Provider value={{searchedMovies, searchMovies, renderSearchedMovies}}>
			{children}
		</MoviesContext.Provider>
	);
};

export default MoviesContext;