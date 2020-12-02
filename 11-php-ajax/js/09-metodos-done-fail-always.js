"use strict";

$(document).ready (function ()
{
    $.ajax (
    {
        url: "nome.php"
        
        /* "done (callback)" = Funcao de sucesso / termino */
    }).done (function (valor)
    {
        $("div#nome").html (valor);
        
        /* "fail (callback)" = Funcao de erro */
    }).fail (function (valor)
    {
        $("div#nome").html ("Falha no carregamento");
        
        /* "always (callback)" = Funcao chamada independente do sucesso / erro */
    }).always (function ()
    {
        $("div#mensagem").html ("Mensagem de qualquer coisa");
    });
});