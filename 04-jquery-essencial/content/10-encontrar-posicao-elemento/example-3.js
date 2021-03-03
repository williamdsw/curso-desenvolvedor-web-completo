
$(document).ready(function () {
    var button = $('button');
    if (button) {
        button.click(function () {
            changeFather();
        });
    }
});

function changeFather() {
    // $(seletor).offsetParent () = Acessa e modifica os atributos do elemento pai do seletor
    var janelinha = $('#janelinha');
    if (janelinha) {
        janelinha.offsetParent().css({ 
            'background-color': '#dbde09', 
            'border': '4px dotted white' 
        });
    }
}

