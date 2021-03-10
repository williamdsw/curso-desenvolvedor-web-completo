'use strict';

const output = document.querySelector('output');

// Objeto
let jogador = {
    // Propriedades
    nome: 'Cristiano Ronaldo',
    habilidades: [
        'Chutar', 'Driblar', 'Correr', 'Fazer gols',
        'Cobrar Falta', 'Cabecear'
    ],

    escreverHabilidades: function () {
        // O this aqui e utilizado para referenciar o objeto 'jogador'
        console.log(this.nome);
        let _this = this;

        this.habilidades.forEach(skill => {
            if (output) {
                output.innerText += `${_this.nome} é craque em ${skill}\n`;
            }
        });
    }
};

jogador.escreverHabilidades();