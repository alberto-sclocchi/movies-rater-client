import { createContext, useState } from "react";
import AuthService from "../service/AuthService";
import { useNavigate } from "react-router-dom";



const AuthContext = createContext({});
const service = new AuthService();


export const AuthProvider = ({children}) => {
    const navigateTo = useNavigate();
	const [user, setUser] = useState(null);
    const [ errorMessage, setErrorMessage ] = useState(null);

    const signUp = async (userData) => {
        const userResp = await service.signUp(userData);

        if(userResp.message){
            setErrorMessage(userResp.message)
        } else {
            setErrorMessage(null);
            navigateTo("/login")
        }
    }








    return(
        <AuthContext.Provider value={{}}>
            {children}
        </AuthContext.Provider>
    )
}