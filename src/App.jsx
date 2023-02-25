import palavras from "./palavras.js";
import Letras from "./components/Letras";
import Jogo from "./components/Jogo";
import Chute from "./components/Chute";
import { Reset } from "./styles";
import React from "react";

export default function App() {
  // console.log(palavras);
  let randomWord = "";
  let [state, setState] = React.useState({
    gameStatus: false,
    clickedLetters: [],
    triedLetters: [],
    erros: 0,
    rightAnswer: false,
    randomWord: "",
    randomWordSplit: [],
    ableLetters: true,
    ableGuess: true,
    backGroundColor: "#9FAAB5",
    color: "#798A9F",
    styleWord: "Finding"
  });

  const [triedWords, setTriedWords] = React.useState([]);
  const triedLetter = [];
  const gameStats = {
    errosNumber: 0,
    enable: false,
    styleGameWord: "Finding",
    word: "",
    triedLetter: []
  }

  function analyzeWord(letter) {
    // console.log(state.randomWord);
    const randomWord = state.randomWord;
    const newLetter = letter;
    state.clickedLetters.push(newLetter);
    setState({ ...state, clickedLetters: state.clickedLetters });
    // console.log("Letras clicadas: ", state.clickedLetters);

    const newLetterForAnalyzis = receivingLetter(letter);
    state.triedLetters.push(newLetterForAnalyzis);
    setState({ ...state, triedLetters: state.triedLetters });
    // console.log("Letras analizadas: ", state.triedLetters);

    // console.log("Palavra aleatoria em analise: ", randomWord);

    const randomWordSplit = randomWord.split("");
    console.log("Array da palavra escolhida: ", randomWordSplit);

    // console.log(randomWordSplit[i])
    // console.log(state.triedLetters[state.triedLetters.length-1])
    let errosDetector = 0;
    let countAmount = 0;
    let showLetter = "";
    for (let i = 0; i < randomWordSplit.length; i++) {
      for (let j = 0; j < 1; j++) {
        if (randomWordSplit[i] === state.triedLetters[state.triedLetters.length - 1]) {
          countAmount++;
          showLetter = randomWordSplit[i];
          alert("plota letra");
          // alert("desabilita letra");
        }
        else if ((randomWordSplit[i] === "ú") && state.triedLetters[state.triedLetters.length - 1] === "u") {
          countAmount++;
          showLetter = randomWordSplit[i];
          alert("ú");
          alert("plota letra");
          // alert("desabilita letra");
        }
        else if ((randomWordSplit[i] === "ç") && state.triedLetters[state.triedLetters.length - 1] === "c") {
          countAmount++;
          showLetter = randomWordSplit[i];
          alert("ç");
          alert("plota letra");
          // alert("desabilita letra");
        }
        else if ((randomWordSplit[i] === "í") && state.triedLetters[state.triedLetters.length - 1] === "i") {
          countAmount++;
          showLetter = randomWordSplit[i];
          alert("í");
          alert("plota letra");
          // alert("desabilita letra");
        }
        else if (randomWordSplit[i] === "é" || randomWordSplit[i] === "ê") {
          countAmount++;
          showLetter = randomWordSplit[i];
          alert("é ou ê");
          alert("plota letra");
          // alert("desabilita letra");
        }
        else if ((randomWordSplit[i] === "á" || randomWordSplit[i] === "â" || randomWordSplit[i] === "ã") && state.triedLetters[state.triedLetters.length - 1] === "a") {
          countAmount++;
          showLetter = randomWordSplit[i];
          alert("à, â ou ã");
          alert("plota letra");
          // alert("desabilita letra");
        }
        else if (randomWordSplit[i] === "ó" || randomWordSplit[i] === "ô" || randomWordSplit[i] === "õ") {
          countAmount++;
          showLetter = randomWordSplit[i];
          alert("ó, ô ou õ");
          alert("plota letra");
          // alert("desabilita letra");
        }
        else {
          errosDetector++;
        }
      }
    }
    if (errosDetector === randomWordSplit.length) {
      state.erros++;
      setState({ ...state, erros: state.erros })
    }
    alert(`Achou: ${countAmount} ${showLetter} agora vc tem ${state.erros} erros`);


  }


  function receivingLetter(letter) {
    // const newTriedWords = [...triedWords, w];
    // setTriedWords(newTriedWords);
    // console.log(newTriedWords);
    let asciiLetterNumber = letter[letter.length - 1].charCodeAt();
    // console.log(asciiLetterNumber);
    //+32 para ir pra minusculo
    asciiLetterNumber = asciiLetterNumber + 32;
    let asciiLetter = String.fromCharCode(asciiLetterNumber);
    return asciiLetter;
  }

  function enableGame() {
    if (state.gameStatus === false) {
      state.gameStatus = true;
      setState({ ...state, enableStatus: state.gameStatus })
      state.ableLetters = false;
      setState({ ...state, ableLetters: state.ableLetters })
      state.ableGuess = false;
      setState({ ...state, ableGuess: state.ableGuess })
      // gameStats.enable = enableStatus;
      // console.log(gameStatus.enable);
      console.log("Jogo começou: ", state.gameStatus);
      const randomWord = getRandomWord();
      state.randomWord = randomWord;
      setState({ ...state, randomWord: randomWord })
      console.log("Palavra sorteada: ", state.randomWord);
      changingLettersBoxColor();
    }
  }

  function changingLettersBoxColor() {
    state.backGroundColor = "#E1ECF4";
    setState({ ...state, backGroundColor: state.backGroundColor })
    state.color = "#39739D";
    setState({ ...state, color: state.color })
  }

  function getRandomWord() {
    const randomNumber = Math.random();
    const randomWordPosition = Math.floor(randomNumber * palavras.length);
    const randomWord = palavras[randomWordPosition];
    // console.log("aqui:",randomWord);
    return randomWord;
    // console.log(state.randomWord);
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
        ableLettersButton={state.ableLetters}
        changingLettersBoxColor={state}
        changingIndividualLetterBoxColor={setState}
      />
      <Chute
        randomWord={randomWord}
        gameStats={gameStats}
        ableGuessButton={state.ableGuess}
      />
    </div>
  );
}


