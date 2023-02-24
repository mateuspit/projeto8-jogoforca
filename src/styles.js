import styled, { createGlobalStyle } from "styled-components";

export const Reset = createGlobalStyle`
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
	margin:0;
	padding: 0;
	border: 0;
	font: inherit;
	font-size: 100%;
	vertical-align: baseline;
    }

    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }

    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    
`;

export const LetterStyleBoxOn = styled.button`
    background-color: #E1ECF4;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #39739D;
    border-radius: 3px;
    border: solid 1px #7AA7C7;
    margin-right: 12px;
    margin-bottom: 11px;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 16px;
`;

export const LetterStyleBoxOff = styled.button`
    background-color: #9FAAB5;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #798A9F;
    border-radius: 3px;
    border: solid 1px #7AA7C7;
    margin-right: 12px;
    margin-bottom: 11px;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 16px;
`;

export const LetterStyleBox = styled.button`
    /* background-color: #9FAAB5; */
    background-color: ${props => props.backGroundColor};
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${props => props.color};
    border-radius: 3px;
    border: solid 1px #7AA7C7;
    margin-right: 12px;
    margin-bottom: 11px;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 16px;
`;

export const AllLettersSpot = styled.div`
    width: 710px;
    height: 91px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-bottom: 56px;
    margin-top: 70px;
    margin-left: 211px ;
`;

export const LeftSide = styled.div`
`;

export const RightSide = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
`;

export const Button = styled.button`
    width: 200px;
    height: 60px;
    border-radius: 8px;
    background-color: #27AE60;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 20px;
`;

export const Game = styled.div`
    width: 933px;
    display: flex;
    justify-content: space-between;
    margin-left: 40px;
`;

export const HangmanImage = styled.img`
    width: 400px;
`;

export const ButtonsPanel = styled.div`
    display: flex;
    margin-top: 89px;
`;

export const WordFinding = styled.div`
    font-family: 'Noto Sans', sans-serif;
    font-weight: 700;
    font-size: 50px;
    margin-right: 53px;
`;

export const WordFailedTry = styled.div`
    font-family: 'Noto Sans', sans-serif;
    font-weight: 700;
    font-size: 50px;
    margin-right: 53px;
    color: red;
`;

export const WordSucessfully = styled.div`
    font-family: 'Noto Sans', sans-serif;
    font-weight: 700;
    font-size: 50px;
    margin-right: 53px;
    color: green;
`;

export const LabelGuess = styled.div`
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 20px;
    margin-right: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const InputGuess = styled.input`
    width: 353px;
    height: 40px;
    border-radius: 3px;
    border: solid 1px #CCCCCC;
    margin-right: 15px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
`;

export const ButtonGuess = styled.button`
    width: 100px;
    height: 40px;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 16px;
    color: #3C76A1;
    background-color: #E1ECF4;
    border-radius: 3px;
    border: solid 1px #7AA7C7;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const GuessSpot = styled.div`
    display: flex;
    align-items: center;
    margin-left: 231px;
    margin-bottom: 56px;
`;

