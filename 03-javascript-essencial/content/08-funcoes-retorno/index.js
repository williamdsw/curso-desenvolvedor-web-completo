const input = document.querySelector('input');
const button = document.querySelector('button');
const output = document.querySelector('output');

if (input && button && output) {
    input.addEventListener('input', function () {
        button.disabled = (this.value === '');
    });

    button.addEventListener('click', () => {
        var fahreinheit = converterTemperatura(Number(input.value));
        output.textContent = `Temperatura em Fahreinheit = ${fahreinheit}`;
    });
}

/* Funcao de retorno e com parametro */
function converterTemperatura(celsius) {
    /* Variavel de retorno */
    var fahreinheit = (celsius * 1.8) + 32;

    /* Necessario para retornar o valor */
    return fahreinheit;
}