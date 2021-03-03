
$(function () {
    var texts = ['Clicou no botão do HTML5', 'Clicou no botão do CSS3'];
    var buttons = $('button');
    var output = $('output');
    if (buttons && output) {
        buttons.each((index, button) => {

            if (index == 0) {
                // $(elemento).click (callback) = Definindo funcao anonima para clique (click)
                $(button).click(() => output.text(texts[index]));
            }
            else {
                $(button).on('click', () => output.text(texts[index]));
            }
        });

        // Funcao 
        function mostrarMensagem() {
            output.text('Passou o mouse por cima do botão do CSS3');

            /* $(elemento).off () = Desabilita todos eventos  
             * $(elemento).off ('evento', callback) = Desabilita o evento especificado  */
            $('#cursoCssButton').off('mouseover', mostrarMensagem);
        }

        /* $(elemento).on ('evento', callback);
         * Definindo funcao declarada a cima no onmouseover */
        $('#cursoCssButton').on('mouseover', mostrarMensagem);
    }
});