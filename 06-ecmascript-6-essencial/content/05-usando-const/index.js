"use strict";

/* So e possivel declarar uma unica constante no mesmo escopo */
const ANO_NASCIMENTO = 1949;

function calcularIdade (anoAtual)
{
    return anoAtual - ANO_NASCIMENTO;
}

document.getElementById ("output").innerHTML = calcularIdade (2019) + " anos ";