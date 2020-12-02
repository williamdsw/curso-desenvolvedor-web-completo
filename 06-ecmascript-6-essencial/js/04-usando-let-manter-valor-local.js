"use strict";

let section = document.getElementsByTagName ("section")[0];

/* Utilizando "let" e respeitado o valor de escopo do "i" */
for (let i = 0; i < 45; i++)
{
    let div = document.createElement ("div");

    div.onclick = function (e)
    {
        alert ("Você clicou no elemento número " + i);
    };

    section.append (div);
}