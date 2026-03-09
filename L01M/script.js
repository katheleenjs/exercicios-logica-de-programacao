//  Exercício L01M - Elaborar um programa que efetue a leitura de três valores (A, B e C) e apresente como resultado final o quadrado da soma dos três valores lidos.

let A = parseFloat(prompt("Digite o valor de A:"));
let B = parseFloat(prompt("Digite o valor de B:"));
let C = parseFloat(prompt("Digite o valor de C:"));

let resultado = A + B + C;
let resultadoFinal = resultado * resultado;

alert(`O quadrado da soma dos três valores é de: ${resultadoFinal.toFixed(2)}`);