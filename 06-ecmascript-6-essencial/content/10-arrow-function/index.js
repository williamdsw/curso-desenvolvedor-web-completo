'use strict';

const output = document.querySelector('output');

// Arrow function => Permite 'substituir' o function (e) ...
var exibeTimes = (times) => {
    if (output) {
        output.innerHTML = times.toString();
    }
}

exibeTimes(['São Paulo', 'Palmeiras', 'Santos', 'Corinthians']);