import React from "react";
import Button from "../Button/Button";
import './Keyboard.css';

function Keyboard({ onLetterClick , onRestartClick, remainingAttempts, word, win}) {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  
    return (
      <div className="keyboard">
        {alphabet.split("").map((letter, index) => (
          <Button key={index} letter={letter} onLetterClick={onLetterClick} restart={onRestartClick} remainingAttempts={remainingAttempts} word={word} win={win} />
        ))}
      </div>
    );
  }
  
  export default Keyboard;