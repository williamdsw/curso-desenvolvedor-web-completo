
/* Quando carregar JQuery... */
$(function (event)
{
    /* Esconde por padrao */
    $("#janela").hide ();

    /* Joga eventos click nos elementos */
    $("#btn_mostrar").click (mostrarElemento);
    $("#btn_esconder").click (esconderElemento);
});

/* Funcao para exibir elemento */
function mostrarElemento (event)
{
    /* $(elemento).show () = Exibe elemento */
    $("#janela").show ();
}

/* Funcao para esconder elemento */
function esconderElemento (event)
{
    /* $(elemento).hode () = Esconde elemento */
    $("#janela").hide ();
}