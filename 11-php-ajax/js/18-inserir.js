"use strict";

$(document).ready (function ()
{
    $("#formulario_transportadora").submit (function (ev)
    {
        /* Serve para nao ativar a "action" do form */
        ev.preventDefault ();
        inserirFormulario ($(this));
    });
    
    function inserirFormulario (dados)
    {
        $.ajax (
        {
            /* Parametros do ajax */
            type: "POST",
            data: dados.serialize (),
            url: "18-02-inserir.php",
            async: false
        }).then (sucesso, falha);
        
        function sucesso (data)
        {
            /* Dados do retorno */
            data = $.parseJSON (data);
            let sucesso = data.sucesso;
            let mensagem = data.mensagem;
            
            /* Exibe mensagem */
            $("div#mensagem").show ();
            $("div#mensagem p").html (mensagem);
        }
        
        function falha (data)
        {
            /* Exibe mensagem */
            $("div#mensagem").show ();
            $("div#mensagem p").html ("Erro na requisição");
        }
    }
});