
$(function ()
{
    /* $(elemento).click (callback)
     * Definindo funcao anonima para clique (click) */
    $("#btn_curso_html5").click (function ()
    {
        $("#output").text ("Clicou no botão do HTML5");
    });

    /* $(elemento).on ("evento", callback);
     * Definindo funcao anonima para clique (on = facilita trocar de evento) */
    $("#btn_curso_css3").on ("click", function ()
    {
        $("#output").text ("Clicou no botão do CSS3");
    });

    /* Funcao */
    function mostrarMensagem ()
    {
        $("#output").text ("Passou o mouse por cima do botão do CSS3");

        /* $(elemento).off () = Desabilita todos eventos  
         * $(elemento).off ("evento", callback) = Desabilita o evento especificado  */
        $("#btn_curso_css3").off ("mouseover", mostrarMensagem);
    }

    /* /* $(elemento).on ("evento", callback);
     * Definindo funcao declarada a cima no onmouseover */
    $("#btn_curso_css3").on ("mouseover", mostrarMensagem);
});