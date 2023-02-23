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

export default function Jogo() {
    const defaultState = forca0;
    const testWord = "Teste";
    let blanksSpaces = "";

    for (let i = 0; i < testWord.length; i++) {
        blanksSpaces += "<span>_ </span>";
    }

    return (
        <Game>
            <LeftSide>
                <HangmanImage src={defaultState} alt={defaultState}></HangmanImage>
            </LeftSide>
            <RightSide>
                <ButtonsPanel>
                    <Button>
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