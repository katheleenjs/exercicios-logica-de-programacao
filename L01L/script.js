//  Exercício L01L - Elaborar um programa que efetue a leitura de três valores (A, B e C) e apresente como resultado final à soma dos quadrados dos três valores lidos.

let A = parseFloat(prompt("Digite o valor de A:"));
let B = parseFloat(prompt("Digite o valor de B:"));
let C = parseFloat(prompt("Digite o valor de C:"));

let soma = (A * A) + (B * B) + (C * C);

alert(`O resultado da soma dos quadrados dos três valores é de: ${soma.toFixed(2)}`);