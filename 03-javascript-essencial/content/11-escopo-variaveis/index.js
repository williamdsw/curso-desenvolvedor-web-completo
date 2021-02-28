var salarioInput = document.querySelector('#salarioInput');
var diasInput = document.querySelector('#diasInput');
var button = document.querySelector('button');
var output = document.querySelector('output');
var bonus;

if (salarioInput && diasInput && button && output) {
    salarioInput.addEventListener('input', function () {
        button.disabled = !(this.value !== '' && diasInput.value !== '')
    });

    diasInput.addEventListener('input', function () {
        button.disabled = !(this.value !== '' && salarioInput.value !== '')
    });

    button.addEventListener('click', () => {
        var porDia = calcularDiaria(Number(salarioInput.value), Number(diasInput.value));
        output.innerText = `Recebo R$ ${porDia} por dia, com bônus de R$ ${bonus}.`;
    });
}

/* Declarando funcao com parametros */
function calcularDiaria(salario, dias) {
    bonus = 300;
    return (salario / dias).toFixed(2);
}