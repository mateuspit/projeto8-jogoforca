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
  const gameStats = {
    errosNumber: 0,
    enable: false,
    styleGameWord: "Finding",
    word: ""
  }

  function enableGame(){
    if(gameStats.enable === false){
      enableStatus = true;
      setEnableStatus(enableStatus);
      gameStats.enable = enableStatus;    
      // console.log(gameStatus.enable);
      console.log(enableStatus);
      randomWord = getRandomWord();
    }
  }

  function getRandomWord(){
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
      <Jogo randomWord={randomWord} gameStats={gameStats} gameStatus={enableGame}/>
      <Letras randomWord={randomWord} gameStats={gameStats}/>
      <Chute randomWord={randomWord}/>
    </div>
  );
}


