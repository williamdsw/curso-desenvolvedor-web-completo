'use strict';

// Declaracao
var nome;
var output = document.querySelector('output');

// Inicializacao
nome = 'Maria';

// Utilizacao
if (output) {
    output.innerText += `${nome} \n`;
}

// Declaracao
function somar(a, b) {
    return a + b;
}

// Utilizacao
if (output) {
    output.innerText += `10 + 15 = ${somar(10, 15)}`;
}