import React from "react";

function Hangman({ remainingAttempts }) {
    // hangman parts SVG elements
    const hangmanParts = [
      <path d="M120 20 Q150 20, 160 40 Q170 60, 160 80 Q150 100, 120 100 
      Q90 100, 80 80 Q70 60, 80 40 Q90 20, 120 20" fill="transparent" stroke="black"/>,
      <path d="M120 100 Q110 160 120 200" fill="transparent" stroke="black" />,
      <path d="M117 115 Q140 110 190 190" fill="transparent" stroke="black" />,
      <path d="M117 115 Q90 105 50 180" fill="transparent" stroke="black" />,
      <path d="M120 200 Q70 280 90 350" fill="transparent" stroke="black" />,
      <path d="M120 200 Q170 260 180 350" fill="transparent" stroke="black" />
    ]
  
    // partes a mostrar según los intentos restantes
    const partsToShow = hangmanParts.slice(0, 7 - remainingAttempts);
  
    return (
      <div className="hangman">
        <svg width="200" height="300">
          {partsToShow}
        </svg>
      </div>
    );
  }

  export default Hangman;