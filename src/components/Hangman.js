import React from "react";

function Hangman({ remainingAttempts, win }) {
    // hangman parts SVG elements
    const hangmanParts = [
      //gallow
      <line x1="120" y1="05" x2="10" y2="05"/>,
      <line x1="10" y1="05" x2="10" y2="400" />,
      <line x1="120" y1="5" x2="120" y2="20"/>,
      //head
      <path d="M120 20 Q150 20, 160 40 Q170 60, 160 80 Q150 100, 120 100 
      Q90 100, 80 80 Q70 60, 80 40 Q90 20, 120 20" fill="transparent"/>,
      //body
      <path d="M120 100 Q110 160 120 200" fill="transparent"/>,
      //right arm
      <path d="M117 115 Q140 110 190 190" fill="transparent"/>,
      //left arm
      <path d="M117 115 Q90 105 50 180" fill="transparent"/>,
      //left leg
      <path d="M120 200 Q70 280 90 340" fill="transparent"/>,
      //right leg
      <path d="M120 200 Q170 260 180 340" fill="transparent"/>,
      <path d="M100 45 L110 55 M110 45 L100 55" />, 
      <path d="M130 45 L140 55 M140 45 L130 55"/>,
      <path d="M100 80 Q120 45, 140 80" fill="transparent"/>
    ]
  
    const partsToShow = hangmanParts.slice(0, 12 - remainingAttempts);
  
    return (
      <>
      {win === false ? <> </> : <div className='div-hangman bg-green-800 p-2 m-4 rounded-lg border-12 border-solid border-yellow-950 w-60 h-88'>
        <svg viewBox='-25 -20 300 475' stroke='white' stroke-width='4' stroke-linecap='round' stroke-dasharray='4,2' stroke-opacity='0.8' fill='none'>
          {partsToShow}
        </svg>
      </div>}
      </>
    );
  }

  export default Hangman;