/* Declarando array */
var selecoes = ["Brasil", "Argentina", "Inglaterra", "Belgica", "França", "Alemanha"];
            
/* sort() = ordena o array por ordem alfabetica */
selecoes.sort ();

/* Exibe */
console.log (selecoes);



/* Declarando array */
var megasena = [1, 34, 9, 56, 25, 4];

/* Funciona para ordernar numeros */
function ordernarNumeros (a, b)
{
    return a - b;
}

/* sort() = ordena o array por ordem numerica */
megasena.sort (ordernarNumeros);

/* Exibe */
console.log (megasena);