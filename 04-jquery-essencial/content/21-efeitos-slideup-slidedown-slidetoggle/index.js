var slideUpButton = null;
var slideDownButton = null;
var slideToggleButton = null;
var janela = null;

$(function () {
    slideUpButton = $('#slideUpButton');
    slideDownButton = $('#slideDownButton');
    slideToggleButton = $('#slideToggleButton');
    janela = $('#janela');

    if (slideUpButton && slideDownButton && slideToggleButton && janela) {
        slideUpButton.click(esconderObjeto);
        slideDownButton.click(mostrarObjeto);
        slideToggleButton.click(reverterObjeto);
    }
});

// Para esconder o objeto
function esconderObjeto() {
    /* $(elemento).slideUp () = Esconde um elemento "subindo"
     * -- milisseconds = Numero de milissegundos para esconder o objeto */
    janela.slideUp (500);
}

// Para exibir o objeto
function mostrarObjeto() {
    /* $(elemento).slideDown () = Mostra um elemento "descendo"
     * -- milisseconds = Numero de milissegundos para mostrar o objeto
     * -- callback () = Funcao a ser executada depois da animacao */
    janela.slideDown (500, function (e)
    {
        alert ("Finalizou Slide Down");
    });
}

// Para exibir e esconder o objeto
function reverterObjeto() {
    /* $(elemento).slideToggle () = Mostra / Esconde um elemento "subindo" e "descendo"
     * -- milisseconds = Numero de milissegundos para mostrar / esconder o objeto */
     janela.slideToggle (500);
}