/* String qualquer */
var curso = "Aula JavaScript fundamental";
            
/* string.substr (begin, length) = pega uma substring a partir de um indice e tamanho  */
var linguagem = curso.substr (5, 10);

/* Exibindo */
console.log ("curso = " + curso);
console.log ("linguagem = " + linguagem);

/* ... */
var letra = "";
var primeira_palavra = "";
var i = 0;

/* Pegando substring de forma dinamica */
while (letra !== " ")
{
    letra = curso.charAt (i);
    primeira_palavra = curso.substr (0, i);
    i++;
}

/* Exibindo */
console.log ("primeira palavra = " + primeira_palavra);