/* Declarando */
var output = document.querySelector('output');
if (output) {
    var a = 5;
    var b = 3;

    /* Comparacao de valores */
    if (a == b) {
        output.textContent = `${a} é igual a ${b}`;
    }
    else {
        output.textContent = `${a} é diferente de ${b}`;
    }
}
