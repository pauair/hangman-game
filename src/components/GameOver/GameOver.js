import React from "react";

function GameOver({ win}) {
  return (
    <div className="game-over">
      {win ? (<h2>¡You win!</h2>) : (<h2>You loss :(</h2>)}
    </div>
  );
}

export default GameOver;