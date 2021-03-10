"use strict";

/* "repeat (number)" = Funcao que permite repetir o conteudo a string 'n' vezes */
let repetida = "Conteúdo ".repeat (10);

console.log (repetida);
document.getElementById ("output").innerHTML = repetida;

let estatisticas =
{
    gols (numero)
    {
        console.log ("Gol ".repeat (numero));
    },
    
    desarmes (numero)
    {
        console.log ("Desarme ".repeat (numero));
    }
};

estatisticas.gols (5);
estatisticas.desarmes (10);