import { LabelGuess, InputGuess, ButtonGuess, GuessSpot } from "../styles";


export default function Guess() {
    return (
        <GuessSpot>
            <LabelGuess>
                Já sei a palavra!
            </LabelGuess>
            <InputGuess type="text" id="guessWord">

            </InputGuess >
            <ButtonGuess>
                Chutar
            </ButtonGuess>
        </GuessSpot>
    );
}
