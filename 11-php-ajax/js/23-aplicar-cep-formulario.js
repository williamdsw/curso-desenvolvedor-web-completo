"use strict";

$(document).ready (function ()
{
    $("#cep").blur (function (e)
    {
        let cep = $(this).val (); // "13309-309"
        let validador = /^[0-9]{5}-?[0-9]{3}$/;
        
        if (cep !== "")
        {
            if (validador.test (cep))
            {
                $("div#mensagem").hide ();
                let url = `https://viacep.com.br/ws/${cep}/json`;
                pesquisarCEP (url);
            }
            else 
            {
                $("div#mensagem").show ();
                $("div#mensagem p").html ("CEP inválido");
            }
        }
    });
    
    function pesquisarCEP (endereco)
    {
        $.ajax (
        {
            type: "GET",
            url: endereco,
            async: false

        }).done (function (data)
        {
            /* Dados */
            $("#bairro").val (data.bairro);
            $("#cidade").val (data.localidade);
            $("#endereco").val (data.logradouro);
            $("#estado").val (data.uf);
            
        }).fail (function ()
        {
            console.log ("Erro na consulta ao CEP");
        });
    }
});

