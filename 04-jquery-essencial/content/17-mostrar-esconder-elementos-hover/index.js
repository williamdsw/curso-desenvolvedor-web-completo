var janela = null;
var mostrarEsconderButton = null;

// Quando carregar JQuery...
$(function () {
    janela = $('#janela');
    mostrarEsconderButton = $('#mostrarEsconderButton');

    if (janela && mostrarEsconderButton) {
        janela.hide();

        /* $(elemento).hover (callback, callback) = Evento para quando o mouse passar em cima e sair.
         * Recebe dois parametros que sao funcoes (callbacks). 
         * A primeira para quando for "hoveron"
         * A segunda para quando for "hoveroff" */
        mostrarEsconderButton.hover(mostrarElemento, esconderElemento);
    }
});

// Funcao para exibir elemento
function mostrarElemento() {
    // $(elemento).show () = Exibe elemento
    janela.show();
}

// Funcao para esconder elemento
function esconderElemento() {
    // $(elemento).hode () = Esconde elemento
    janela.hide();
}