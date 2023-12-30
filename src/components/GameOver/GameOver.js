import React from "react";
import './GameOver.css';

function GameOver({ win, onRestartClick, word, score, maxScore}) {
  return (
    <div className="div__game-over">
      {win ? (<><h2 className='div__h2___game-over animate__animated animate__heartBeat'>¡ YOU WIN !</h2><h3 className='div__h2___game-over'>Your score: {score}/{maxScore} </h3></>) : (<><h2 className='div__h2___game-over' class="animate__animated animate__fadeIn">GAME OVER.</h2> <h3 className='div__h2___game-over'>The word was {word}</h3> <h4 className='div__h2___game-over'>Your score: {score}</h4></>)}
      <button className="button__try-again" onClick={onRestartClick}>TRY AGAIN</button>
    </div>
  );
}

export default GameOver;