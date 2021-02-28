var timeInput = document.querySelector('#timeInput');
var button = document.querySelector('button');
var output = document.querySelector('output');
var infoOutput = document.querySelector('output#info');

var times = new Array('São Paulo', 'Corinthians', 'Santos', 'Palmeiras');

if (timeInput && button && output && infoOutput) {

    timeInput.addEventListener('input', function () {
        button.disabled = (this.value === '');
    });

    button.addEventListener('click', onSort);

    function renderArray() {
        output.innerText = times.join(',');
        timeInput.value = '';
    }

    function onSort() {
        var indexOf = times.indexOf(timeInput.value);
        if (indexOf === -1) {
            infoOutput.textContent = `Nenhum time encontrado!`;
        }
        else {
            infoOutput.textContent = `${timeInput.value} é o ${indexOf + 1}º time!`;
        }
    }

    var inputEvent = new Event('input');
    timeInput.dispatchEvent(inputEvent);

    renderArray();
}