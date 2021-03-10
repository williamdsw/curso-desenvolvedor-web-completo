"use strict";

var loto = 40;

if (loto)
{
    /* Permite escrever com mesmo nome do var, e nao altera o valor da mesma */
    let loto = 10;
    console.log ("Escopo Local : " + loto);
}

console.log ("Escopo Global : " + loto);