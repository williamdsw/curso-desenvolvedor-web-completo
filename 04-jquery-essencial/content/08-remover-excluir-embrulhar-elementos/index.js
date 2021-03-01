
$(function ()
{
    /* $().remove () = Remove um elemento especificado */
    $("ul li:contains('Anthrax')").remove ();

    /* $().replaceWith () = Substitui o elemento especificado com outro elemento ou texto */
    $("ul li:last").replaceWith ("<li> Annihilator </li>");

    /* $().wrapAll () = "Embulha" (abraca) o elemento especificado por fora (cria uma tag pai) */
    $("ul").wrapAll ("<div style='border: 3px dotted #ccc;'></div>");

    /* $(). wrapInner () = "Embrulha" (abraca) o elemento especificado por dentro (cria uma tag filha...) */
    $("ul").wrapInner ("<div style='background-color: #f0f0f0;'></div>");
});