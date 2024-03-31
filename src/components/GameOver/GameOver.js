import React from "react";
import './GameOver.css';

function GameOver({ win, onRestartClick, word, score, maxScore, iniAtt, remAtt}) {
  return (
    <div className='div-gameover z-10 mt-6 p-20 lg:p-10 lg:px-6 text-white border rounded-2xl content-center'>
      {win ? (<><h2 className='div-gameover-h2 flex justify-center text-3xl pb-4 font-semibold text-green-500 animate__animated animate__heartBeat'>¡ YOU WIN !</h2><h3 className='div-gameover-h2 pb-4 flex justify-center text-xl font-bold'>Your score: {score}/{maxScore} </h3><h3 className='div-gameover-h2 flex justify-center text-lg'>Incorrect letters: {(iniAtt-remAtt)}</h3><h3 className='div-gameover-h2 flex justify-center text-lg'>Efectivity: {((remAtt)/iniAtt*100).toFixed(0)}%</h3></>) : (<><h2 className='div-gameover-h2 flex justify-center text-red-700 text-3xl pb-4 font-semibold animate__animated animate__fadeIn'>GAME OVER</h2> <h3 className='div-gameover-p text-xl'>The word was {word}</h3></>)}
      <button className='div-gameover-button mt-12 p-2 border rounded-lg' onClick={onRestartClick}>TRY AGAIN</button>
    </div>
  );
}

export default GameOver;