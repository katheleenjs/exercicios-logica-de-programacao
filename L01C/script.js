//  Exercício L01C - Cálculo do valor do volume de uma lata de óleo:

let raio = parseFloat(prompt("Digite o valor do raio:"));
let altura = parseFloat(prompt("Digite o valor da altura:"));
let volume = Math.PI * raio * raio * altura;

alert("O valor do volume é: " + volume.toFixed(2));