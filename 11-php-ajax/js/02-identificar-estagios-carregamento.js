"use strict";

window.onload = function ()
{
    let request = new XMLHttpRequest ();
    
    request.open ("GET", "../files/dados.txt", true);
    request.send ();

    /* Para funcionar e necessario estar assincrono (true) */
    request.onreadystatechange = function ()
    {
        /* Codigos do "status" 
         * 200 - OK
         * 404 - Endereco nao encontrado
         * ... */
        if (this.status == 200)
        {
            /* Codigos do "readyState" 
             * 0 - requisicao nao inicializada
             * 1 - conexao estabelecida com o servidor
             * 2 - requisicao recebida
             * 3 - processando requisicao
             * 4 - requisicao finalizada */
            console.log ("readyState: " + this.readyState);

            if (this.readyState == 3)
            {
                console.log ("Ajax carregando...");
            }

            if (this.readyState == 4)
            {
                console.log ("Ajax carregou...");
            }
        }
    };
};