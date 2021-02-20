
document.addEventListener('DOMContentLoaded', () => {
    const numeroFilhosInput = document.querySelector('#numeroFilhosInput');
    if (numeroFilhosInput) {
        numeroFilhosInput.addEventListener('change', function () {
            mostrarResultado(this.value);
        });

        let event = new Event('change');
        numeroFilhosInput.dispatchEvent(event);
    }
});

function mostrarResultado(valor) {
    const resultadoSpan = document.querySelector('#resultadoSpan');
    if (resultadoSpan) {
        resultadoSpan.innerHTML = valor;
    }
}