//  Exercício L01E - Efetuar o cálculo e a apresentação do valor de uma prestação em atraso:

let valor = parseFloat(prompt("Digite o valor da prestação (R$):"));
let taxa = parseFloat(prompt("Digite a taxa de juros (%):"));
let tempo = parseFloat(prompt("Digite o tempo de atraso:"));

let prestacao = valor + (valor * taxa / 100) * tempo;

alert(`O valor da prestação em atraso é: R$ ${prestacao.toFixed(2)}`);