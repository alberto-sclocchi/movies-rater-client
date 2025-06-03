import axios from "axios";

export default class MoviesSearchService {
    constructor(){
        let service = axios.create({
            baseURL: "https://streaming-availability.p.rapidapi.com",
            headers: {
                'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY,
                'x-rapidapi-host': 'streaming-availability.p.rapidapi.com'
            }
        })

        this.service = service;
    }

    searchMovies ({country = "us", series_granularity = "show", show_type = "movie", output_language = "en", title}) {
        return this.service.get("/shows/search/title", {
            params: {
                country,
                series_granularity,
                show_type,
                output_language,
                title
            }
        }).then((resp) => {
            console.log(resp.data);
            return resp.data;
        }).catch((err) => {
            console.error("Error fetching movies:", err);
        })
    }
}

