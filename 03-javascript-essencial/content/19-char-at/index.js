/* String qualquer */
var frase = "Meu time fez um gol";
            
/* string.charAt(index) = pega o caracter em determinado indice */
var quintaLetra = frase.charAt (5);

console.log ("quintaLetra = " + quintaLetra);

/* ... */
var letra = "";
var primeira_palavra = "";
var i = 0;

/* Para juntar e fazer uma palavra */
while (letra !== " ")
{
    letra = frase.charAt (i);
    primeira_palavra += letra;
    i++;
}

console.log ("Primeira palavra: " + primeira_palavra);