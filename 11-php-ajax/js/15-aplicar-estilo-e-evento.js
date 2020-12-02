"use strict";

$(document).ready (function ()
{
    $("button#botao").click (function ()
    {
        carregarDados ();
    });

    function carregarDados ()
    {
        $.getJSON ("../files/produtos.json", function (data)
        {
            $("div#listagem").show ();
            
            let elemento = "";
            elemento += "<ul>";

            $.each (data, function (index, valor)
            {
                elemento += `<li class="nome"> ${valor.nomeproduto} </li>`;
                elemento += `<li class="preco"> ${valor.precounitario} </li>`;
            });

            elemento += "</ul>";
            $("div#listagem").html (elemento);
        });
    }
});