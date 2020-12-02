"use strict";

$(document).ready (function ()
{
    $("#janela_transportadoras ul li a.excluir").click (function (ev)
    {
        ev.preventDefault ();
        
        let ul = $(this).parent ().parent ();
        let transportadoraID = $(this).attr ("title");
        
        $.ajax (
        {
            /* Parametros do ajax */
            type: "POST",
            data: "transportadoraID=" + transportadoraID,
            url: "20-02-excluir.php",
            async: false
        }).done (function (data)
        {
            /* Dados do retorno */
            data = $.parseJSON (data);
            let sucesso = data.sucesso;
            let mensagem = data.mensagem;
            $("div#mensagem p").html (mensagem);
            
            /* Exclui lista */
            ul.fadeOut ();
            
        }).fail (function ()
        {
            $("div#mensagem p").html ("Erro na sistema, tente mais tarde.");
            
        }).always (function ()
        {
            $("div#mensagem").show ();
        });
    });
});