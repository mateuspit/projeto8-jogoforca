import palavras from "./palavras.js";
import Letras from "./components/Letras";
import Jogo from "./components/Jogo";
import Chute from "./components/Chute";
import { Reset } from "./styles";

export default function App() {
  // console.log(palavras);

  function getRandomWord(){
    const randomNumber = Math.random();
    const randomWordPosition = Math.floor(randomNumber * palavras.length);
    const randomWord = palavras[randomWordPosition];
    return randomWord;
  }
  // const randomWord = palavras[randomWordPosition];
  // console.log(randomNumber);
  // console.log(palavras.length);
  // console.log(randomWordPosition);
  // console.log(randomWord);
  const randomWord = getRandomWord();
  console.log(randomWord);
  return (
    <div className="App">
      <Reset />
      <Jogo randomWord={randomWord}/>
      <Letras randomWord={randomWord}/>
      <Chute randomWord={randomWord}/>
    </div>
  );
}


