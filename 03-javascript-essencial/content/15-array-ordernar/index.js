var output = document.querySelector('output');
var button = document.querySelector('button');

var selecoes = ["Brasil", "Argentina", "Inglaterra", "Belgica", "França", "Alemanha"];
var megasena = [1, 34, 9, 56, 25, 4];

if (button && output) {

    button.addEventListener('click', onSort);

    function renderArray() {
        output.innerText = '';
        output.innerText += `Seleções -> ${selecoes.join(',')}\n`;
        output.innerText += `Números da Megasena -> ${megasena.join(',')}\n`;
    }

    function onSort() {
        /* sort() = ordena o array por ordem alfabetica */
        selecoes.sort();
        megasena.sort(ordernarNumeros);
        renderArray();
    }

    /* Funciona para ordernar numeros */
    function ordernarNumeros(a, b) {
        return a - b;
    }

    renderArray();
}