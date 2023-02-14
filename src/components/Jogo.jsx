export default function Jogo(){
    const defaultState = "../../assets/img/forca0.png";
    const testWord = "Teste";
    let blanksSpaces = "";

    for(let i = 0; i < testWord.length; i++){
        blanksSpaces += "<span>_ </span>";
    }

    return(
        <div className="game">
            <div className="leftSide">
                <img src={defaultState} alt={defaultState} />
            </div>
            <div className="rigthSide">
                <div className="buttons">
                    <div className="guess">
                        Chutar palavra
                    </div>
                    <div className="newWord">
                        Escolher palavra
                    </div>
                </div>
                <div className="word" dangerouslySetInnerHTML={{__html: blanksSpaces}}>
                    
                </div>
            </div>
                        
        </div>
    );
}