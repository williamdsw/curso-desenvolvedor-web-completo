'use strict';

const output = document.querySelector('output');

function print(content) {
    if (output) {
        output.innerText += `${content} \n`;
    }
}

// 'Generator' = Retorna uma funcao geradora
function* gen() {
    yield 'String de Teste';
    yield 2;
    yield 3.14;
}

let generator = gen();

// 'next ()' = Retorna o proximo 'yield'
print(`${generator.next().value}`);
print(`${generator.next().value}`);
print(`${generator.next().value}`);
print(`${generator.next().value}`);

function* idCriador() {
    let i = 0;

    while (true) {
        yield i++;
    }
}

let criador = idCriador();

// 'value' = Retorna o valor informado pelo 'yield'
print(`${criador.next().value}`);
print(`${criador.next().value}`);
print(`${criador.next().value}`);
print(`${criador.next().value}`);
print(`${criador.next().value}`);