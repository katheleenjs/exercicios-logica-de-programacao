//  Exercício L01J - Elaborar um programa que efetue a apresentação do valor da conversão em real de um valor lido em dólar. O programa deve solicitar o valor da cotação do dólar e também a quantidade de dólares disponível com o usuário, para que seja apresentado o valor em moeda brasileira.

let cotacaoDolar = parseFloat(prompt("Digite a cotação atual do dólar:"));
let quantidade = parseFloat(prompt("Digite a quantidade de dólares que você possui:"));
let reais = quantidade * cotacaoDolar;

alert(`O valor convertido é: R$ ${reais.toFixed(2)}`);