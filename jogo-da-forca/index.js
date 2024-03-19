const frutas = ["Banana", "Maçã", "Uva", "Kiwi", "Laranja", "Limão", "Pera", "Mamão", "Melancia", "Morango", "Abacaxi", "Manga", "Cereja"];

function SorteioFrutas () {
    const indice =  Math.floor(Math.random() * (frutas.length -1));
    let frutaA = frutas[indice];
}



function Forca () {
    let tentativas = "";
    let letrasOK = [""];
}

// Vetor de palavras para o jogo da forca

const inputContainer = document.getElementById("palavra");

inputContainer.innerHTML = "";

// Cria um novo input para cada letra da palavra
for (let i = 0; i < frutaA.length; i++) {
  const input = document.createElement("input");
  input.type = "text";
  input.maxLength = "1";
  input.disabled = true;
  inputContainer.appendChild(input);
}

