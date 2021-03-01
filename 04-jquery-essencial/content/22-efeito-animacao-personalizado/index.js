
/* Funcao para mover objeto */
function moverObjeto ()
{
    /* $(elemento).animate () = Faz uma animacao baseado em parametros no elemento 
     * -- properties = Propriedades da animacao 
     * -- duration = Duracao da animacao 
     * -- easing = Indica qual funcao de "easing" sera usada 
     * -- complete = Qual funcao sera chamada quando terminar a animacao*/
    $("#janela").animate ({left: 300}, 1000, "linear", function (e)
    {
        console.log ("finalizou");
    });
}

$(function (e)
{
    $("#btn_direita").click (moverObjeto);
});