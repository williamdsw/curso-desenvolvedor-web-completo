'use strict';

var output = document.querySelector('output');
var loto = 40;

if (loto && output) {
    // Permite escrever com mesmo nome do var, e nao altera o valor da mesma
    let loto = 10;
    output.innerText += `Escopo Local: ${loto}\n`;
}

if (output) {
    output.innerText += `Escopo Global: ${loto}\n`;
}