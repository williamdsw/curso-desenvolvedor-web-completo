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

    escreverHabilidades1: function () {
        this.habilidades.forEach(function(skill) {
            if (output) {
                output.innerText += `${this.nome} é craque em ${skill}\n`;
            }
        }.bind(this));
    },

    escreverHabilidades2: function () {
        this.habilidades.forEach(skill => {
            if (output) {
                output.innerText += `${this.nome} é craque em ${skill}\n`;
            }
        });
    }
};

jogador.escreverHabilidades1();
jogador.escreverHabilidades2();