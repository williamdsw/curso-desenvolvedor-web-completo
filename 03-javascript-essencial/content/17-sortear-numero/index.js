var button = document.querySelector('button');
var output = document.querySelector('output');

if (button && output) {
    button.addEventListener('click', onRandom);

    function onRandom() {
        /* Math.random() = * gera numero aleatorio entre 0.000000000000001 ... 0.999999999999999 */
        var randomico = Math.random();

        /* Multiplicando por 10, pra nao ficar so com "0" */
        var multiplicado = randomico * 10;

        /* Math.ceil() = arredonda um numero quebrado para cima 
         *               Nesse caso e util para gerar um numero entre 1 e 10 */
        var arredondado = Math.ceil(multiplicado);

        output.innerText = '';
        output.innerText += ` Numero randomico: ${randomico}\n`;
        output.innerText += ` Numero randomico multiplicado por 10: ${multiplicado}\n`;
        output.innerText += ` Numero randomico multiplicado arredondado: ${arredondado}\n`;
    }
}