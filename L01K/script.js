//  Exercício L01K -  Elaborar um programa que efetue a apresentação do valor da conversão em dólar de um valor lido em real. O programa deve solicitar o valor da cotação do dólar e também a quantidade de reais disponível com o usuário, para que seja apresentado o valor em moeda americana.

let cotacaoDolar = parseFloat(prompt("Digite a cotação atual do dólar (R$):"));
let quantidade = parseFloat(prompt("Digite a quantidade de reais que você possui:"));

let dolar = quantidade / cotacaoDolar;

alert(`O valor convertido é: $ ${dolar.toFixed(2)}`);