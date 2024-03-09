// Declaração de Variávies

let nome; // (LET) Valor Manipulável
let idade;
let verifica;

nome = "Tereza"; // String
idade = 28; // Number
verifica = true; // Boolean

const altura = 1.62; // (CONST) Valor Constante

let lista = ["banana", "maçã", "uva"]; // Lista
let objeto = {nome: "Maria", idade: 18}; // Objeto



// Operadores Aritiméticos

let a = 10;

let b = 5;

let soma = a + b;
let subtracao = a - b;
let multiplicacao = a * b;
let divisao = a / b;
let resto = a % b; 


// Operadores de Atribuição

let x = 10;

x += 5; // x = x + 5  (15)
x -= 3; // x = x - 3  (12)
x *= 2; // x = x * 2  (24)
x /= 4; // x = x / 4  (06)


// Operadores de Comparação Lógica

idade = 20;
let temCNH = true;

console.log(idade > 18);  // idade é maior que 18? (TRUE)
console.log(idade === 20); // idade é igual a 20?  (TRUE)
console.log(idade !== 18); // idade é diferente de 18? (TRUE)


console.log(idade > 18 && temCNH); // a idade é maior que 18 E possui cnh? (true)
console.log(idade > 18 || temCNH); // a idade é maior que 18 OU possui cnh? (true)
console.log(!temCNH) // negação de possui cnh (false)


// Estrutura de condicional 

let hora = 12;

if(hora < 12){
    console.log("bom dia!");
} else if ( hora >= 12 && hora <= 18) {
    console.log("boa tarde!");
} else {
    console.log("boa noite!");
}


// Estruturas de repetição

for (let i=0; i<10; i++){
    console.log(i);
}

let contador = 0 
while (contador < 5){
    console.log(contador);
    contador++;
}