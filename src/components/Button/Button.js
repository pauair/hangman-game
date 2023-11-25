import React, { useEffect, useState } from "react";

function Button({letter, onLetterClick, restart}) {
  const [buttonDisabled, setButtonDisabled] = useState(false);
  
  useEffect(()=> {
    if (restart) {
      setButtonDisabled(false);
    }
  })
  function handleClick() {
    if (!buttonDisabled) {
      onLetterClick(letter);
      setButtonDisabled(true);
    }
  }

  return (
    <>
    <button onClick={handleClick} disabled={buttonDisabled}>
      {letter}
    </button>
    </>
  );
}

export default Button;