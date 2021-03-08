var janela = null;
var moverParaDireitaButton = null;

$(function () {
    janela = $('#janela');
    moverParaDireitaButton = $('#moverParaDireitaButton');

    if (janela && moverParaDireitaButton) {
        moverParaDireitaButton.click(moverObjeto);
    }
});

// Funcao para mover objeto
function moverObjeto() {
    /* $(elemento).animate () = Faz uma animacao baseado em parametros no elemento 
     * -- properties = Propriedades da animacao 
     * -- duration = Duracao da animacao 
     * -- easing = Indica qual funcao de "easing" sera usada 
     * -- complete = Qual funcao sera chamada quando terminar a animacao*/
    janela.animate({ left: 300 }, 1000, "linear", function () {
        alert('Finalizou a animação!');
    });
}