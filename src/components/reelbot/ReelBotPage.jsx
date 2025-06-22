import React, { useContext, useEffect, useState } from 'react'
import botIcon from '../../images/BotIcon.png';
import ReelBotContext from './context/ReelBotContext.context';
import MoviesContext from '../movies/context/MoviesContext.context';
import { RenderType } from '../movies/models/RenderType.model';
import Markdown from 'react-markdown';
import AuthContext from '../auth/context/AuthContext.context';

export default function ReelBotPage() {
  const [ input, setInput ] = useState("");
  const { botResponse, askReelBot, reelBotLoading, setBotResponse} = useContext(ReelBotContext);
  const { addedMovies, getMovies } = useContext(MoviesContext);
  const { isLoggedOut } = useContext(AuthContext);
  const [ displayText, setDisplayText ] = useState("");
  
  useEffect(( ) => {
    getMovies();
    isLoggedOut();
    // console.log("Added Movies in order: ", addedMovies);
  }, [])


  useEffect(() => {
    if(!reelBotLoading && botResponse) {
        setDisplayText("");
        let index = 0;
        const interval = setInterval(() => {
            if (index < botResponse.length) {
                setDisplayText(prevText => prevText + botResponse.charAt(index));
                index++;
            } else {
                clearInterval(interval);
            }
        }, 10);

        return () => {
            clearInterval(interval)
            setDisplayText(""); 
            setBotResponse("");
        };
    }
  }, [botResponse, reelBotLoading]);

  const handleChange = (event) => {
    setInput(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    //handle empty input
    if (input.trim() === "") {
        askReelBot(true, "Please add information to ReelBot to give you the best suggestions.");
        return;
    } 
    else if (addedMovies.length < 3){
        askReelBot(true, "Please add at least three (3) movies first.");
        return;
    }

    const mostLikedMovies = [...addedMovies].filter((movie, index) => index <= 2 );

    // console.log("Most Liked Movies: ", mostLikedMovies);

    const inputMovies = `Use these movies as a reference: ${mostLikedMovies.map(movie => movie.title).join(", ")}. Also consider this additional information: ${input}. Based on both, suggest 3-5 movies I might like and where I can access them.`;    
    console.log("Final Input Message: ", inputMovies);

    askReelBot(false, inputMovies);
  }


  return (
    <div id="reelbot-page">
     <h1>ReelBot <img src={botIcon} alt="chat-bot-icon"/></h1>
     <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Ask ReelBot...' onChange={handleChange} value={input}/>
        <div className='reelbot-response'>
            <div><Markdown>{!reelBotLoading ? displayText : "ReelBot is thinking..."}</Markdown></div>
        </div>
        <button disabled={reelBotLoading}>{reelBotLoading ? "Fetching Result" : "Start Suggestion"}</button>
     </form>
    </div>
  )
}
