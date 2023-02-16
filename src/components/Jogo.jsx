import { LeftSide, RightSide, Button, Game, HangmanImage, ButtonsPanel, WordFinding, WordFailedTry, WordSucessfully } from "../styles";

export default function Jogo() {
    const defaultState = "../../assets/img/forca0.png";
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