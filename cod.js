// Declarando variáveis

let nome; // valor manipulável
let idade;

const altura = 1.67; // valor constante

let bol = true; // boolean
let lista = ["banana", "maçã", "uva"] // lista
let objeto = {nome: "Maria", idade: 18}; // objeto

// Operadores Aritméticos

let a = 10;
let b = 5;

let soma = a + b;
let subtracao = a - b;
let multiplicacao = a * b;
let divisao = a / b;
let resto = a % b;

// Operadores de Atribuição

x += 5; // x = x + 5 (15)
x -= 3; // x = x - 3 (12)
x *= 4; // x = x * 2 (24)
x /= 4; // x = x / 4 (6)

// Operadores de Comparação lógica

idade = 20;
let temCNH = true;

console.log(idade > 18); // idade é maior que 18/ (TRUE)

/* Igualdade solta
5 == '5' (TRUE)

Igualdade estrita
5 = '5' (FALSE)
0 == false (TRUE)
0 === false (FALSE)
*/

console.log(idade > 18 && temCNH); // a idade é maior que 18 ()

// Estrutura de condicional
let hora = 12;

if(hora < 12) {
    console.log("bom dia")
} 
else if (hora >= 12 && hora <= 18) {
    console.log("boa tarde");
}
else {
    console.log('boa noite')
}

// Estrutura de repetição while
let contador = 0;
while(contador < 5) {
    console.log(contador)
    contador ++
}

