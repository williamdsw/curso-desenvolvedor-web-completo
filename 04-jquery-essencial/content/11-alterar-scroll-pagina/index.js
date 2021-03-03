
$(function () {
    /* Quando clicar no icone da bola de basquete */
    $('nav li:nth-child(2)').click(function () {
        /* $(seletores).animate(parametros, delay) = Anima uma propriedade dos seletores informados com delay informado, 
         * scrollTop:valor (px) = Adiciona valor ao top do elemento (desce a pagina) */
        $('html, body').animate({ scrollTop: 300 }, 1000);
    });
});