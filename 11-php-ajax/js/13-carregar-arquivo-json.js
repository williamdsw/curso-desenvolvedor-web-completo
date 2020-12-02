"use strict";

$(document).ready (function ()
{
    /* "getJSON" = Funcao especifica para ler arquivos JSON */
    $.getJSON ("../files/produtos.json", function (data)
    {
        console.log (data);
       
        /* Iterando sobre dados */
        $.each (data, function (index, valor)
        {
            console.log (valor.nomeproduto);
        });
    });
});