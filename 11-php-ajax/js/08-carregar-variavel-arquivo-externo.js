"use strict";

$(document).ready (function ()
{
    /* "ajax" = Abre uma requisicao */
    $.ajax (
    {
        /* "url" = Parametro para URL da requisicao */
        url: "nome.php"
        
        /* "then" = Funcao que aceita callbacks de sucesso, erro e progresso */
    }).then (sucesso, falha);
    
    function sucesso (valor)
    {
        $("div#nome").html (valor);
    }
    
    function falha (valor)
    {
        $("div#nome").html ("Falha no carregamento");
    }
});