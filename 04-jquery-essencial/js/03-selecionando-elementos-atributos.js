
$(function (e)
{
    /* Selecionando um elemento pelo atributo "class" */
    $("li[class]").css ("background-color", "#FF9");

    /* Selecionando um elemento pelo nome do "class" */
    $("li.vermelho").css ("font-size", "10em");

    /* Selecionando um elemento pelo id especificado de duas formas... */
    $("li[id='texto1']").css ("color", "blue");
    $("li#texto1").css ("display", "inline");

    /* Selecionando um elemento por dois parametros "id" e "title" */
    $("li[id][title]").css ("text-decoration", "underline");
});