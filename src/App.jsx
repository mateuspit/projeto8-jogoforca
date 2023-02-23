import palavras from "./palavras.js";
import Letras from "./components/Letras";
import Jogo from "./components/Jogo";
import Guess from "./components/Guess";
import { Reset } from "./styles";

export default function App() {
  console.log(palavras);
  return (
    <div className="App">
      <Reset />
      <Jogo />
      <Letras />
      <Guess />
    </div>
  );
}


