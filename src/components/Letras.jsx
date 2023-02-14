import LettersStyle from "../styles";

export default function Letras() {
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    return (
        <>
            {alfabeto.map((w, index) => (
                <div className="word">
                    <LettersStyle>
                        <Letra key={index} letra={w} />
                    </LettersStyle>
                </div>
            ))}
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