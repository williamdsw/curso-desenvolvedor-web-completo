'use strict';

const output = document.querySelector('output');

// 'repeat (number)' = Funcao que permite repetir o conteudo a string 'n' vezes
let repetida = 'Conteúdo '.repeat(10);

if (output) {
    output.innerText += `${repetida} \n`;
}

let estatisticas =
{
    gols(numero) {
        if (output) {
            output.innerText += `${'Gol '.repeat(numero)} \n`;
        }
    },

    desarmes(numero) {
        if (output) {
            output.innerText += `${'Desarme '.repeat(numero)} \n`;
        }
    }
};

estatisticas.gols(5);
estatisticas.desarmes(10);