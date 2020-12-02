$(function ()
{
    /* $().attr (atributo, valor) = Adiciona um atributo com valor a um seletor informado */
    $("a").attr ("title", "Alpes Suiços!");
    $("a").attr ("target", "_blank");

    /* $().removeAttr (atributo) = Remove um atributo especifico do seletor informado */
    $("a img").removeAttr ("alt");
});