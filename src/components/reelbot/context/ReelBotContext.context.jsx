import { createContext, useState } from "react";
import ReelBotService from "../service/ReelBotService";

const ReelBotContext = createContext({});
const reelBotService = new ReelBotService();

export const ReelBotProvider = ({ children }) => {

    const [botResponse, setBotResponse] = useState("");
    const [ reelBotLoading, setReelBotLoading ] = useState(false);

    const askReelBot = async (error, prompt) => {

        setReelBotLoading(true);

        if (!!error){
            setBotResponse(prompt);
            setReelBotLoading(false)
            return;
        }

        try{
            const resultAPI = await reelBotService.getReelBotResponse(prompt);
            if (resultAPI) {
                setBotResponse(resultAPI);
            } 
        } catch (err){
            console.error("ReelBot request failed:", err);
            setBotResponse("Sorry, I couldn't process your request. Please try again later.");
        } finally{
            setReelBotLoading(false);
        }
    } 

    return (
        <ReelBotContext.Provider value={{botResponse, askReelBot, reelBotLoading, setBotResponse}}>
            {children}
        </ReelBotContext.Provider>
    );
};

export default ReelBotContext;