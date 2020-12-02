
$(function ()
{
    /* $().prepend () = Adiciona um conteudo antes do seletor informado */
    $("ul#lista_curso").prepend ("<li> Curso PHP Fundamental </li>");

    /* $().append() = Adiciona um conteudo depois do seletor informado */
    $("ul#lista_curso").append ("<li> Curso Bootstrap Fundamental </li>");

    /* $().html() = Adiciona um HTML interno no seletor informado */
    $("h1").html ("Formação Desenvolvimento Web");
});