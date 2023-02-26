import { LabelGuess, InputGuess, ButtonGuess, GuessSpot } from "../styles";
import React from "react";


export default function Chute(props) {
    // const testWord = props.randomWord;
    // console.log(testWord);

    const [guessValue, setGuessValue] = React.useState('');

    function getGuess(event) {
        props.state.getInput = event.target.value;
        props.setState({ ...props.state, getInput: props.state.getInput });
        setGuessValue(props.state.getInput);

    }

    function guess() {
        if (guessValue === props.state.randomWord) {
            props.winWordColor();
            props.state.showedWord = props.state.randomWord;
            props.setState({ ...props.state, showedWord: props.state.showedWord });
            props.lockGame();
            alert("travar jogo ganhou");
        } else {
            props.loseWordColor();
            props.state.showedWord = props.state.randomWord;
            props.setState({ ...props.state, showedWord: props.state.showedWord });
            props.state.errors = 6;
            props.setState({ ...props.state, errors: props.state.errors });
            props.lockGame();
            alert("travar jogo perdeu");
        }
        props.state.getInput = "";
        props.setState({ ...props.state, getInput: props.state.getInput });
        setGuessValue(props.state.getInput);
    }

    return (
        <GuessSpot>
            <LabelGuess>
                Já sei a palavra!
            </LabelGuess>
            <InputGuess
                type="text"
                id="guessWord"
                value={guessValue}
                onChange={getGuess}
            >

            </InputGuess >
            {/* <ButtonGuess onClick={()=>alert("3")}> */}
            <ButtonGuess disabled={props.ableGuessButton} onClick={() => guess()}>
                Chutar
            </ButtonGuess>
        </GuessSpot >
    );
}
