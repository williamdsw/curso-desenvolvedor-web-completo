"use strict";

$(document).ready (function ()
{
    $.getJSON ("../files/produtos.json", function (data)
    {
        let elemento = "";
        elemento += "<ul>";
       
        $.each (data, function (index, valor)
        {
            elemento += `<li> ${valor.nomeproduto} </li>`;
            elemento += `<li> ${valor.precounitario} </li>`;
        });
        
        elemento += "</ul>";
        $("div#listagem").html (elemento);
    });
});