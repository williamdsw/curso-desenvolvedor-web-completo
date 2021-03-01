
$(function (e)
{
    /* $ (seletor).position ().top = retorna o valor da posicao "top" do elemento */
    var positionTop = $("#janela").position ().top;

    /* $ (seletor).position ().left = retorna o valor da posicao "left" do elemento */
    var positionLeft = $("#janela").position ().left;

    /* Printando */
    var output = "";
    output += "<p> Position top da #janela = " + positionTop + " </p>";
    output += "<p> Position left da #janela = " + positionLeft + " </p>";
    
    $("#output").html (output);
});