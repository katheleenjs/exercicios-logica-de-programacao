//  Exercício L01D - Cálculo da quantidade de combustível gasta em uma viagem, utilizando um automóvel que faz 12 Km por litro:

let tempo = parseFloat(prompt("Digite o tempo da viagem em horas:"));
while (isNaN(tempo)){
    alert("Digite um número válido!");
    tempo = parseFloat(prompt("Digite o tempo da viagem em horas:"));
}
let velocidade = parseFloat(prompt("Digite a velocidade média em km/h:"));
let distancia = tempo * velocidade;
let litrosUsados = distancia / 12;

alert(
`Velocidade média: ${velocidade} km/h
Tempo gasto: ${tempo}
Distância percorrida: ${distancia} km
Litros usados: ${litrosUsados.toFixed(2)}L`
);

// alert(
//  "Velocidade média: " + velocidade +
//  "\nTempo gasto: " + tempo +
//  "\nDistância percorrida: " + distancia +
//  "\nLitros usados: " + litrosUsados
// );