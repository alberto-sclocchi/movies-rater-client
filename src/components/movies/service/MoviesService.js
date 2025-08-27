import axios from "axios";

export default class MoviesService {
    constructor(){
        let service = axios.create({
            // baseURL: "http://localhost:5005/movie",
            baseURL:"https://movies-rater-api.onrender.com",
            withCredentials: "true"
        })

        this.service = service;
    }

    getMovies(userId) {
        console.log("userId Service:", userId);
        return this.service.get(`/${userId}`).then((resp) => {
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
        return this.service.get(`/details/${id}`).then((resp) => {
            console.log(resp.data);
            return resp.data;
        })
    }

    updateRating(id, rating){
        return this.service.patch(`/${id}`, rating).then((resp) => {
            console.log(resp.data);
            return resp.data;
        })
    }
}