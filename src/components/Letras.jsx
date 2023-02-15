import { LetterStyleBoxOn, AllLettersSpot } from "../styles";

export default function Letras() {
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    return (
        <>
            <AllLettersSpot>
                {alfabeto.map((w, index) => (
                    <LetterStyleBoxOn>
                        <Letra key={index} letra={w} />
                    </LetterStyleBoxOn>
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