import { createContext, useState } from "react";
import ReelBotService from "../service/ReelBotService";

const ReelBotContext = createContext({});
const reelBotService = new ReelBotService();

export const ReelBotProvider = ({ children }) => {

    const [botResponse, setBotResponse] = useState("");

    const askReelBot = async (question) => {
        const resultAPI = await reelBotService.getReelBotResponse(question);
        
        if (resultAPI) {
            setBotResponse(resultAPI);
            console.log("ReelBot Response: ", resultAPI);
        } else {
            setBotResponse("Sorry, I couldn't understand your question.");
        }
    } 

    return (
        <ReelBotContext.Provider value={{botResponse, askReelBot}}>
            {children}
        </ReelBotContext.Provider>
    );
};

export default ReelBotContext;