import React from "react";
import Button from "./Button";

function Keyboard({ onLetterClick , onRestartClick, remainingAttempts, word, win}) {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  
    return (
      <div className='div-keyboard pb-4 lg:p-3'>
        {alphabet.split("").map((letter, index) => (
          <Button key={index} letter={letter} onLetterClick={onLetterClick} restart={onRestartClick} remainingAttempts={remainingAttempts} word={word} win={win} />
        ))}
      </div>
    );
  }
  
  export default Keyboard;