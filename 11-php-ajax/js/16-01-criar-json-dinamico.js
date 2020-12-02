"use strict";

$(document).ready (function ()
{
    $("button#botao").click (function ()
    {
        carregarDados ();
    });

    function carregarDados ()
    {
        $.getJSON ("16-02-gerar-json.php", function (data)
        {
            $("div#listagem").show ();
            
            let elemento = "";
            elemento += "<ul>";

            $.each (data, function (index, valor)
            {
                elemento += `<li class="nome"> ${valor.nomeproduto} </li>`;
                elemento += `<li class="preco"> ${valor.precounitario} </li>`;
                elemento += `<li class="imagem"><img src="../${valor.imagempequena}" alt="imagem"></li>`;
            });

            elemento += "</ul>";
            $("div#listagem").html (elemento);
        });
    }
});