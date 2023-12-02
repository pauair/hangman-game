import React, { useEffect, useState } from "react";
import './Button.css'

function Button({letter, onLetterClick, restart, remainingAttempts, word, win}) {
  const [buttonDisabled, setButtonDisabled] = useState(false);
  
  useEffect(()=> {
    if (restart) {
      setButtonDisabled(false);
    }
    if (remainingAttempts === 0 || word === "" || win === true) {
      setButtonDisabled(true);
    }
  })

  function handleClick() {
    if (!buttonDisabled) {
      onLetterClick(letter);
      setButtonDisabled(true);
    }
  }

  return (
    <div className="button-keyboard-div">
      <button className="button-keyboard" onClick={handleClick} disabled={buttonDisabled}>
        {letter}
      </button>
    </div>
  );
}

export default Button;