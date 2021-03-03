
$(function () {
    var janela = $('#janela');
    var janelinha = $('#janelinha');
    var output = $('output');
    if (janela && janelinha && output) {
        /* POSITION = RETORNA A POSICAO DE ACORDO COM O ELEMENTO PAI 
        * $(seletor).position ().top = retorna o valor da posicao 'top' do elemento * 
        * $(seletor).position ().left = retorna o valor da posicao 'left' do elemento */
        var janelaTop = janela.position().top;
        var janelaLeft = janela.position().left;
        var janelinhaTop = janelinha.position().top;
        var janelinhaLeft = janelinha.position().left;

        /* OFFSET = RETORNA A POSICAO RELATIVA DO ELEMENTO AO BODY (DOCUMENT) 
         * $(seletor).offset ().top = retorna o valor da posicao 'top' do elemento em relacao ao body * 
         * $(seletor).offset ().left = retorna o valor da posicao 'left' do elemento em relacao ao body */
        var janelinhaOffsetTop = janelinha.offset().top;
        var janelinhaOffsetLeft = janelinha.offset().left;

        // Printando
        output.html('');
        output.html(`<p> janela position = [${janelaTop}, ${janelaTop}] </p>`);
        output.html(output.html() + `<p> janelinha position = [${janelinhaTop}, ${janelinhaLeft}] </p>`);
        output.html(output.html() + `<p> janelinha offset = [${janelinhaOffsetTop}, ${janelinhaOffsetLeft}] </p>`);
    }
});