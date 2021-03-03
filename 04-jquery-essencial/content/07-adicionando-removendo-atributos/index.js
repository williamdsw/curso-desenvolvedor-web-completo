$(function () {
    // $().attr (atributo, valor) = Adiciona um atributo com valor a um seletor informado
    var link = $('.content a');
    if (link) {
        link.attr('title', 'Alpes Suiços!');
        link.attr('target', '_blank');

        // $().removeAttr (atributo) = Remove um atributo especifico do seletor informado
        link.find('img').removeAttr('alt');
    }
});