var input = document.querySelector('input');
var button = document.querySelector('button');
var output = document.querySelector('output');

if (input && button && output) {
    input.addEventListener('input', function () {
        button.disabled = (this.value === '');
    });

    button.addEventListener('click', () => {
        var minusculo = input.value.toLowerCase();
        var maiusculo = input.value.toUpperCase();

        output.innerText = '';
        output.innerText += `Minúsculo: ${minusculo}\n`;
        output.innerText += `Maiúsculo: ${maiusculo}\n`;
    });

    input.dispatchEvent(new Event('input'));
}