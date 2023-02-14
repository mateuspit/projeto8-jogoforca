export default function Letras() {
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    return (
        <>
            {alfabeto.map(w => (
                <div className="word">
                    <Letra key={w} letra={w} />
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