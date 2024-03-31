import React from "react";
import './GameRules.css';

function GameRules({hide}) {

    return (
        <div className="div-rules z-10 py-6 lg:px-6 text-white border rounded-2xl content-center">
            <>
                <h2 className='div-rules-h2 text-2xl pb-4 font-semibold animate__animated animate__heartBeat'>HOW TO PLAY</h2>
                <p className='div-rules-p px-10 lg:px-12 pb-2 text-left'>Choose a category and generate a random word to guess, represented by underscores indicating the number of letters.</p>
                <p className='div-rules-p px-10 lg:px-12 pb-2 text-left'>You can guess the word at any time. An incorrect guess adds a part to the hangman figure.</p>
                <p className='div-rules-p px-10 lg:px-12 pb-2 text-left'>Guessing a letter correctly <strong className='div-rules-p text-green-500'>earns you 4 points</strong>, while an incorrect letter <strong className='div-rules-p text-red-600'> deducts 2 points</strong>.</p>
                <p className='div-rules-p px-10 lg:px-12 pb-2 text-left'>The game ends when you correctly guess the word or the hangman figure is completed.</p>
            </>
            <button className='div-rules-button m-2 p-2 bg-black border rounded-lg' onClick={hide}>GOT IT</button>
        </div>
    );
}

export default GameRules;