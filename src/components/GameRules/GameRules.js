import React from "react";
import './GameRules.css';

function GameRules({hide}) {

    return (
        <div className="div__game-rules">
            <>
                <h2 className='div__h2___game-rules animate__animated animate__heartBeat'>RULES</h2>
                <p className='div__p___game-rules'>HOW TO PLAY:</p>
                <p className='div__p___game-rules'>Generate a random word to guess. The word will be represented by underscores indicating the number of letters in the word</p>
                <p className='div__p___game-rules'>You can attempt to guess the word at any time. If you guess incorrectly, a part of the hangman figure will be added. You get 6 points for guessing a letter correctly and -2 points for an incorrect letter.</p>
                <p className='div__p___game-rules'>The game ends when you correctly guess the word or the hangman figure is completed.</p>
            </>
            <button className="button__rules" onClick={hide}>GOT IT</button>
        </div>
    );
}

export default GameRules;