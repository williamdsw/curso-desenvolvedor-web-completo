var output = document.querySelector('output');
if (output) {
    /* Declarando variavel */
    var a = 5;
    output.innerText += `Valor de a: ${a}\n`;

    /* Incrementando */
    a++;
    output.innerText += `Valor de a: ${a}\n`;

    /* Decrementando */
    a--;
    output.innerText += `Valor de a: ${a}`;
}