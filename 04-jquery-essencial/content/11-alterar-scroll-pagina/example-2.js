
$(function () {
    var items = $('nav li');
    if (items) {
        items.each((index, item) => {
            $(item).click(() => {
                var container = $(['#primeira', '#segunda'][index]);
                if (container) {
                    /* Pegando o valor top do offset da DIV para ser variavel 
                     * Direcionado ao elemento */
                    var offsetTop = container.offset().top;

                    /* $(seletores).animate(parametros, delay) = Anima uma propriedade dos seletores informados com delay informado, 
                     * scrollTop:valor (px) = Adiciona valor ao top do elemento (desce a pagina) */
                    $('html, body').animate({ scrollTop: offsetTop }, 1000);
                }
            });
        });
    }
});