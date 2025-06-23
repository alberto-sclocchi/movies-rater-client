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

        setTimeout(() => {
            setErrorMessage(null)
        }, 7500);
    }

    const logIn = async (userData) => {
		const userResp = await service.logIn(userData);

		if(userResp.authToken){
			const decryptedCred = await service.verify(userResp.authToken);
            const currentUser = await service.getCurrentUser();
            setUser(currentUser);
			setErrorMessage(null);
			navigateTo("/dashboard");
		} else{
			setErrorMessage(userResp.message);
		}
	};

    const setCurrentUser = async () => {
        const currentUser = await service.getCurrentUser();
        setUser(currentUser);
    }

    const logOut = async () => {
        const logOut = await service.logOut();
        setUser(null);
		setTimeout(() => {
			navigateTo("/");
		}, 50)
    }

    const isLoggedOut = async () => {
        
        const currentUser = await service.getCurrentUser();
        if(!currentUser){
            navigateTo("/login");
            setTimeout(() => {
                setErrorMessage("Please log in to continue.");      
            }, 50) 
        }

        setTimeout(() => {
            setErrorMessage(null)
        }, 7500)
    }

    const isLoggedIn = async () => {
        const currentUser = await service.getCurrentUser();
        if(currentUser){
            navigateTo("/dashboard");
        }
    }


    return(
        <AuthContext.Provider value={{errorMessage, user, signUp, logIn, setErrorMessage, setCurrentUser, logOut, isLoggedOut, isLoggedIn}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;