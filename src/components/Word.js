function Word({ selectedWord, guessLetters }) {

    function renderWord() {
        return selectedWord.split("").map((letter, index) =>
            guessLetters.includes(letter) ? 
            (<span key={index}>{letter}</span>) : (<span key={index}>_</span>) 
        );
      }
  
      return (
        <div className="word-div p-4 lg:p-2 lg:text-xl justify-center">
          <p className="lg:pb-4 max-lg:hidden">Guess the hidden animal before the figure is completed</p>
          <div className="word-display p-8 text-5xl">
            {renderWord()}
          </div>
        </div>
      );
  }

  export default Word;