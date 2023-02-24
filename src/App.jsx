import palavras from "./palavras.js";
import Letras from "./components/Letras";
import Jogo from "./components/Jogo";
import Chute from "./components/Chute";
import { Reset } from "./styles";
import React from "react";

export default function App() {
  // console.log(palavras);
  let randomWord = "";
  let [enableStatus, setEnableStatus] = React.useState(false);
  const [triedWords, setTriedWords] = React.useState([]);
  const gameStats = {
    errosNumber: 0,
    enable: false,
    styleGameWord: "Finding",
    word: ""
  }

  function analyzeWord(w) {
    const newTriedWords = [...triedWords, w];
    setTriedWords(newTriedWords);
    console.log(newTriedWords);
    let asciiLetterNumber = newTriedWords[newTriedWords.length - 1].charCodeAt();
    console.log(asciiLetterNumber);
    //+32 para ir pra minusculo
    asciiLetterNumber = asciiLetterNumber + 32;
    let asciiLetter = String.fromCharCode(asciiLetterNumber);
    
    console.log(asciiLetter);    
  }

  function enableGame() {
    if (gameStats.enable === false) {
      enableStatus = true;
      setEnableStatus(enableStatus);
      gameStats.enable = enableStatus;
      // console.log(gameStatus.enable);
      console.log(enableStatus);
      randomWord = getRandomWord();
    }
  }

  function getRandomWord() {
    const randomNumber = Math.random();
    const randomWordPosition = Math.floor(randomNumber * palavras.length);
    const randomWord = palavras[randomWordPosition];
    gameStats.word = randomWord;
    return randomWord;
  }
  // const randomWord = palavras[randomWordPosition];
  // console.log(randomNumber);
  // console.log(palavras.length);
  // console.log(randomWordPosition);
  // console.log(randomWord);
  return (
    <div className="App">
      <Reset />
      <Jogo
        randomWord={randomWord}
        gameStats={gameStats}
        gameStatus={enableGame}
      />
      <Letras
        randomWord={randomWord}
        gameStats={gameStats}
        checkWord={analyzeWord}
      />
      <Chute randomWord={randomWord} gameStats={gameStats} />
    </div>
  );
}


