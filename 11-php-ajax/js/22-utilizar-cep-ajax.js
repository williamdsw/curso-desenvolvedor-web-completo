"use strict";

$(document).ready (function ()
{
    var CEP = "13309-309";
    
    $.ajax (
    {
        type: "GET",
        url: "https://viacep.com.br/ws/" + CEP + "/json",
        async: false
        
    }).done (function (data)
    {
        console.log (data);
    }).fail (function ()
    {
        console.log ("Erro na consulta ao CEP");
    });
});

