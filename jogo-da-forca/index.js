const frutas = ["Banana", "Maçã", "Uva", "Kiwi", "Laranja", "Limão", "Pera", "Mamão", "Melancia", "Morango", "Abacaxi", "Manga", "Cereja"];

let frutaSorteada = "";
let letrasUtilizadas = [];
let tentativas = 0;

function SorteioFrutas () {
  const indice =  Math.floor(Math.random() * (frutas.length -1)); // o length serve para pegar o tamanho do array
  let frutaA = frutas[indice];
}

// Quero que ao clicar o botão "Sortear uma fruta" o usuário tente adivinhar a fruta sorteada e cada letra verificada apareça um novo elemento na tela (condições: se acertar, a letra fica na tela, se errar conta os erros e subtrai nas chances)