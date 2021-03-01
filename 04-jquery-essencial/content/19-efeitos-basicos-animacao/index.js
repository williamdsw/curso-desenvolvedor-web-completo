
$(function (e)
{
    $("#btn_mostrar").click (mostrarObjeto);
    $("#btn_esconder").click (esconderObjeto);
    $("#btn_reverter").click (reverterObjeto);
});

/* Para esconder o objeto */
function esconderObjeto ()
{
    /* $(elemento).hide () = Esconde um elemento 
     * -- milisseconds = Numero de milissegundos para esconder o objeto */
    $("#janela").hide (500);
}

/* Para exibir o objeto */
function mostrarObjeto ()
{
    /* $(elemento).show () = Mostra um elemento 
     * -- milisseconds = Numero de milissegundos para mostrar o objeto 
     * -- callback () = Funcao a ser executada depois da animacao */
    $("#janela").show (600, function ()
    {
        $("#janela").css ("background-color", "green");
    });
}

/* Para exibir e esconder o objeto */
function reverterObjeto ()
{
    /* $(elemento).toggle () = Mostra / Esconde um elemento de acordo com estado dele
     * -- milisseconds = Numero de milissegundos para mostrar o objeto */
    $("#janela").toggle (500);
}