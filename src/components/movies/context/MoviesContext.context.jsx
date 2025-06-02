import { createContext, useState } from "react";
import SearchMoviesService from "../service/MoviesSearchService";

const MoviesContext = createContext({});
const service = new SearchMoviesService();

export const MoviesProvider = ({ children }) => {

    const [searchQuery, setSearchQuery] = useState("");
    const [searchedMovies, setSearchedMovies] = useState([]);


    const searchMovies = async (query) =>{
        const resultAPI = await service.searchMovies(query);
       
        if (resultAPI) {
            setSearchedMovies(resultAPI);
        }

        console.log("Searched Movies: ", searchedMovies);
    }
    
	return (
		<MoviesContext.Provider value={{searchQuery, setSearchQuery, searchedMovies, searchMovies}}>
			{children}
		</MoviesContext.Provider>
	);
};

export default MoviesContext;