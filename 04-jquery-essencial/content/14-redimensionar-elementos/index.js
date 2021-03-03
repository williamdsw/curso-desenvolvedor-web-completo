var ids = ['#primeira', '#segunda', '#terceira'];

$(function () {
    var items = $('nav li');
    if (items) {
        items.each((index, item) => {
            $(item).click(() => {
                var container = $(ids[index]);
                if (container) {
                    var offsetTop = container.offset().top;
                    $('html, body').animate({ scrollTop: offsetTop }, 1000);
                }
            });
        });
    }

    redimensionar();
});

// $(seletor).resize() = evento de quando o navegador e redimensionado
$(window).resize(function () {
    redimensionar();
});

function redimensionar() {
    var alturaJanela = $(window).height();
    $(ids.join(',')).css('height', alturaJanela);
}
