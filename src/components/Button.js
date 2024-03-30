import React, { useEffect, useState } from "react";

function Button({letter, onLetterClick, restart, remainingAttempts, word, win}) {
  const [buttonDisabled, setButtonDisabled] = useState(false);
  
  useEffect(()=> {
    if (restart) {
      setButtonDisabled(false);
    }
    if (win === true || remainingAttempts === 0 || word === "") {
      setButtonDisabled(true);
    }
  }, [restart, remainingAttempts, word, win])

  function handleClick() {
    if (!buttonDisabled) {
      onLetterClick(letter);
      setButtonDisabled(true);
    }
  }

  return (
    <div className='div-keyboard-button inline'>
      <button className='keyboard-button py-1 px-2 m-1 text-white bg-green-700 rounded-lg disabled:bg-zinc-500 disabled:text-black' onClick={handleClick} disabled={buttonDisabled}>
        {letter}
      </button>
    </div>
  );
}

export default Button;