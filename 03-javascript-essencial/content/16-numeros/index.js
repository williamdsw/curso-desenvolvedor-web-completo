/* Declarando variaveis */
var x = 5;
var y = 10;
var z = 2;

/**
 * Math.min (valores) = retorna o menor numero entre 2 ou mais valores
 * Math.max (valores) = retorna o maior numero entre 2 ou mais valores
 */
var menor = Math.min (x, y, z);
var maior = Math.max (x, y, z);

/* Exibindo */
console.log ("Numero menor entre 5, 10 e 2 = " + menor);
console.log ("Numero maior entre 5, 10 e 2 = " + maior);


/* Caso um numero vier como String e precisar fazer um calculo, 
 * Sera necessario converter utilizando a classe "Number" */
var numero = "1547";
var calculo = Number (numero) + 10;

console.log (calculo);