
$(function (e)
{
    /* Quando clicar no icone da bola de futebol */
    $("nav li:nth-child(1)").click (function ()
    {
        /* Pegando o valor top do offset da DIV para ser variavel 
         * Direcionado ao elemento */
        var offsetTop = $("#primeira").offset ().top;

        /* $(seletores).animate(parametros, delay) = Anima uma propriedade dos seletores informados com delay informado, 
         * scrollTop:valor (px) = Adiciona valor ao top do elemento (desce a pagina) */
        $("html, body").animate ({scrollTop: offsetTop}, 1000);
    });

    /* Quando clicar no icone da bola de basquete */
    $("nav li:nth-child(2)").click (function ()
    {
        /* Pegando o valor top do offset da DIV para ser variavel 
         * Direcionado ao elemento */
        var offsetTop = $("#segunda").offset ().top;

        /* $(seletores).animate(parametros, delay) = Anima uma propriedade dos seletores informados com delay informado, 
         * scrollTop:valor (px) = Adiciona valor ao top do elemento (desce a pagina) */
        $("html, body").animate ({scrollTop: offsetTop}, 1000);
    });
});