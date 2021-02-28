var output = document.querySelector('output');

if (output) {
    /* String qualquer */
    var frase = 'Meu time é campeão';

    /* string.split(delimitador) = quebra uma string em um array por um delimitador  */
    var palavras = frase.split(' ');
    var ultimaPalavra = palavras[palavras.length - 1];

    output.innerText = '';
    output.innerText += `Palavras = ${palavras.join(',')}\n`;
    output.innerText += `Ultima Palavra = ${ultimaPalavra}`;
}