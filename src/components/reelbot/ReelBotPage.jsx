import React, { useContext, useEffect, useState } from 'react'
import botIcon from '../../images/BotIcon.png';
import ReelBotContext from './context/ReelBotContext.context';
import MoviesContext from '../movies/context/MoviesContext.context';
import { RenderType } from '../movies/models/RenderType.model';
import Markdown from 'react-markdown';

export default function ReelBotPage() {
  const [ input, setInput ] = useState("");
  const { botResponse, askReelBot } = useContext(ReelBotContext);
  const { addedMovies, getMovies } = useContext(MoviesContext);
  
  useEffect(( ) => {
    getMovies();
    console.log("Added Movies in order: ", addedMovies);
  }, [])

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
            <p><Markdown>{botResponse}</Markdown></p>
        </div>
        <button>Start Suggestion</button>
     </form>
    </div>
  )
}
