import './HangmanGame.css';
import 'animate.css'
import Word from './components/Word/Word';
import Hangman from './components/Hangman/Hangman';
import Keyboard from './components/Keyboard/Keyboard';
import GameOver from './components/GameOver/GameOver';
import { useState } from 'react';

function HangmanGame() {
  
  function selectRandomWord() {
    const words = ["CAT", "DOG", "ELEPHANT", "TIGER", "LION", "DUCK"]; //words db
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
  }

  const [gameState, setGameState] = useState({
    selectedWord: "",
    guessLetters: [],
    winLetters: selectRandomWord().split(""),
    remainingAttempts: 8,
    qtyGuess: 0,
    restart: true,
    win: false,
  });

  function startGame() {
    //start or restart
    const word = selectRandomWord();
    const splitWord = word.split("");
    setGameState({
      selectedWord: word, 
      guessLetters: [], 
      winLetters: splitWord, // selected word letters
      remainingAttempts: 8, 
      qtyGuess: 0, // qty guess letters
      restart: true,
      win: false,
    });
  }

  function handleGuess(letter) {
    // game status
    const { guessLetters, winLetters, remainingAttempts, qtyGuess } = gameState;
    if (winLetters.includes(letter)) {
      // letter is in the word
      const newQtyGuess = qtyGuess + 1;
      const newGuessLetters = [...guessLetters, letter];
      setGameState({
        ...gameState,
        qtyGuess: newQtyGuess,
        guessLetters: newGuessLetters,
        restart: false,
      })
    } else {
      // letter is not in the word
      const newRemainingAttempts = remainingAttempts - 1;
      setGameState({
        ...gameState,
        remainingAttempts: newRemainingAttempts,
        restart: false,
      })
    }
  }

  function checkWin() {
    return (gameState.winLetters.every((letter) => gameState.guessLetters.includes(letter)))
  }
  
  function checkLoss() {
    return (gameState.remainingAttempts <= 0) && (gameState.remainingAttempts !== 8) ;
  }

  return (
    <div className='hangman-game'>
      <header className='hangman-game__header'>
        <h1 className='animate__animated animate__slideInDown'>HANGMAN</h1>
      </header>
      <div className='div__control'>
        <p className='div__ control p__button animate__animated animate__fadeInLeft'>{gameState.restart && <button className='button__newgame' onClick={startGame}>NEW GAME</button>}</p>
        <p className='div__ control p__attempts animate__animated animate__fadeInRight'>Remaining Attempts: {gameState.remainingAttempts}</p>
      </div>
      <div className='div__end animate__animated animate__fadeInDown'>
        {checkWin() ? <GameOver win={true} onRestartClick={startGame} word={gameState.selectedWord}/> : (checkLoss() && <GameOver win={false} onRestartClick={startGame} word={gameState.selectedWord}/>)}
      </div>
      <div className='hangman-game__body animate__animated animate__fadeInUp'>
        <div className='div__word-keyboard'>
          <Word selectedWord={gameState.selectedWord} guessLetters={gameState.guessLetters} />
          <Keyboard onLetterClick={handleGuess} onRestartClick={gameState.restart} remainingAttempts={gameState.remainingAttempts} word={gameState.selectedWord} win={checkWin}/>
        </div>
        <div className='div__stickman'>
          <Hangman remainingAttempts={gameState.remainingAttempts} />
        </div>
      </div>
    </div>
  );
}

export default HangmanGame;
