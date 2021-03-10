'use strict';

// Template String permite utilizar variaveis dentro de um texto sem concatenar
let nome = "William";
let template = `Boa tarde, ${nome}`;
const output = document.querySelector('output');

if (output) {
    output.innerHTML = template;
}