var input = document.querySelector('input');
var button = document.querySelector('button');
var output = document.querySelector('output');

if (input && button && output) {
    input.addEventListener('input', function () {
        button.disabled = (this.value === '');
    });

    button.addEventListener('click', () => escreverNome(input.value));
}

/* Sintaxe de escrever uma funcao */
function escreverNome(nome) {
    output.textContent = `Bem vindo ${nome}!`;
}