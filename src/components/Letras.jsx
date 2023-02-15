import { LetterStyleBoxOn, LetterStyleBoxOff, AllLettersSpot } from "../styles";

export default function Letras() {
    const alfabeto = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    return (
        <>
            <AllLettersSpot>
                {alfabeto.map((w, index) => (
                    <LetterStyleBoxOff>
                        <Letra key={index} letra={w} />
                    </LetterStyleBoxOff>
                ))}
            </AllLettersSpot>
        </>

    );
}

function Letra(props) {
    return (
        <>
            <div>
                {props.letra}
            </div>
        </>
    );
}