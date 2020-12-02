"use strict";

let times = ["RB Brasil", "Santos", "Palmeiras", "Novorizontino", 
             "Corinthians", "Ferroviária", "Ituano", "São Paulo"];

/* Utilizando Destructuring Assignment */
/* Consiste em pegar elementos individuais do array com [] e/ou pegar mais com o "..." */
let [primeiro, segundo, , quarto, ...resto] = times;
         
console.log (primeiro);
console.log (segundo);
console.log (quarto);
console.log (resto);

let output = document.getElementById ("output");

output.innerHTML += `<p> Primeiro time: ${primeiro} </p>`;
output.innerHTML += `<p> Segundo time: ${segundo} </p>`;
output.innerHTML += `<p> Quarto time: ${quarto} </p>`;
output.innerHTML += `<p> Resto dos times: ${resto} </p>`;
