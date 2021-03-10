'use strict';

var output = document.querySelector('output');

var criarNomeCompleto = function (nome = 'William', sobrenome = 'Santos') {
    if (output) {
        var nomeCompleto = `${nome} ${sobrenome}`;
        output.innerHTML = nomeCompleto;
    }
};

criarNomeCompleto();