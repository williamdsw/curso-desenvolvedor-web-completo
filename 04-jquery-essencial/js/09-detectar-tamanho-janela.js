
/* Variaveis */
var windowHeight;
var windowWidth;
var documentHeight;
var documentWidth;

/* Pra gerar todos os valores padroes */
$(function ()
{
    /* WINDOW == JANELA DO NAVEGADOR 
     * DOCUMENT == TODO CONTEUDO DA PAGINA*/
    /* $(elemento).height () = pega a altura do elemento
     /* $(elemento).width () = pega a largura do elemento */
    /* Pegando altura e largura da janela */
    windowHeight = $(window).height ();
    windowWidth = $(window).width ();

    /* Pegando altura e largura do documento */
    documentHeight = $(document).height ();
    documentWidth = $(document).width ();

    /* Exibindo nos paragrafos */
    $("#texto_janela").html (`Altura da janela = ${windowHeight}; Largura da janela = ${windowWidth}`);
    $("#texto_documento").html (`Altura do documento = ${documentHeight}; Largura do documento = ${documentWidth}`);
});

/* Manipulando os tamanhos de acordo com a mudanca de tamanho da janela 
 * $ (seletor).resize () = funcao de quando se redimenciona o elemento */
$(window).resize (function ()
{
    /* WINDOW == JANELA DO NAVEGADOR 
     * DOCUMENT == TODO CONTEUDO DA PAGINA*/
    /* $ (elemento).height () = pega a altura do elemento
     /* $ (elemento).width () = pega a largura do elemento */
    /* Pegando altura e largura da janela */
    windowHeight = $(window).height ();
    windowWidth = $(window).width ();

    /* Pegando altura e largura do documento */
    documentHeight = $(document).height ();
    documentWidth = $(document).width ();

    /* Exibindo nos paragrafos */
    $("#texto_janela").html (`Altura da janela = ${windowHeight}; Largura da janela = ${windowWidth}`);
    $("#texto_documento").html (`Altura do documento = ${documentHeight}; Largura do documento = ${documentWidth}`);
});