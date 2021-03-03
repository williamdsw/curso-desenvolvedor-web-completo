
$(function () {
    var janela = $('#janela');
    var output = $('#output');
    if (janela && output) {
        // $ (seletor).position ().top = retorna o valor da posicao 'top' do elemento
        var positionTop = janela.position().top;

        // $ (seletor).position ().left = retorna o valor da posicao 'left' do elemento
        var positionLeft = janela.position().left;

        // Printando
        var outputText = '';
        outputText += '<p> Position top da #janela = ' + positionTop + ' </p>';
        outputText += '<p> Position left da #janela = ' + positionLeft + ' </p>';
        output.html(outputText);
    }
});