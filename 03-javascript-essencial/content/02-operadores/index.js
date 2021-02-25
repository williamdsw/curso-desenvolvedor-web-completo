
const numberInputs = document.querySelectorAll('input.numbers');
const button = document.querySelector('button');
const output = document.querySelector('output');

if (numberInputs && numberInputs.length != 0 && button && output) {
    numberInputs.forEach(input => {
        input.addEventListener('input', function () {
            var allFilled = false;
            if (this.value !== '' && parseInt(this.value) !== NaN) {
                numberInputs.forEach(other => {
                    if (other !== input) {
                        allFilled = other.value !== '' && parseInt(other.value) !== NaN;
                    }
                });
            }

            button.disabled = !allFilled;
        });
    });

    button.addEventListener('click', () => {
        /* Declarando variaveis e fazendo calculos */
        var primeiroValor = Number(numberInputs[0].value);
        var soma = primeiroValor;
        var subtracao = primeiroValor;
        var multiplicacao = primeiroValor;
        var divisao = primeiroValor;
        var modulo = primeiroValor;
        var potencia = primeiroValor;

        numberInputs.forEach(input => {
            if (input !== numberInputs[0]) {
                var valor = Number(input.value);
                soma += valor;
                subtracao -= valor;
                multiplicacao *= valor;
                divisao /= valor;
                modulo %= valor;
                potencia ^= valor;
            }
        });

        output.innerText = '';
        output.innerText += `Soma: ${soma}\n`;
        output.innerText += `Substração: ${subtracao}\n`;
        output.innerText += `Multiplicação: ${multiplicacao}\n`;
        output.innerText += `Divisão: ${divisao}\n`;
        output.innerText += `Módulo: ${modulo}\n`;
        output.innerText += `Potência: ${potencia}\n`;
    });
}