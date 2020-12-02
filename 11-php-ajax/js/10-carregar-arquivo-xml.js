"use strict";

$(document).ready (function ()
{
    $.ajax (
    {
        url: "../files/produtos.xml"
    }).then (sucesso, falha);
    
    function sucesso (arquivo)
    {
        console.log (arquivo);
        
        var elemento;
        elemento = "<ul>";
        
        /* "find" = Funcao que procura por especifica tag, id, class 
         * "each" = Funcao que faz iteracao por uma colecao */
        $(arquivo).find ("produto").each (function ()
        {
            var nomeProduto = $(this).find ("nomeproduto").text ();
            var precoUnitario = $(this).find ("precounitario").text ();
            
            elemento += `<li> ${nomeProduto} - ${precoUnitario} </li>`
        });
        
        elemento += "</ul>";
        $("div#listagem").html (elemento);
    }
    
    function falha ()
    {
        $("div#mensagem").html ("Falha no carregamento do arquivo XML");
    }
});