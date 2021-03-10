'use strict';

const output = document.querySelector('output');

// Permite passar valores 'default' para parametros caso nada seja passado
function jogoEliminatorias(time1 = 'Brasil', time2 = 'Argentina') {
    if (output) {
        output.innerText += `Hoje tem ${time1} x ${time2}\n`;
    }
}

jogoEliminatorias();
jogoEliminatorias('Colombia');
jogoEliminatorias('Peru', 'Uruguai');