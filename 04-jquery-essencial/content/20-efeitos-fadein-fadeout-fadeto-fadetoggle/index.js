var fadeInButton = null;
var fadeOutButton = null;
var fadeToggleButton = null;
var janela = null;

$(function () {
    fadeInButton = $('#fadeInButton');
    fadeOutButton = $('#fadeOutButton');
    fadeToggleButton = $('#fadeToggleButton');
    janela = $('#janela');

    if (fadeInButton && fadeOutButton && fadeToggleButton && janela) {
        fadeInButton.click(mostrarObjeto);
        fadeOutButton.click(esconderObjeto);
        fadeToggleButton.click(reverterObjeto);
    }
});

// Para esconder o objeto
function esconderObjeto() {
    /* $(elemento).fadeOut () = Esconde um elemento lentamente baseado no opacity
     * -- milisseconds = Numero de milissegundos para esconder o objeto */
    janela.fadeOut(500);
}

// Para exibir o objeto
function mostrarObjeto() {
    /* $(elemento).fadeIn () = Mostra um elemento lentamente baseado no opacity
     * -- milisseconds = Numero de milissegundos para mostrar o objeto */
    janela.fadeIn(500);
}

// Para exibir e esconder o objeto
function reverterObjeto() {
    /* $(elemento).fadeToggle () = Mostra / Esconde um elemento baseado no opacity
     * -- milisseconds = Numero de milissegundos para mostrar / esconder o objeto */
     janela.fadeToggle (500);
}