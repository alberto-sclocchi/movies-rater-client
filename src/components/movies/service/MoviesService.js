import axios from "axios";

export default class MoviesService {
    constructor(){
        let service = axios.create({
            baseURL: "http://localhost:5005/movies",
        })

        this.service = service;
    }

    getMovies() {
        return this.service.get("/").then((resp) => {
            console.log(resp.data);
            return resp.data;
        })
    }

    addMovie(movie){
        return this.service.post("/", movie).then((resp) => {
            console.log(resp.data);
            return resp.data;
        })
    }
}