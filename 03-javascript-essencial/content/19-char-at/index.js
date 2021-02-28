var output = document.querySelector('output');

if (output) {
    /* String qualquer */
    var frase = 'Meu time fez um gol';

    /* string.charAt(index) = pega o caracter em determinado indice */
    var quintaLetra = frase.charAt(5);
    var letra = '';
    var primeiraPalavra = '';
    var i = 0;

    /* Para juntar e fazer uma palavra */
    while (letra !== ' ') {
        letra = frase.charAt(i);
        primeiraPalavra += letra;
        i++;
    }

    output.innerText = '';
    output.innerText += `Quinta Letra = ${quintaLetra}\n`;
    output.innerText += `Primeira Palavra = ${primeiraPalavra}\n`;
}