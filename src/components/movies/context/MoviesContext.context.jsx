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
    
	return (
		<MoviesContext.Provider value={{searchedMovies, searchMovies}}>
			{children}
		</MoviesContext.Provider>
	);
};

export default MoviesContext;