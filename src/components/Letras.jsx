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
    // let [backGroundColor, setBackGroundColor] = React.useState("#E1ECF4");
    // let [color, setcolor] = React.useState("#39739D");


    function letterDisable(w) {
        // const letterColor = "#798A9F";

        // props.changingLettersBoxColor.backGroundColor = "#9FAAB5";
        // props.changingLettersBoxColor.color = "#798A9F";
        // props.changingIndividualLetterBoxColor({
        //     ...props.changingLettersBoxColor,
        //     backGroundColor: props.changingLettersBoxColor.backGroundColor,
        //     color: props.changingLettersBoxColor.color
        // });
        // alert(w);

        backGroundColor = "#9FAAB5";
        // backGroundColor = "blue";
        setBackGroundColor(backGroundColor)
        color = "#798A9F";
        // color = "red";
        setcolor(color);
    }

    return (
        <>
            {/* <LetterStyleBox onClick={() => {letterDisable(props.letra); alert("2");}} backGroundColor={backGroundColor}> */}
            <LetterStyleBox
                disabled={props.ableLettersButton}
                onClick={() => {
                    letterDisable(props.letra);
                    props.checkWord(props.letra);
                }}
                backGroundColor={props.changingLettersBoxColor.gameStatus ? backGroundColor : props.changingLettersBoxColor.backGroundColor}
                color={props.changingLettersBoxColor.gameStatus ? color : props.changingLettersBoxColor.color}
            >
                {props.letra}
            </LetterStyleBox>
        </>
    );
}