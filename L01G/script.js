//  Exercício L01G - Ler quatro números inteiros e apresentar o resultado da adição e multiplicação, baseando-se na utilização do conceito da propriedade distributiva. Ou seja, se forem lidas as variáveis A, B, C, e D, devem ser somadas e multiplicadas A com B, A com C e A com D. Depois B com C, B com D e por fim C com D. Perceba que será necessário efetuar seis operações de adição e seis operações de multiplicação e apresentar doze resultados de saída.

let A = parseInt(prompt("Digite o valor de A:"));
let B = parseInt(prompt("Digite o valor de B:"));
let C = parseInt(prompt("Digite o valor de C:"));
let D = parseInt(prompt("Digite o valor de D:"));

alert(`
A + B = ${A + B}
A * B = ${A * B}

A + C = ${A + C}
A * C = ${A * C}

A + D = ${A + D}
A * D = ${A * D}

B + C = ${B + C}
B * C = ${B * C}

B + D = ${B + D}
B * D = ${B * D}

C + D = ${C + D}
C * D = ${C * D}
`);

let numeros = [A, B, C, D];

for (let i = 0; i < numeros.length; i++) {
    for (let j = i + 1; j < numeros.length; j++) {

        let soma = numeros[i] + numeros[j];
        let mult = numeros[i] * numeros[j];

        console.log(`${numeros[i]} + ${numeros[j]} = ${soma}`);
        console.log(`${numeros[i]} * ${numeros[j]} = ${mult}`);

// Coloquei os números em um array e usei dois loops for para percorrer a lista e combinar cada número com os próximos evitando repetições, o primeiro percorre os números e o segundo combina cada número com os próximos elementos da lista, assim calcula automaticamente todas as somas e multiplicações entre os pares.

    }
}