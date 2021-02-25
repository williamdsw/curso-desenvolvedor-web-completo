/* Declarando variaveis "String", "Int", e "Bool" */
var nome = "Trent Reznor";
var idade = 50;
var fumante = false;

var output = document.querySelector('output');
if (output) {
    output.innerText += `nome = ${nome}\n idade = ${idade}\n é fumante ? ${fumante}`;
}
