
/* Exibindo mensagem quando a página for carregada 
 * jQuery(document).ready(handler) = window.onload ... 
 * handler = e uma funcao anonima ? */
jQuery(document).ready(function (event)
{
    $("#output").html ($("#output").text () + "<p> Pronto, o jQuery já carregou o DOM </p>");
});

/* Exibindo mensagem quando a página for carregada 
 * $(handler) = jQuery(document).ready(handler) 
 * Na forma simplificada */
$(function (event)
{
    $("#output").html ($("#output").text () + "<p> Pronto, o $ já carregou o DOM </p>");
});