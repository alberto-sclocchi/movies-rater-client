import OpenAI from "openai";

export default class ReelBotService {
    constructor(){
        let client = new OpenAI({
            apiKey: process.env.REACT_APP_OPENAI_API_KEY,
            dangerouslyAllowBrowser: true
        })

        this.client = client;
    }

    getReelBotResponse(prompt) {
        return this.client.chat.completions.create({
            model: "gpt-4o",
            messages: [{ role: "user", content: prompt }],
            max_completion_tokens: 500,
        }).then((resp) => {
            console.log("ReelBot Response: ", resp.choices[0].message);
            return resp.choices[0].message.content;
        }).catch((err) => {
            console.error("Error fetching ReelBot response:", err);
        });
    }

}

