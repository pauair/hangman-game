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
    return (gameState.winLetters.every((letter) => gameState.guessLetters.includes(letter)))
  }
  
  function checkLoss() {
    return (gameState.remainingAttempts <= 0) && (gameState.remainingAttempts !== 8) ;
  }

  return (
    <div className="HangmanGame">
      <header className="HangmanGame-header">
        <h1 class="animate__animated animate__slideInDown">HANGMAN</h1>
      </header>
      {gameState.restart && <button className='button-newgame' onClick={startGame}>NEW GAME</button>}
      <Word selectedWord={gameState.selectedWord} guessLetters={gameState.guessLetters} />
      <Keyboard onLetterClick={handleGuess} onRestartClick={gameState.restart} remainingAttempts={gameState.remainingAttempts} word={gameState.selectedWord} win={checkWin}/>
      {checkWin() ? <GameOver win={true} onRestartClick={startGame} word={gameState.selectedWord}/> : (checkLoss() && <GameOver win={false} onRestartClick={startGame} word={gameState.selectedWord}/>)}
      <Hangman remainingAttempts={gameState.remainingAttempts} />
    </div>
  );
}

export default HangmanGame;
