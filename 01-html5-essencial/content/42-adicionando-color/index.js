
document.addEventListener('DOMContentLoaded', () => {
    const corInput = document.querySelector('#corInput');
    const output = document.querySelector('output');
    if (corInput && output) {
        corInput.addEventListener('change', function () {
            output.innerHTML = this.value;
        });
    }
});