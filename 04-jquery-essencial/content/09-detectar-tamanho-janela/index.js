
// Variaveis
var windowHeight = null;
var windowWidth = null;
var documentHeight = null;
var documentWidth = null;
var textoJanela = null;
var textoDocumento = null;

// Pra gerar todos os valores padroes
$(function () {
    /* WINDOW == JANELA DO NAVEGADOR 
     * DOCUMENT == TODO CONTEUDO DA PAGINA*/
    // $(elemento).height () = pega a altura do elemento
    // $(elemento).width () = pega a largura do elemento
    // Pegando altura e largura da janela
    windowHeight = $(window).height();
    windowWidth = $(window).width();

    // Pegando altura e largura do documento
    documentHeight = $(document).height();
    documentWidth = $(document).width();

    textoJanela = $('#textoJanela');
    textoDocumento = $('#textoDocumento');

    // Exibindo nos paragrafos
    if (textoJanela && textoDocumento) {
        textoJanela.html(`Altura da janela = ${windowHeight}; Largura da janela = ${windowWidth}`);
        textoDocumento.html(`Altura do documento = ${documentHeight}; Largura do documento = ${documentWidth}`);
    }
});

/* Manipulando os tamanhos de acordo com a mudanca de tamanho da janela 
 * $ (seletor).resize () = funcao de quando se redimenciona o elemento */
$(window).resize(function () {
    /* WINDOW == JANELA DO NAVEGADOR 
     * DOCUMENT == TODO CONTEUDO DA PAGINA*/
    // $ (elemento).height () = pega a altura do elemento
    // $ (elemento).width () = pega a largura do elemento
    // Pegando altura e largura da janela
    windowHeight = $(window).height();
    windowWidth = $(window).width();

    // Pegando altura e largura do documento
    documentHeight = $(document).height();
    documentWidth = $(document).width();

    // Exibindo nos paragrafos
    if (textoJanela && textoDocumento) {
        textoJanela.html(`Altura da janela = ${windowHeight}; Largura da janela = ${windowWidth}`);
        textoDocumento.html(`Altura do documento = ${documentHeight}; Largura do documento = ${documentWidth}`);
    }
});