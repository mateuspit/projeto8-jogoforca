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
                    <Letra letra={w} key={index} />
                ))}
            </AllLettersSpot>
        </>
    );
}

function Letra(props) {
    // let [backGroundColor, setBackGroundColor] = React.useState("#E1ECF4");
    let [backGroundColor, setBackGroundColor] = React.useState("#9FAAB5");
    let [color, setcolor] = React.useState("#798A9F");
    // const habilitar = true;

    function enableGame() {
        setBackGroundColor("#E1ECF4");
        setcolor("#39739D");
    }

    function letterDisable(w) {
        setBackGroundColor("#9FAAB5");
        setcolor("#798A9F");
        // alert("sim");
    }

    return (
        <>
        {/* <LetterStyleBox onClick={() => {letterDisable(props.letra); alert("2");}} backGroundColor={backGroundColor}> */}
        <LetterStyleBox onClick={() => letterDisable(props.letra)} backGroundColor={backGroundColor} color={color}>
            {props.letra}
        </LetterStyleBox>
        </>
    );
}