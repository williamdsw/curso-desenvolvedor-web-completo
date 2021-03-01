
var limite;

/**
 * Funcao para mover fotos para esquerda
 * @returns {undefined}
 */
function moverFotos ()
{
    /* Anima - 200 para esquerda */
    $("#janela").animate ({left: "-=200"}, 500, function (e)
    {
        /* Comparando valor do left com limite */
        if ($("#janela").position ().left === limite)
        {
            /* Zerando left... */
            $("#janela").css ("left", 0);
        }
    });
}

$(function (e)
{
    /* Pegando numero de imagens */
    var numeroDeFotos = $("#janela img").length;

    /* Pegando largura de todas as imagens */
    var larguraFotos = $("#janela img").width ();

    /* Calculando limite */
    limite = numeroDeFotos * larguraFotos * -1;

    /* Adicionando novo elemento */
    $("#janela").append ("<img>");
    $("#janela img:last").attr ("src", "../imagens/galeria_foto_1.jpg");

    /* Executa a funcao a cada 2000 milissegundos (2 segundos) */
    setInterval (moverFotos, 2000);
});