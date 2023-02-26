import {
    LeftSide, RightSide, Button, Game,
    HangmanImage, ButtonsPanel, WordStyle
} from "../styles";
import forca0 from "./../assets/img/forca0.png";
import forca1 from "./../assets/img/forca1.png";
import forca2 from "./../assets/img/forca2.png";
import forca3 from "./../assets/img/forca3.png";
import forca4 from "./../assets/img/forca4.png";
import forca5 from "./../assets/img/forca5.png";
import forca6 from "./../assets/img/forca6.png";
import React from "react";

export default function Jogo(props) {

    let image = forca0;

    // let redModeColor = "black";

    // let [redModeColor, setRedModeColor] = React.useState("black");

    if (props.state.errors === 0) {
        image = forca0;
    }
    else if (props.state.errors === 1) {
        image = forca1;
    }
    else if (props.state.errors === 2) {
        image = forca2;
    }
    else if (props.state.errors === 3) {
        image = forca3;
    }
    else if (props.state.errors === 4) {
        image = forca4;
    }
    else if (props.state.errors === 5) {
        image = forca5;
    }
    else if (props.state.errors === 6) {
        image = forca6;
    }



    return (
        <Game>
            <LeftSide>
                <HangmanImage src={image} alt={image}></HangmanImage>
            </LeftSide>
            <RightSide>
                <ButtonsPanel>
                    {/* <Button onClick={()=>alert("1")}> */}
                    <Button onClick={props.gameStatus}>
                        Escolher palavra
                    </Button>
                </ButtonsPanel>
                <WordStyle colorWordStyle={props.state.styleWord}>
                    {props.state.showedWord}
                </WordStyle>
            </RightSide>
        </Game>
    );
}