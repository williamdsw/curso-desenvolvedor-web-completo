var output = document.querySelector('output');
if (output) {
    /* Declarando "String" e "Numeric" */
    var cpf = "333";
    var numero = 333;

    /* "===" : Compara o valor e o tipo das variaveis */
    if (cpf === numero) {
        output.innerText = `"333" e 333 são iguais em valores e tipagem`;
    }
    else {
        output.innerText = `"333" e 333 não são iguais em valores e tipagem`;
    }
}