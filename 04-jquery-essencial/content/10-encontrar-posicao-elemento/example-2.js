
$(function ()
{
    /* POSITION = RETORNA A POSICAO DE ACORDO COM O ELEMENTO PAI 
     * $(seletor).position ().top = retorna o valor da posicao "top" do elemento * 
     * $(seletor).position ().left = retorna o valor da posicao "left" do elemento */
    var janelaTop = $("#janela").position ().top;
    var janelaLeft = $("#janela").position ().left;
    var janelinhaTop = $("#janelinha").position ().top;
    var janelinhaLeft = $("#janelinha").position ().left;

    /* OFFSET = RETORNA A POSICAO RELATIVA DO ELEMENTO AO BODY (DOCUMENT) 
     * $(seletor).offset ().top = retorna o valor da posicao "top" do elemento em relacao ao body * 
     * $(seletor).offset ().left = retorna o valor da posicao "left" do elemento em relacao ao body */
    var janelinhaOffsetTop = $("#janelinha").offset ().top;
    var janelinhaOffsetLeft = $("#janelinha").offset ().left;

    /* Printando */
    console.log ("Position top da #janela = " + janelaTop);
    console.log ("Position left da #janela = " + janelaLeft);
    console.log ("Position top da #janelinha = " + janelinhaTop);
    console.log ("Position left da #janelinha = " + janelinhaLeft);
    console.log ("offset top da #janelinha = " + janelinhaOffsetTop);
    console.log ("offset left da #janelinha = " + janelinhaOffsetLeft);
});