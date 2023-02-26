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
    errors: 0,
    image: 0,
    hits: 0,
    getInput: "",
    showedWord: [],
    rightAnswer: false,
    randomWord: "",
    randomWordSplit: [],
    ableLetters: true,
    ableGuess: true,
    backGroundColor: "#9FAAB5",
    color: "#798A9F",
    styleWord: "black"
  });

  const [triedWords, setTriedWords] = React.useState([]);
  const triedLetter = [];
  const gameStats = {
    errorsNumber: 0,
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
    // console.log("Array da palavra escolhida: ", randomWordSplit);

    // console.log(randomWordSplit[i])
    // console.log(state.triedLetters[state.triedLetters.length-1])
    let errorsDetector = 0;
    let countAmount = 0;
    let showLetter = "";
    for (let i = 0; i < randomWordSplit.length; i++) {
      for (let j = 0; j < 1; j++) {
        if (randomWordSplit[i] === state.triedLetters[state.triedLetters.length - 1]) {
          countAmount++;
          showLetter = randomWordSplit[i];
          // alert("plota letra");
          state.showedWord[i*2] = randomWordSplit[i];
          // console.log(randomWordSplit);
          // console.log(state.hits);
          // alert("desabilita letra");
        }
        else if ((randomWordSplit[i] === "ú") && state.triedLetters[state.triedLetters.length - 1] === "u") {
          countAmount++;
          showLetter = randomWordSplit[i];
          state.showedWord[i*2] = randomWordSplit[i];
          // alert("ú");
          // alert("plota letra");
          // alert("desabilita letra");
        }
        else if ((randomWordSplit[i] === "ç") && state.triedLetters[state.triedLetters.length - 1] === "c") {
          countAmount++;
          showLetter = randomWordSplit[i];
          state.showedWord[i*2] = randomWordSplit[i];
          // alert("ç");
          // alert("plota letra");
          // alert("desabilita letra");
        }
        else if ((randomWordSplit[i] === "í") && state.triedLetters[state.triedLetters.length - 1] === "i") {
          countAmount++;
          showLetter = randomWordSplit[i];
          state.showedWord[i*2] = randomWordSplit[i];
          // alert("í");
          // alert("plota letra");
          // alert("desabilita letra");
        }
        else if (randomWordSplit[i] === "é" || randomWordSplit[i] === "ê") {
          countAmount++;
          showLetter = randomWordSplit[i];
          state.showedWord[i*2] = randomWordSplit[i];
          // alert("é ou ê");
          // alert("plota letra");
          // alert("desabilita letra");
        }
        else if ((randomWordSplit[i] === "á" || randomWordSplit[i] === "â" || randomWordSplit[i] === "ã") && state.triedLetters[state.triedLetters.length - 1] === "a") {
          countAmount++;
          showLetter = randomWordSplit[i];
          state.showedWord[i*2] = randomWordSplit[i];
          // alert("à, â ou ã");
          // alert("plota letra");
          // alert("desabilita letra");
        }
        else if ((randomWordSplit[i] === "ó" || randomWordSplit[i] === "ô" || randomWordSplit[i] === "õ") && state.triedLetters[state.triedLetters.length - 1] === "o") {
          countAmount++;
          showLetter = randomWordSplit[i];
          state.showedWord[i*2] = randomWordSplit[i];
          // alert("ó, ô ou õ");
          // alert("plota letra");
          // alert("desabilita letra");
        }
        else {
          errorsDetector++;
        }
      }
    }
    if (errorsDetector === randomWordSplit.length) {
      state.errors++;
      setState({ ...state, errors: state.errors })
    }
    // alert(`Achou: ${countAmount} ${showLetter} agora vc tem ${state.errors} errors`);
    state.hits += countAmount;
    setState({ ...state, hits: state.hits })
    // console.log("hits: ", state.hits);
    if (state.errors === 6) {
      state.rightAnswer = false;
      setState({ ...state, rightAnswer: state.rightAnswer })
      console.log("rightAnswer: ", state.rightAnswer);
      loseWordColor();
      state.showedWord = randomWordSplit;
      setState({ ...state, showedWord: state.showedWord })
      // alert("Travar o jogo");
      lockGame();
    }
    else if (state.hits === randomWordSplit.length) {
      state.rightAnswer = true;
      setState({ ...state, rightAnswer: state.rightAnswer })
      console.log("rightAnswer: ", state.rightAnswer);
      winWordColor();
      state.showedWord = randomWordSplit;
      setState({ ...state, showedWord: state.showedWord })
      alert("travar jogo");
      lockGame();
    }
  }

  function lockGame(){
    const newState = {
      gameStatus: false,
      clickedLetters: [],
      triedLetters: [],
      errors: 0,
      image: 0,
      hits: 0,
      getInput: "",
      showedWord: [],
      rightAnswer: false,
      randomWord: "",
      randomWordSplit: [],
      ableLetters: true,
      ableGuess: true,
      backGroundColor: "#9FAAB5",
      color: "#798A9F",
      styleWord: "black"
    };
    setState(newState);
  }



  function loseWordColor() {
    state.styleWord = "red";
    setState({ ...state, styleWord: state.styleWord });
  }

  function winWordColor() {
    state.styleWord = "green";
    setState({ ...state, styleWord: state.styleWord });
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
      wordToShow();
    }
  }

  function wordToShow() {

    for (let i = 0; i < (state.randomWord.length * 2); i++) {
      if (i % 2 == 0) {
        state.showedWord.push("_");
      }
      else {
        state.showedWord.push(" ");
      }
    }
    setState({ ...state, showedWord: state.showedWord })
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
        state={state}
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
        state={state}
        setState={setState}
        loseWordColor={loseWordColor}
        winWordColor={winWordColor}
        lockGame={lockGame}
      />
    </div>
  );
}


