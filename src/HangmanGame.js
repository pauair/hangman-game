import logo from './logo.svg';
import './HangmanGame.css';
import Word from './components/Word/Word';
import Hangman from './components/Hangman/Hangman';
import Keyboard from './components/Keyboard/Keyboard';
import GameOver from './components/GameOver/GameOver';
import { useState } from 'react';

function HangmanGame() {
  const [gameState, setGameState] = useState({
    selectedWord: "",
    guessLetters: [],
    winLetters: [],
    remainingAttempts: 0,
    qtyGuess: 0,
    restart: true,
  });

  function selectRandomWord() {
    const words = ["CAT", "DOG", "ELEPHANT", "TIGER", "LION", "DUCK"]; //words db
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
  }

  function startGame() {
    //start or restart
    const word = selectRandomWord();
    const splitWord = word.split("");
    setGameState({
      selectedWord: word, 
      guessLetters: [], 
      winLetters: splitWord, // selected word letters
      remainingAttempts: 7, 
      qtyGuess: 0, // qty guess letters
      restart: true,
    });
    console.log(word);
    console.log(splitWord);
  }

  function handleGuess(letter) {
    // game status
    const { selectedWord, guessLetters, winLetters, remainingAttempts, qtyGuess } = gameState;
    console.log(selectedWord);
    console.log(winLetters);
    console.log(letter);
    console.log("intentos restantes", remainingAttempts);
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
    return gameState.winLetters.every((letter) => gameState.guessLetters.includes(letter));
  }
  
  function checkLoss() {
    return gameState.remainingAttempts <= 0;
  }

  return (
    <div className="HangmanGame">
      <header className="HangmanGame-header">
        <h1>Hangman Game</h1>
        <img src={logo} className="HangmanGame-logo" alt="logo" />
      </header>
      {gameState.restart && <button onClick={startGame}>START NEW GAME</button>}
      <Word selectedWord={gameState.selectedWord} guessLetters={gameState.guessLetters} />
      <Keyboard onLetterClick={handleGuess} onRestartClick={gameState.restart} />
      <Hangman remainingAttempts={gameState.remainingAttempts} />
      {checkWin() && <GameOver win={true} onRestartClick={startGame} />}
      {checkLoss() && <GameOver win={false} onRestartClick={startGame} />}
    </div>
  );
}

export default HangmanGame;
