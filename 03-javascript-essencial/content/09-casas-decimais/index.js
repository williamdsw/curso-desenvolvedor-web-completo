var salarioInput = document.querySelector('#salarioInput');
var diasInput = document.querySelector('#diasInput');
var button = document.querySelector('button');
var output = document.querySelector('output');

if (salarioInput && diasInput && button && output) {
    salarioInput.addEventListener('input', function () {
        button.disabled = !(this.value !== '' && diasInput.value !== '')
    });

    diasInput.addEventListener('input', function () {
        button.disabled = !(this.value !== '' && salarioInput.value !== '')
    });

    button.addEventListener('click', () => calcularDiaria(Number(salarioInput.value), Number(diasInput.value)));
}

function calcularDiaria(salario, dias) {
    /*
     * Math.round() = arredonda o valor
     * Math.ceil() = arredonda o valor para cima
     * Math.floor() = arredonda o valor para baixo
     * toFixed() = Define o numero de casas decimais para o valor
     */
    var divisao = (salario / dias);
    var arredondado = Math.round(salario / dias);
    var arredondadoCima = Math.ceil(salario / dias);
    var arredondadoBaixo = Math.floor(salario / dias);
    var fixadoEmDuas = (salario / dias).toFixed(2);
    var fixadoEmTres = (salario / dias).toFixed(3);
    var fixadoEmQuatro = (salario / dias).toFixed(4);

    output.innerText = '';
    output.innerText += `Divisão = ${divisao}\n`;
    output.innerText += `Arredondado (Round) = ${arredondado}\n`;
    output.innerText += `Arredondado pra cima (Ceil) = ${arredondadoCima}\n`;
    output.innerText += `Arredondado pra baixo (Floor) = ${arredondadoBaixo}\n`;
    output.innerText += `Fixado em duas casas = ${fixadoEmDuas}\n`;
    output.innerText += `Fixado em três casas = ${fixadoEmTres}\n`;
    output.innerText += `Fixado em quatro casas = ${fixadoEmQuatro}\n`;
}