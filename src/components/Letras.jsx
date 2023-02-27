import { LetterStyleBoxOn, LetterStyleBox, LetterStyleBoxOff, AllLettersSpot } from "../styles";
import React from "react";

export default function Letras(props) {
    // const testWord = props.randomWord;
    // console.log(testWord);

    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "ç", "á", "í", "ú", "é", "ó", "ê", "ô", "â", "ã", "õ"]
    const alfabetoMostrar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];




    return (
        <>
            <AllLettersSpot>
                {alfabetoMostrar.map((w, index) => (
                    // fazer logica para letra valida ou não
                    <Letra
                        ableLettersButton={props.ableLettersButton}
                        checkWord={props.checkWord}
                        letra={w}
                        key={index}
                        gameStats={props.gameStats}
                        changingLettersBoxColor={props.changingLettersBoxColor}
                        changingIndividualLetterBoxColor={props.changingIndividualLetterBoxColor}
                    />
                ))}
            </AllLettersSpot>
        </>
    );
}

function Letra(props) {
    let [backGroundColor, setBackGroundColor] = React.useState("#E1ECF4");
    let [color, setcolor] = React.useState("#39739D");
    let [ableButton, setAbleButton] = React.useState(false);
    // let [backGroundColor, setBackGroundColor] = React.useState("#E1ECF4");
    // let [color, setcolor] = React.useState("#39739D");


    function letterDisable(w) {
        backGroundColor = "#9FAAB5";
        // backGroundColor = "blue";
        setBackGroundColor(backGroundColor)
        color = "#798A9F";
        setcolor(color);
        ableButton = true;
        setAbleButton(ableButton);
    }

    function boxColorBackGroundColor() {
        // console.log("indiviualchange: ",props.changingLettersBoxColor.individualChange);
        // console.log("indiviualchange: ",props.changingLettersBoxColor.individualChange);

        if (props.changingLettersBoxColor.gameStatus) {
            // console.log("individual!");
            console.log("INDIVIDUAL: indiviualchange: ",props.changingLettersBoxColor.individualChange);
            return backGroundColor;
        }
        else {
            // console.log("geral!");
            console.log("GERAL: indiviualchange: ",props.changingLettersBoxColor.individualChange);
            return props.changingLettersBoxColor.backGroundColor;
        }
    }

    function boxColor() {
        if (props.changingLettersBoxColor.gameStatus) {
            return color;
        }
        else {
            return props.changingLettersBoxColor.color;
        }
    }

    function boxAbleButton() {
        if (props.changingLettersBoxColor.gameStatus) {
            return ableButton;
        }
        else {
            return props.ableLettersButton;
        }
    }

    const outputBackGroundColor = boxColorBackGroundColor();
    const outputColor = boxColor();
    const outputAbleButton = boxAbleButton();



    return (
        <>
            {/* <LetterStyleBox onClick={() => {letterDisable(props.letra); alert("2");}} backGroundColor={backGroundColor}> */}
            <LetterStyleBox
                data-test="letter"
                disabled={outputAbleButton}
                onClick={() => {
                    letterDisable(props.letra);
                    props.checkWord(props.letra);
                }}
                backGroundColor={outputBackGroundColor}
                color={outputColor}
            >
                {props.letra}
            </LetterStyleBox>
        </>
    );
}