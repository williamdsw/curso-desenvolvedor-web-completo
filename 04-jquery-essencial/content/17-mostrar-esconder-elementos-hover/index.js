
/* Quando carregar JQuery... */
$(function (e)
{
    /* Esconde por padrao */
    $("#janela").hide ();

    /* $(elemento).hover (callback, callback) = Evento para quando o mouse passar em cima e sair.
     * Recebe dois parametros que sao funcoes (callbacks). 
     * A primeira para quando for "hoveron"
     * A segunda para quando for "hoveroff" */
    $("#btn_show_hide").hover (mostrarElemento, esconderElemento);
});

/* Funcao para exibir elemento */
function mostrarElemento (e)
{
    /* $(elemento).show () = Exibe elemento */
    $("#janela").show ();
}

/* Funcao para esconder elemento */
function esconderElemento (e)
{
    /* $(elemento).hode () = Esconde elemento */
    $("#janela").hide ();
}