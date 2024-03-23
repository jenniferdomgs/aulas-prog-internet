const frutas = ["Banana", "Maçã", "Uva", "Kiwi", "Laranja", "Limão", "Pera", "Mamão", "Melancia", "Morango", "Abacaxi", "Manga", "Cereja"];

const FrutaSorteada = frutas[Math.floor(Math.random() * frutas.length)]; // o lengt serve para pegar o tamanho do array

const letrasUtilizadas = [];
let erros = 0;

const palavra = document.getElementById("palavra");
const letrasU = document.getElementById("letrasU");
const letra = document.getElementById("letra");
const verificar = document.getElementById("verificar");

for (let i = 0; i < FrutaSorteada.length; i++) {
    palavra.innerHTML += "_ "; // coloca traço p/ cada letra da palavra sorteada
}

function verificar () { //verifica se tem cada letra dada
    if (FrutaSorteada.includes(letra.value)) {
        for (let i = 0; i < FrutaSorteada.length; i++) {
            if (FrutaSorteada[i] === letra.value) {
                palavra.innerHTML = palavra.innerHTML.substring(0, i * 2) + letra.value + palavra.innerHTML.substring(i * 2 + 1); // Substring: retorna o trecho de uma string de acordo com os números informados por parâmetro
            }
        }
    } else {
        letrasUtilizadas.push(letra.value); // push coloca algo no fim de uma array
        letrasU.innerHTML += letra.value + " ";
        erros++;
        if (erros === 5) {
            alert("Você perdeu!");
        }
    }
}

