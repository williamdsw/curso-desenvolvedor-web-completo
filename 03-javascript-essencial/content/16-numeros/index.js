var numberInputs = document.querySelectorAll('input.number');
var button = document.querySelector('button');
var output = document.querySelector('output');

if (numberInputs && button && output) {
    numberInputs.forEach(input => {
        input.addEventListener('input', function () {
            var allFilled = false;
            if (this.value !== '') {
                numberInputs.forEach(other => {
                    if (input !== other) {
                        allFilled = (other.value !== '');
                    }
                });
            }

            button.disabled = !allFilled;
        })
    });

    button.addEventListener('click', () => {
        if (numberInputs.length === 3) {
            var x = parseInt(numberInputs[0].value);
            var y = parseInt(numberInputs[1].value);
            var z = parseInt(numberInputs[2].value);
            var concat = numberInputs[0].value + numberInputs[1].value + numberInputs[2].value;

            /**
             * Math.min (valores) = retorna o menor numero entre 2 ou mais valores
             * Math.max (valores) = retorna o maior numero entre 2 ou mais valores
             */
            var menor = Math.min(x, y, z);
            var maior = Math.max(x, y, z);

            /* Caso um numero vier como String e precisar fazer um calculo, 
            * Sera necessario converter utilizando a classe "Number" */
            var calculo = Number(concat) + 10;

            output.innerText = '';
            output.innerText += `Menor entre ${x}, ${y}, ${z} = ${menor}\n`;
            output.innerText += `Maior entre ${x}, ${y}, ${z} = ${maior}\n`;
            output.innerText += `${concat} + 10 = ${calculo}`;
        }
    });

    numberInputs.forEach(input => input.dispatchEvent(new Event('input')));
}