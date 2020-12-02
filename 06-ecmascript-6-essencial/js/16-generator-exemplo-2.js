"use strict";

/* Gerador */
function* liquidificador (ingrediente)
{
    for (let i = 0; i < ingrediente.length; i++)
    {
        yield ingrediente[i];
    }
}

var ingredientes = ["Leite", "Banana", "Nescau", "Aveia"];
var bater = liquidificador (ingredientes);

var output = document.getElementById ("output");

/* Iterando a cada segundo */
var ID = setInterval (function ()
{
    /* Pega proximo item (yield)*/
    var vitamina = bater.next ();
    
    if (vitamina.done)
    {
        clearInterval (ID);
        console.log ("Vitamina está pronta");
        output.innerHTML += `<p> Vitamina está pronta </p>`;
    }
    else 
    {
        console.log (vitamina.value);
        output.innerHTML += `<p> ${vitamina.value} foi adicionado ao liquidificador </p>`;
    }
}, 1000);