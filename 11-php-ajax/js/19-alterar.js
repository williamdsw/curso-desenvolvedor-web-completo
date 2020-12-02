"use strict";

$(document).ready (function ()
{
    $("#formulario_transportadora").submit (function (ev)
    {
        /* Serve para nao ativar a "action" do form */
        ev.preventDefault ();
        atualizarFormulario ($(this));
    });
    
    function atualizarFormulario (dados)
    {
        $.ajax (
        {
            /* Parametros do ajax */
            type: "POST",
            data: dados.serialize (),
            url: "19-02-alterar.php",
            async: false
        }).done (function (data)
        {
            /* Dados do retorno */
            data = $.parseJSON (data);
            let sucesso = data.sucesso;
            let mensagem = data.mensagem;
            $("div#mensagem p").html (mensagem);
            
        }).fail (function ()
        {
            $("div#mensagem p").html ("Erro na sistema, tente mais tarde.");
            
        }).always (function ()
        {
            $("div#mensagem").show ();
        });
    }
});