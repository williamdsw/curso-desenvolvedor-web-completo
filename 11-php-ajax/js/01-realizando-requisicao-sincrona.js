"use strict";

window.onload = function ()
{
    /* Instancia da API */
    let request = new XMLHttpRequest ();

    /* "open" = Abre uma requisicao com metodo informado (GET), 
     *          para a URL especificada, 
     *         informando se sera assincrono (true) ou nao (false) */
    request.open ("GET", "../files/dados.txt", false);
    
    /* "send" = Envia a request */
    request.send ();

    console.log (request);
};