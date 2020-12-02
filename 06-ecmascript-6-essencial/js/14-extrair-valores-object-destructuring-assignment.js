"use strict";

let objeto = 
{
    tipo: "Guitarra",
    cor: "Preto",
    marca: "Flying V",
    numeroDeCordas: 23,
    preco: 2100.00,
    captadores: ["Intruder", "SD Dimebucker", "X2N Dimarzio"]
};

/* Utilizando Destructuring Assignment */
/* Consiste em pegar elementos individuais do object com {} */
let {tipo, marca, captadores} = objeto;

console.log (tipo);
console.log (marca);
console.log (captadores);

document.getElementById ("output").innerHTML += `<p> ${tipo} ${marca} com captadores ${captadores} </p>`;