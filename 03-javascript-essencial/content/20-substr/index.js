var output = document.querySelector('output');

if (output) {
    /* String qualquer */
    var curso = 'Aula JavaScript fundamental';

    /* string.substr (begin, length) = pega uma substring a partir de um indice e tamanho  */
    var linguagem = curso.substr(5, 10);
    var letra = '';
    var primeiraPalavra = '';
    var i = 0;

    /* Pegando substring de forma dinamica */
    while (letra !== ' ') {
        letra = curso.charAt(i);
        primeiraPalavra = curso.substr(0, i);
        i++;
    }

    output.innerText = '';
    output.innerText += `Linguagem = ${linguagem}\n`;
    output.innerText += `Primeira Palavra = ${primeiraPalavra}\n`;
}