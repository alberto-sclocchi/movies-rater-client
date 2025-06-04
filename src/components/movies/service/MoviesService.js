import axios from "axios";

export default class MoviesService {
    constructor(){
        let service = axios.create({
            baseURL: "http://localhost:5005/movie",
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

    unaddMovie(id){
        return this.service.delete(`/${id}`).then((resp) => {
            // console.log("id:", id);
            console.log(resp.data);
            return resp.data;
        })
    }

    getMovie(id){
        return this.service.get(`/${id}`).then((resp) => {
            console.log(resp.data);
            return resp.data;
        })
    }
}