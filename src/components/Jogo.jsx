import { LeftSide, RightSide, Button, Game, 
    HangmanImage, ButtonsPanel, WordFinding, 
    WordFailedTry, WordSucessfully } from "../styles";
import forca0 from "./../assets/img/forca0.png";
import forca1 from "./../assets/img/forca1.png";
import forca2 from "./../assets/img/forca2.png";
import forca3 from "./../assets/img/forca3.png";
import forca4 from "./../assets/img/forca4.png";
import forca5 from "./../assets/img/forca5.png";
import forca6 from "./../assets/img/forca6.png";
import React from "react";

export default function Jogo(props) {
    
    const defaultState = forca0;
    // const testWord = props.randomWord;
    let blanksSpaces = "";
    

    // console.log(testWord);

    // for (let i = 0; i < testWord.length; i++) {
    //     blanksSpaces += "<span>_ </span>";
    // }
    const variavel = false;

    return (
        <Game>
            <LeftSide>
                <HangmanImage src={defaultState} alt={defaultState}></HangmanImage>
            </LeftSide>
            <RightSide>
                <ButtonsPanel>
                    {/* <Button onClick={()=>alert("1")}> */}
                    <Button disabled={variavel} onClick={props.gameStatus}>
                        Escolher palavra
                    </Button>
                </ButtonsPanel>
                <WordSucessfully>
                    quarentena
                </WordSucessfully>
            </RightSide>
        </Game>
    );
}