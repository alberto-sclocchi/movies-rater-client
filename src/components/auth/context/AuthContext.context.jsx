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
			console.log("Output Verify:", decryptedCred)
            setUser(decryptedCred);
			setErrorMessage(null);
			navigateTo("/");
		} else{
			setErrorMessage(userResp.message);
		}
	};

    return(
        <AuthContext.Provider value={{errorMessage, user, signUp, logIn, setErrorMessage}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;