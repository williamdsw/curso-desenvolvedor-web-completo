"use strict";

window.onload = function ()
{
    let request;
    
    if (window.XMLHttpRequest)
    {
        /* Compatibilidade com navegadores recentes */
        request = new XMLHttpRequest ();
    }
    else 
    {
        /* Compatibilidade com navegadores antigos */
        request = new ActiveXObject ("Microsoft.XMLHTTP");
    }
    
    request.open ("GET", "../files/dados.txt", true);
    request.send ();

    request.onreadystatechange = function ()
    {
        if (this.status == 200)
        {
            if (this.readyState == 4)
            {
                console.log (this.responseText);
            }
        }
        else 
        {
            console.log ("Erro na operação");
        }
    };
};