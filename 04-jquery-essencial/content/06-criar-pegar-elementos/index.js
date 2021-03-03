
$(function () {
    // $().prepend () = Adiciona um conteudo antes do seletor informado
    $("ul.lista-cursos").prepend("<li> Curso PHP Fundamental </li>");

    // $().append() = Adiciona um conteudo depois do seletor informado
    $("ul.lista-cursos").append("<li> Curso Bootstrap Fundamental </li>");

    // $().html() = Adiciona um HTML interno no seletor informado
    $("h2").html("Formação Desenvolvimento Web");
});