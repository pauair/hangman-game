import React from "react";
import Button from "../Button/Button";

function Keyboard({ onLetterClick , onRestartClick}) {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  
    return (
      <div className="keyboard">
        {alphabet.split("").map((letter, index) => (
          <Button key={index} letter={letter} onLetterClick={onLetterClick} restart={onRestartClick} />
        ))}
      </div>
    );
  }
  
  export default Keyboard;