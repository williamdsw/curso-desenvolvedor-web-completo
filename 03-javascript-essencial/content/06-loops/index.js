var output = document.querySelector('output');
if (output) {

    output.innerText += 'while: 1 até 10...\n';
    var i = 1;
    while (i <= 10) {
        output.innerText += `${i}\n`;
        i++;
    }

    output.innerText += '\ndo-while: 1 até 10...\n';
    var j = 1;
    do {
        output.innerText += `${j}\n`;
        j++;
    }
    while (j <= 10);

    output.innerText += '\nfor: 1 até 10...\n';
    for (var k = 1; k <= 10; k++) {
        output.innerText += `${k}\n`;
    }
}