$(function (e)
{
    /* $(elemento a ser inserido).insertAfter(seletor) = Insere um ou mais elementos depois de um seletor informado */
    $("<li><img src='../imagens/foto4.jpg'></li>").insertAfter ("ul li:last-child");

    /* $(elemento a ser inserido).insertBefore(seletor) = Insere um ou mais elementos antes de um seletor informado */
    $("<li><img src='../imagens/foto5.jpg'></li>").insertBefore ("ul li:first-child");
});