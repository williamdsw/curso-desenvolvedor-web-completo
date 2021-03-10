"use strict";

/* Arrow function => Permite "substituir" o function (e) ... */
let exibeTimes = (times) =>
{
    console.log (times);
    document.getElementById ("output").innerHTML = times.toString ();
};

exibeTimes (["São Paulo", "Palmeiras", "Santos", "Corinthians"]);