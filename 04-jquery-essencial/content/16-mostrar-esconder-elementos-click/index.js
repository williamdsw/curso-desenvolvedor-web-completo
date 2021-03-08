var janela = null;
var mostrarEsconderButton = null;
var esconderButton = null;

// Quando carregar JQuery...
$(function () {
    janela = $('#janela');
    mostrarEsconderButton = $('#mostrarButton');
    esconderButton = $('#esconderButton');

    if (janela && mostrarEsconderButton && esconderButton) {
        janela.hide();
        mostrarEsconderButton.click(mostrarElemento);
        esconderButton.click(esconderElemento);
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