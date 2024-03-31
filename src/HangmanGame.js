import './HangmanGame.css';
import 'animate.css'
import Word from './components/Word';
import Hangman from './components/Hangman';
import Keyboard from './components/Keyboard';
import GameOver from './components/GameOver/GameOver';
import { useState} from 'react';
import GameRules from './components/GameRules/GameRules';

function HangmanGame() {

  const categories = {
    'animal': ["MONKEY", "GIRAFFE", "DOLPHIN", "CROCODILE", "PENGUIN", "MOUSE", "GOAT", "FISH", "CHICKEN", "SHEEP", "PIG", "COW", "CAT", "HORSE", "RABBIT", "FOX", "KANGAROO", "OCTOPUS", "PANDA","KOALA", "SHARK", "EAGLE", "OWL", "SNAKE", "BEAR", "DOG", "ELEPHANT", "TIGER", "LION", "DUCK", "BAT", "TURTLE", "SPARROW"],
    'fruit': ["APPLE", "BANANA", "ORANGE", "GRAPE", "STRAWBERRY", "WATERMELON", "RASPBERRY", "MANDARIN", "MANGO", "COCONUT", "KIWI", "PEAR", "PLUM", "PEACH", "PINEAPPLE", "LEMON", "LIME","CHERRY"],
    'country': ["USA", "UK", "CANADA", "AUSTRALIA", "GERMANY", "FRANCE", "ITALY", "JAPAN", "CHINA", "BRAZIL", "URUGUAY", "ARGENTINA", "MEXICO", "SPAIN", "RUSSIA", "INDIA", "EGYPT", "QATAR", "IRAK", "IRAN", "SWITZERLAND", "TURKEY", "GREECE"],
  };

  const [selectedCategory, setSelectedCategory] = useState('');
  const [gameState, setGameState] = useState({
    category: '',
    selectedWord: '',
    guessLetters: [],
    winLetters: [],
    initialAttempts: 0,
    remainingAttempts: 0,
    restart: true,
    win: false,
    score: 0,
    maxScore: 0,
    showRules: false,
  });

  function handleCategoryChange(event) {
    const category = event.target.value;
    setSelectedCategory(category);
  };

  function selectRandomWord() {
    if(selectedCategory !== '') {
      const words = categories[selectedCategory];
      const randomIndex = Math.floor(Math.random() * words.length);
      return words[randomIndex];
    }
  };

  function startGame() {
    //start or restart
      const word = selectRandomWord();
      const splitWord = word.split('');
      const maxSc = (splitWord.length)*4;
      const maxAttmp = (splitWord.length)+1;
      const newCategory = selectedCategory;
      setGameState({
        category: newCategory,
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
      const newScore = score+4;
      setGameState({
        ...gameState,
        guessLetters: newGuessLetters,
        restart: false,
        score: newScore,
      })
    } else {
      // letter is not in the word
      const newRemainingAttempts = remainingAttempts - 1;
      // const newScore = ((score !== 0) ? (score - 2) : 0);
      const newScore = (score - 2);
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
    <div className='hangman-game text-center flex flex-col items-center bg-repeat min-h-screen'>
      <header className='pt-14 pb-4 lg:py-6 self-center justify-center text-7xl text-black bg-transparent'>
        <h1 className='animate__animated animate__slideInDown'>HANGMAN</h1>
      </header>
      <div className='lg:grid w-11/12 lg:grid-cols-5 items-center bg-transparent'>
        <div className='div-actions inline-flex items-center lg:flex lg:col-start-1 lg:col-end-4'>
          <p className='flex p-6 animate__animated animate__fadeInLeft'>{<button className='p-2 rounded-md text-white bg-zinc-500' onClick={showRules}>HOW TO PLAY</button>}</p>
          {gameState.restart && <select className='p-2 flex items-center rounded-md h-10' value={selectedCategory} onChange={handleCategoryChange}>
            <option value='' disabled='true' >Select category</option>{Object.keys(categories).map(category => (<option key={category} value={category}>{category.toUpperCase()}</option>))}
          </select>}
          {(selectedCategory !== '') && <p className='flex p-6 animate__animated animate__fadeInLeft'>{gameState.restart && <button className='p-2 rounded-md text-white bg-green-600' onClick={startGame}>GENERATE WORD</button>} </p>}
        </div>
        <div className='div-stats text-center font-semibold items-center lg:col-start-4 lg:col-end-6'>
          <p className='text-xl animate__animated animate__fadeInRight'>Remaining Attempts: {gameState.remainingAttempts}</p>
          <p className='text-xl animate__animated animate__fadeInRight'>Score: {gameState.score} </p>
        </div>
      </div>
      <div className='div-end z-10 p-6 lg:p-4 absolute mt-24 lg:mt-28 lg:w-1/2 animate__animated animate__fadeInDown'>
        {(gameState.selectedWord !== '') && checkWin() ? <GameOver win={true} onRestartClick={startGame} word={gameState.selectedWord} score={gameState.score} maxScore={gameState.maxScore} iniAtt={gameState.initialAttempts} remAtt={gameState.remainingAttempts} /> : (checkLoss() && <GameOver win={false} onRestartClick={startGame} word={gameState.selectedWord} score={0} maxScore={gameState.maxScore} />)}
        {(gameState.showRules) && <GameRules hide={hideRules}/>}
      </div>
      <div className='div-word px-4 lg:px-8 justify-center lg:grid lg:grid-cols-5 animate__animated animate__fadeInUp'>
        <div className='div-keyboard text-2xl items-center lg:col-start-1 lg:col-end-4 lg:p-8'>
          <Word selectedWord={gameState.selectedWord} guessLetters={gameState.guessLetters} category={gameState.category} />
          {checkWin() ? <Keyboard onLetterClick={handleGuess} onRestartClick={gameState.restart} remainingAttempts={gameState.remainingAttempts} word={gameState.selectedWord} win={true} /> : <Keyboard onLetterClick={handleGuess} onRestartClick={gameState.restart} remainingAttempts={gameState.remainingAttempts} word={gameState.selectedWord} win={false} />}
        </div>
        <div className='div-stickman flex justify-center lg:col-start-4 lg:col-end-6'>
          <Hangman remainingAttempts={gameState.remainingAttempts} />
        </div>
      </div>
    </div>
  );
}

export default HangmanGame;