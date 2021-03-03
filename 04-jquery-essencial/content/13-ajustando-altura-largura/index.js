
$(function () {
    var items = $('nav li');
    if (items) {
        var alturaJanela = $(window).height ();
        var ids = ['#primeira', '#segunda', '#terceira'];
        $(ids.join(',')).css('height', alturaJanela);
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
});