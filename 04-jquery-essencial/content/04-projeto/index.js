$(function () {
    /* Template para elementos */
    var pdf = `<img src="../../imagens/icon_pdf.gif" alt="pdf">`;
    var zip = `<img src="../../imagens/icon_zip.gif" alt="zip">`;

    /* Selecionando todos que acabarem com a palavra especificada.
     * href$='.pdf' = Quando o href acabar ($) em .pdf 
     * $(seletor).before(content) = Adiciona conteudo antes do elemento */
    $("li a[href$='.pdf']").before(pdf);
    $("li a[href$='.zip']").before(zip);
});