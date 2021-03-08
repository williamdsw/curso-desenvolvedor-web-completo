
// Quando carregar JQuery
$(function () {

    var janela = $('#janela');
    var azulButton = $('#azulButton');
    var vermelhoButton = $('#vermelhoButton');
    var verdeButton = $('#verdeButton');

    if (janela && azulButton && vermelhoButton && verdeButton) {

        // Funcao com parametro do 'evento'
        function modificarStyle(event) {
            // Mudando CSS baseado em variaveis passadas no evento (event)
            janela.css('background-color', event.data.cor);
            janela.css('width', event.data.largura);
            janela.css('height', event.data.altura);
        }

        /* Definindo 'onclick' dos buttons
         * 1° - Passando evento 'click' 
         * 2º - Passando parametros a serem utilizados na funcao 
         * 3º - Passando funcao a ser chamada no botao */
        azulButton.on('click', { cor: 'blue', largura: '400px', altura: '400px' }, modificarStyle);
        vermelhoButton.on('click', { cor: 'red', largura: '500px', altura: '155px' }, modificarStyle);
        verdeButton.on('click', { cor: 'green', largura: '250px', altura: '500px' }, modificarStyle);
    }
});