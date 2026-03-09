//  Exercício L01F - Ler dois valores para as variáveis A e B, e efetuar a troca dos valores de forma que a variável A passe a possuir o valor da variável B e a variável B passe a possuir o valor da variável A.

let A = prompt("Digite o valor de A:");
let B = prompt("Digite o valor de B:");

let temp = A;
A = B;
B = temp;

alert(`Agora A = ${A} e B = ${B}`);