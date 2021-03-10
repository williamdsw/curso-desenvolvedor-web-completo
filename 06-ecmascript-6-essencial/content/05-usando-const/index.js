'use strict';

// So e possivel declarar uma unica constante no mesmo escopo
const output = document.querySelector('output');
const ANO_NASCIMENTO = 1949;

function calcularIdade(anoAtual) {
    return anoAtual - ANO_NASCIMENTO;
}

if (output) {
    output.innerHTML = `${calcularIdade(2019)} anos`;
}