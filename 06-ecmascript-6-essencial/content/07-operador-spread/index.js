'use strict';

// Operador SPREAD (...) = Permite 'abrir' o array e visualizar o conteudo

let citricas = ['Laranja', 'Tangerina', 'Limão'];
let rosaceae = ['Maçã', 'Pêra'];
let salada = ['Banana', 'Uva', ...citricas, 'Mamão', 'Abacate', ...rosaceae];
const output = document.querySelector('output');

if (output) {
    console.log(salada);
    console.log(...salada);
    output.innerText += `${salada} \n`;
}