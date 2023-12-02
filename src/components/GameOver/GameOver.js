import React from "react";
import './GameOver.css';

function GameOver({ win, onRestartClick, word}) {
  return (
    <div className="div__game-over">
      {win ? (<h2 className='div__h2___game-over'class="animate__animated animate__heartBeat">¡ YOU WIN !</h2>) : (<><h2 className='div__h2___game-over' class="animate__animated animate__fadeIn">GAME OVER.</h2> <h3 className='div__h2___game-over'>The word was {word}</h3></>)}
      <button className="button__try-again" onClick={onRestartClick}>TRY AGAIN</button>
    </div>
  );
}

export default GameOver;