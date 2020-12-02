"use strict";

window.onload = function ()
{
    let request = new XMLHttpRequest ();
    
    request.open ("GET", "../files/dados.txt", true);
    request.send ();

    request.onreadystatechange = function ()
    {
        if (this.status == 200)
        {
            if (this.readyState == 4)
            {
                /* "responseText" = Retorna o conteudo da request */
                console.log (this.responseText);
            }
        }
        else 
        {
            console.log ("Erro na operação");
        }
    };
};