import './HangmanGame.css';
import 'animate.css'
import Word from './components/Word/Word';
import Hangman from './components/Hangman/Hangman';
import Keyboard from './components/Keyboard/Keyboard';
import GameOver from './components/GameOver/GameOver';
import { useState } from 'react';
import GameRules from './components/GameRules/GameRules';

function HangmanGame() {

  function selectRandomWord() {
    const words = ["MONKEY", "GIRAFFE", "DOLPHIN", "CROCODILE", "PENGUIN", "CAT", "HORSE", "RABBIT", "FOX", "KANGAROO", "OCTOPUS", "PANDA","KOALA", "SHARK", "EAGLE", "OWL", "SNAKE", "BEAR", "DOG", "ELEPHANT", "TIGER", "LION", "DUCK"]; //words db
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
  }

  const [gameState, setGameState] = useState({
    selectedWord: "",
    guessLetters: [],
    winLetters: selectRandomWord().split(""),
    initialAttempts: 0,
    remainingAttempts: 0,
    restart: true,
    win: false,
    score: 0,
    maxScore: 0,
    showRules: false,
  });

  function startGame() {
    //start or restart
    const word = selectRandomWord();
    const splitWord = word.split("");
    const maxSc = (splitWord.length)*6;
    const maxAttmp = (splitWord.length)+3;
    setGameState({
      selectedWord: word,
      guessLetters: [],
      winLetters: splitWord, // selected word letters
      initialAttempts: maxAttmp,
      remainingAttempts: maxAttmp,
      restart: true,
      win: false,
      score: 0,
      maxScore: maxSc,
      showRules: false,
    });
  }

  function handleGuess(letter) {
    // game status
    const { guessLetters, winLetters, remainingAttempts, score} = gameState;
    if (winLetters.includes(letter)) {
      // letter is in the word
      const newGuessLetters = [...guessLetters, letter];
      const newScore = score+6;
      setGameState({
        ...gameState,
        guessLetters: newGuessLetters,
        restart: false,
        score: newScore,
      })
    } else {
      // letter is not in the word
      const newRemainingAttempts = remainingAttempts - 1;
      const newScore = ((score !== 0) ? (score - 2) : 0);
      setGameState({
        ...gameState,
        remainingAttempts: newRemainingAttempts,
        restart: false,
        score: newScore,
      })
    }
  }

  function checkWin() {
    return (gameState.winLetters.every((letter) => gameState.guessLetters.includes(letter)))
  }

  function checkLoss() {
    return (gameState.remainingAttempts <= 0) && (gameState.remainingAttempts !== gameState.initialAttempts);
  }

  function showRules() {
    setGameState({
      ...gameState,
      showRules: true,
    })
  }

  function hideRules() {
    setGameState({
      ...gameState,
      showRules: false,
    })
  }

  return (
    <div className='hangman-game'>
      <header className='hangman-game__header'>
        <h1 className='animate__animated animate__slideInDown'>HANGMAN</h1>
      </header>
      <div className='div__control'>
        <div className='div__control-buttons'>
          <p className='p__button animate__animated animate__fadeInLeft'>{<button className='button__showrules' onClick={showRules}>RULES</button>}</p>
          <p className='p__button animate__animated animate__fadeInLeft'>{gameState.restart && <button className='button__newgame' onClick={startGame}>NEW GAME</button>} </p>
        </div>
        <div>
          <p className='p__attempts animate__animated animate__fadeInRight'>Remaining Attempts: {gameState.remainingAttempts}</p>
          <p className='p__attempts animate__animated animate__fadeInRight'>Score: {gameState.score} </p>
        </div>
      </div>
      <div className='div__end animate__animated animate__fadeInDown'>
        {checkWin() ? <GameOver win={true} onRestartClick={startGame} word={gameState.selectedWord} score={gameState.score} maxScore={gameState.maxScore}/> : (checkLoss() && <GameOver win={false} onRestartClick={startGame} word={gameState.selectedWord} score={0} maxScore={gameState.maxScore} />)}
        {(gameState.showRules) && <GameRules hide={hideRules}/>}
      </div>
      <div className='hangman-game__body animate__animated animate__fadeInUp'>
        <div className='div__word-keyboard'>
          <Word selectedWord={gameState.selectedWord} guessLetters={gameState.guessLetters} />
          {checkWin() ? <Keyboard onLetterClick={handleGuess} onRestartClick={gameState.restart} remainingAttempts={gameState.remainingAttempts} word={gameState.selectedWord} win={true} /> : <Keyboard onLetterClick={handleGuess} onRestartClick={gameState.restart} remainingAttempts={gameState.remainingAttempts} word={gameState.selectedWord} win={false} />}
        </div>
        <div className='div__stickman'>
          <Hangman remainingAttempts={gameState.remainingAttempts} />
        </div>
      </div>
    </div>
  );
}

export default HangmanGame;
