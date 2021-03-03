
/* Quando carregar a pagina ...*/
$(function () {
    /* Mudando propriedades CSS 
     * 'nav a' = pelos dois seletores 
     * 'nav a:first' = primeiro elemento 
     * 'nav a:last' = ultimo elemento 
     * 'nav a:contains(string) = elemento que contem valor descrito */
    $('nav a').css('color', 'red');
    $('nav a:first').css('color', 'green').css('text-decoration', 'none');
    $('nav a:last').css('font-weight', 'bold');
    $('nav a:contains("Uruguai")').css('font-size', '32px');

    /* $(seletores).length = retorna o numero total de elementos do(s) seletor(es) especificados */
    var navLinks = $('nav a').length;
    var links = $('a').length;

    var output = '';
    output += '<p> Essa pagina contem ' + navLinks + ' links dentro do nav! </p>';
    output += '<p> Essa pagina contem ' + links + ' links no total! </p>';

    $('output').html(output);
});