var bandaInput = document.querySelector('#bandaInput');
var pushButton = document.querySelector('#pushButton');
var unshiftButton = document.querySelector('#unshiftButton');
var popButton = document.querySelector('#popButton');
var shiftButton = document.querySelector('#shiftButton');
var output = document.querySelector('output');

var bandas = new Array('Megadeth', 'Metallica', 'Slayer', 'Anthrax');

if (bandaInput && pushButton && unshiftButton && popButton && shiftButton && output) {

    bandaInput.addEventListener('input', function () {
        pushButton.disabled = unshiftButton.disabled = (this.value === '');
    });

    pushButton.addEventListener('click', onPush);
    unshiftButton.addEventListener('click', onUnshift);
    popButton.addEventListener('click', onPop);
    shiftButton.addEventListener('click', onShift);

    function renderArray() {
        output.innerText = bandas.join(',');
        bandaInput.value = '';
        popButton.disabled = (bandas.length === 0);
        shiftButton.disabled = (bandas.length === 0);
    }

    function onPush() {
        bandas.push(bandaInput.value);
        renderArray();
    }

    function onUnshift() {
        bandas.unshift(bandaInput.value);
        renderArray();
    }

    function onPop() {
        if (bandas.length === 0) return;
        bandas.pop();
        renderArray();
    }

    function onShift() {
        if (bandas.length === 0) return;
        bandas.shift();
        renderArray();
    }

    var inputEvent = new Event('input');
    bandaInput.dispatchEvent(inputEvent);

    renderArray();
}