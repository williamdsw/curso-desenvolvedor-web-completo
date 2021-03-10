'use strict';

// Gerador
function* liquidificador(ingrediente) {
    for (let index = 0; index < ingrediente.length; index++) {
        yield ingrediente[index];
    }
}

var ingredientes = ['Leite', 'Banana', 'Nescau', 'Aveia'];
var bater = liquidificador(ingredientes);

var output = document.querySelector('output');

// Iterando a cada segundo
var id = setInterval(function () {

    // Pega proximo item (yield)
    var vitamina = bater.next();

    if (vitamina.done) {
        clearInterval(id);
        output.innerHTML += `<p> Vitamina está pronta </p>`;
    }
    else {
        output.innerHTML += `<p> ${vitamina.value} foi adicionado ao liquidificador </p>`;
    }
}, 1000);