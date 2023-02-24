import { LabelGuess, InputGuess, ButtonGuess, GuessSpot } from "../styles";


export default function Chute(props) {
    // const testWord = props.randomWord;
    // console.log(testWord);
    return (
        <GuessSpot>
            <LabelGuess>
                Já sei a palavra!
            </LabelGuess>
            <InputGuess type="text" id="guessWord">

            </InputGuess >
            {/* <ButtonGuess onClick={()=>alert("3")}> */}
            <ButtonGuess onClick={()=>alert("3")}>
                Chutar
            </ButtonGuess>
        </GuessSpot>
    );
}
