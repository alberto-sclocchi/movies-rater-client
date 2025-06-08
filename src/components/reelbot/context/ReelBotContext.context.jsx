import { createContext, useState } from "react";
import ReelBotService from "../service/ReelBotService";

const ReelBotContext = createContext({});
const reelBotService = new ReelBotService();

export const ReelBotProvider = ({ children }) => {

    const [botResponse, setBotResponse] = useState("");

    const askReelBot = async (error, prompt) => {

        if (!!error){
            setBotResponse(prompt);
            return;
        }

        const resultAPI = await reelBotService.getReelBotResponse(prompt);
        
        if (resultAPI) {
            setBotResponse(resultAPI);
        } else {
            setBotResponse("Sorry, I couldn't understand your additional information.");
        }
    } 

    return (
        <ReelBotContext.Provider value={{botResponse, askReelBot}}>
            {children}
        </ReelBotContext.Provider>
    );
};

export default ReelBotContext;