import './Word.css';

function Word({ selectedWord, guessLetters }) {

    function renderWord() {
        return selectedWord.split("").map((letter, index) =>
            guessLetters.includes(letter) ? 
            (<span key={index}>{letter}</span>) : (<span key={index}>_</span>) 
        );
      }
  
      return (
        <div className="word-div">
          <p>Guess the animal:</p>
          <div className="word-display">
            {renderWord()}
          </div>
        </div>
      );
  }

  export default Word;