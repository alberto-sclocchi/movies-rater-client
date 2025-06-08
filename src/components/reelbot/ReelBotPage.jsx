import React, { useContext, useState } from 'react'
import botIcon from '../../images/BotIcon.png';
import ReelBotContext from './context/ReelBotContext.context';

export default function ReelBotPage() {
  const [ input, setInput ] = useState("");
  const { botResponse, askReelBot } = useContext(ReelBotContext);

  const handleChange = (event) => {
    setInput(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    askReelBot(input);
  }


  return (
    <div id="reelbot-page">
     <h1>ReelBot <img src={botIcon} alt="chat-bot-icon"/></h1>
     <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Ask ReelBot...' onChange={handleChange} value={input}/>
        <div className='reelbot-response'>
            <p>{botResponse}</p>
        </div>
        <button>Start Suggestion</button>
     </form>
    </div>
  )
}
