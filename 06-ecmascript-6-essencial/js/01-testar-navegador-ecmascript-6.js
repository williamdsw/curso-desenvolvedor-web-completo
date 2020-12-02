"use strict";

var criarNomeCompleto = function (nome = "William", sobrenome = "Santos")
{
    var nomeCompleto = nome + " " + sobrenome;
    console.log (nomeCompleto);
    document.getElementById ("output").innerHTML = nomeCompleto;
};

criarNomeCompleto ();