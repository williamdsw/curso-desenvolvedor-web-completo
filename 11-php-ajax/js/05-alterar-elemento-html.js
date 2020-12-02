"use strict";

window.onload = function ()
{
    let request;
    
    if (window.XMLHttpRequest)
    {
        request = new XMLHttpRequest ();
    }
    else 
    {
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
                var elemento = document.getElementById ("dinamico");
                elemento.innerHTML = this.responseText;
                
                var h1 = document.getElementsByTagName ("h1")[0];
                h1.innerHTML = this.responseText;
            }
        }
        else 
        {
            console.log ("Erro na operação");
        }
    };
};