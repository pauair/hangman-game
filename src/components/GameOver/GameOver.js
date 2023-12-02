import React from "react";
import './GameOver.css';

function GameOver({ win, onRestartClick, word}) {
  return (
    <div className="game-over">
      {win ? (<h2 class="animate__animated animate__heartBeat">¡You win!</h2>) : (<><h2 class="animate__animated animate__fadeIn">Game over.</h2> <h3>The word was {word}</h3></>)}
      <button className="button-try" onClick={onRestartClick}>TRY AGAIN</button>
    </div>
  );
}

export default GameOver;