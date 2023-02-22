import palavras from "./palavras.js";
import Letras from "./components/Letras";
import Jogo from "./components/Jogo";
import Guess from "./components/Guess";
import "./styles/reset.css"
import "./styles/style.css"

export default function App() {
  console.log(palavras);
  return (
    <div className="App">
      <Jogo />      
      <Letras />
      <Guess/>
    </div>
  );
}


