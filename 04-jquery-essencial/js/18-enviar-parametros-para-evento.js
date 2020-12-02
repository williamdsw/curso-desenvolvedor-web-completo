
/* Quando carregar JQuery */
$(function ()
{
    /* Funcao com parametro do "evento" */
    function modificarStyle (event)
    {
        /* Mudando CSS baseado em variaveis passadas no evento (event) */
        $("#janela").css ("background-color", event.data.cor);
        $("#janela").css ("width", event.data.largura);
        $("#janela").css ("height", event.data.altura);
    }

    /* Definindo "onclick" dos buttons
     * 1° - Passando evento "click" 
     * 2º - Passando parametros a serem utilizados na funcao 
     * 3º - Passando funcao a ser chamada no botao */
    $("#btn_azul").on ("click", {cor: "blue", largura: "400px", altura: "400px"}, modificarStyle);
    $("#btn_vermelho").on ("click", {cor: "red", largura: "500px", altura: "155px"}, modificarStyle);
    $("#btn_verde").on ("click", {cor: "green", largura: "250px", altura: "500px"}, modificarStyle);
});