import axios from 'axios'

export default class AuthService {
    constructor(){
        let service = axios.create({
            baseURL: "http://localhost:5005/auth",
            withCredentials: "true"
        })

        this.service = service;
    }

    signUp(userData){
        return this.service.post("/signup", userData).then((resp) => {
            console.log("User create", resp.data)
            return resp.data;
        })
    }
}