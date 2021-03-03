
$(function () {
    var list = $('.content ul');
    if (list) {
        // $().remove () = Remove um elemento especificado
        list.find('li:contains("Anthrax")').remove();

        // $().replaceWith () = Substitui o elemento especificado com outro elemento ou texto
        list.find('li:last').replaceWith('<li> Annihilator </li>');

        // $().wrapAll () = "Embulha" (abraca) o elemento especificado por fora (cria uma tag pai)
        list.wrapAll('<div style="border: 3px dotted #ccc;"></div>');

        // $(). wrapInner () = "Embrulha" (abraca) o elemento especificado por dentro (cria uma tag filha...)
        list.wrapInner('<div style="background-color: #f0f0f0;"></div>');
    }
});