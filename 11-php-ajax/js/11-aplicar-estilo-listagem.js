"use strict";

$(document).ready (function ()
{
    $.ajax (
    {
        url: "../files/produtos.xml"
    }).then (sucesso, falha);
    
    function sucesso (arquivo)
    {
        var elemento;
        elemento = "<ul>";
        
        $(arquivo).find ("produto").each (function ()
        {
            var nomeProduto = $(this).find ("nomeproduto").text ();
            var precoUnitario = $(this).find ("precounitario").text ();
            
            elemento += `<li class="nome"> ${nomeProduto} </li>`;
            elemento += `<li class="preco"> ${precoUnitario} </li>`;
        });
        
        elemento += "</ul>";
        $("div#listagem").html (elemento);
    }
    
    function falha ()
    {
        $("div#mensagem").html ("Falha no carregamento do arquivo XML");
    }
});