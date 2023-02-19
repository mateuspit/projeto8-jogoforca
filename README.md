<div align="center">
<img title="a title" alt="Alt text" src="https://img.pikbest.com/png-images/20190918/cartoon-snail-loading-loading-gif-animation_2734139.png!bw700">
</div>


# Informações sobre o projeto!

### Acesse o projeto: <a href="https://mateuspit.github.io/projeto7-instagramreact/"> 🔗 Instagram react </a>

Acesse informações sobre o projeto:
<div align="center"><h3>
<a href="#Contextualizacao"> 🪧 Contextualização</a><br>
<a href="#Tecnologias"> 👨‍💻 Tecnologias utilizadas<br></a>
<a href="#Requisitos"> 📜 Requisitos do projeto<br></a>
</h3></div>


## <div id="Contextualizacao"> 🪧 Contextualização:</div><br>
Este projeto foi desenvolvido para trabalhar os conceitos aprendidos sobre React mais especificamente: conceito de componentização, as props dos componentes do React e, por fim, estado do componente utilizando useState. Este é o primeiro projeto de React, portanto, tem baixa complexidade.<br><br>

## <div id="Tecnologias"> 👨‍💻 Tecnologias utilizadas:</div><br>
Neste projeto foram utilizados HTML, CSS, JavaScript e React. Todo o projeto foi versionado utilizando git e github. O projeto foi codificado utilizando o editor de texto, VS Code.<br><br>

## <div id="Requisitos"> 📜 Requisitos do projeto:</div><br>
- Manipule o HTML usando somente React.<br>
- Você deve criar o projeto com o create-react-app padrão, SEM usar nenhum template, e delete os arquivos que não serão utilizados.<br>
- Seu projeto deverá ser desenvolvido utilizando Git e GitHub.<br>
- Não é permitido o uso de useEffect!<br>
- O seu jogo deverá ter 3 componentes:<br>
    <details>
    <summary>    
        Componentes
    </summary>
  - App<br>
  - Jogo<br>
  - Letras<br>
  - Mantenha todos os estados da aplicação no App e passe seus valores como props para os componentes que precisarem! <br>
  <div align="center"><img title="a title" alt="Alt text" src="./public/assets/states.png"></div>
   </details><br>
- Crie um arquivo chamado palavras.js e coloque ele dentro da pasta src (o nome e o local precisam ser esses ou a avaliação falhará!).<br>
- Dentro do arquivo, insira o array de palavras disponibilizado abaixo:
  <details>
      <summary>    
          Arquivo de palavras.
      </summary>

  ```jsx
      const palavras = [
        "abacate", "abacaxi", "abelha", "abanador", "antologia", "amor", "aba", "abrigo", "abrir",
        "banana", "boi", "batata", "bacalhau", "bexiga", "bowl", "batedeira", "bisturi", "barreira", "banco",
        "caixa", "chantilly", "cachorro", "cuidado", "caneta", "carinho", "cabra", "cesto",
        "dados", "dizer", "danone", "dente", "diamante", "diafragma", "detonar", "dia",
        "elefante", "esmeralda", "esfinge", "esfera", "encontro", "ema", "escola", "economia",
        "formiga", "fama", "festa", "fiador", "ferver", "flauta", "figo", "fiapo", "fotografia",
        "goiaba", "gelo", "grito", "guria", "goleiro", "golfinho", "golfe", "girar",
        "harmonia", "haste", "hectare", "hepatite", "hiena", "hidrante",
        "igreja", "importante", "idoso", "irado", "identidade", "idioma", "idade", "idiota",
        "jantar", "jumento", "jararaca", "janela", "jerimum", "jaula", "jabuti", "jaleco",
        "laranja", "lua", "luz", "lindo", "lacraia", "lactose", "lacrar",
        "manga", "morango", "mico", "matar", "mingau", "moqueca", "mocassin",
        "nectarina", "nada", "navio", "namorado", "ninja", "natal", "narciso", "narina", "nabo",
        "ovo", "ostra", "obstetra", "orangotango", "olhar", "ortodoxo", "ouro", "ornamento",
        "pato", "polvo", "povoar", "pano", "princesa", "pizza", "patroa",
        "queijo", "quitanda", "quinta", "quantia", "quarentena", "quadrilha", "quaresma", "quartzo", "quebrar",
        "risada", "rio", "remar", "rato", "racional", "rainha", "radioatividade", "raiz", "raiva", "rachadura",
        "salada", "salamandra", "sacola", "siri", "sabre", "sucarose", "sabedoria", "sacerdote",
        "tatu", "tabacaria", "taberneiro", "torrada", "tamanho", "tatuagem", "trem",
        "uva", "universo", "unanimidade", "ubuntu", "universidade", "urso", "uivar", "unir",
        "vela", "valeta", "vacilo", "valor", "vagem", "vadiagem", "vaca", "valentia", "vidro", "valsa",
        "xadrez", "xilofone", "xarope", "xenofobia", "xereta", "xerife", "xaveco", "xixi", "xale",
        "zebra", "zagueiro", "zero", "zoeira", "zepelim", "zinco", "zumbido"
      ]
      export default palavras
  ```
  </details><br>
  
     - Esse array possui strings que serão as palavras que o jogador deverá adivinhar. Você deverá importar esse array no componente App para utilizá-lo. <br>
     - Você não deve mudar o nome do array nem o export! Mas se quiser mudar o conteúdo para adicionar palavras, fique à vontade! 😄<br>
     - Deixe somente as palavras nesse arquivo. **Não exporte nem implemente mais nada no arquivo** (como uma função para escolher uma palavra, por exemplo), pois o arquivo poderá ser substituído ao longo da avaliação automática.<br>
- Os botões de letras devem ser mapeados através de um array do alfabeto:
    <details>
      <summary>    
          Array do alfabeto
      </summary>
        
     ```jsx
        const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
     ```
  </details>
- Antes de o jogo iniciar, o input e os botões de letras devem estar desabilitados.
  - Os botões desabilitados **devem** possuir o atributo `disabled` no HTML. 
- Ao apertar “Escolher Palavra”
  - Letras passam a ficar habilitadas.
  - A contagem de erros nesse momento é 0, a imagem da forca vazia é mostrada.
  - Você deve sortear uma das palavras do array que está no arquivo palavras.js para o usuário tentar adivinhar.
  - Aparece a palavra a ser adivinhada na tela, com um *underline* ( `_` ) para cada letra que a palavra possui. 
- Ao pressionar uma letra
  - O botão de uma letra já clicada deve ficar desabilitado.
  - Se a palavra escolhida no jogo tiver a letra que o usuário apertou:
    - O underline da posição correspondente à letra deve ser substituído pela letra em si.
    - As palavras disponibilizadas não possuem caracteres especiais, então não precisa se preocupar com isso!
  - Se a palavra escolhida no jogo NÃO tiver a letra que o usuário apertou:
    - Sua contagem de erros deve aumentar.
    - A imagem na forca deve mudar (forca0 > forca1 > forca2… e assim sucessivamente).
- Fim de jogo
  - Botões de letras devem ser desabilitados.
  - Caso o usuário ganhe:
    - Quando o usuário ganha, a palavra completa fica em verde e os botões voltam a ficar desabilitados.
    - Para continuar a jogar, o usuário deve apertar o botão “Escolher Palavra”, e o jogo será reiniciado do zero.
  - Caso o usuário perca:
    - A imagem final que deve aparecer é a do boneco enforcado (forca6).
    - A palavra deve ser revelada, mas em vermelho.
- Deploy
  - Ao terminar o projeto, você obrigatoriamente deverá realizar o deploy utilizando a Vercel.
<details>
<summary>
Bônus (Requisitos opcionais)
</summary>
  
- A qualquer momento, o usuário pode reiniciar o jogo pressionando o botão “escolher palavra”.<br>
- Uma nova palavra é sorteada e jogo deve voltar ao estado inicial (0 erros, imagem inicial da forca, palavra apenas com risquinhos, todos os botões de letras habilitados).<br>
- Input de chute<br>
  - Crie um novo componente no seu projeto chamado Chute. Esse componente deverá ter um input e um botão onde o usuário poderá chutar a palavra inteira caso ele deseje<br>
  - Ao fazer isso, se acertar a palavra, ele ganha imediatamente.<br>
    - A palavra correta aparece completa e na cor verde<br>
  - Mas, se errar, ele perde imediatamente, independente da contagem anterior de erros. A imagem que deve aparecer nesse momento é a do bonequinho enforcado (forca6).<br>
  - O input deve ser desabilitado em dois casos: antes de iniciar o jogo e depois de finalizar (ganhar ou perder)<br>
- Considerar caracteres especiais<br>
  - Quando o usuário pressionar uma letra sem acento (ex: a) e, na palavra, houver a mesma letra mas com acento (ex: à, á, â, ã), ela deve ser considerada como certo.<br>
  - Além dos acentos, considere também que c e ç são equivalentes.<br>
</details>
<summary>
Caso faça esse desafio, substitua o array de palavras por este novo.
</summary>



