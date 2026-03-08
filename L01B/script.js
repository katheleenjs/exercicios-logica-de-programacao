//  Exercício L01B - Conversão de Fahrenheit para Celsius:
let fahrenheit = parseFloat(prompt("Digite a temperatura em Fahrenheit:"));

let celsius = (fahrenheit - 32) * (5 / 9);

alert("A temperatura em Celsius é: " + celsius.toFixed(1));

// console.log("Temperatura em Celsius:", celsius);