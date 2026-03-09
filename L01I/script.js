//  Exercício L01I - Ler dois inteiros (variáveis A e B) e imprimir o resultado do quadrado da diferença do primeiro valor pelo segundo.

let A = parseInt(prompt("Insira o valor de A:"));
let B = parseInt(prompt("Insira o valor de B:"));

let resultado = (A - B) * (A - B);

alert("O resultado é " + resultado);