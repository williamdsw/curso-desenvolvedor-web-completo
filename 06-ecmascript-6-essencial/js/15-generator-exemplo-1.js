"use strict";

/* "Generator" = Retorna uma funcao geradora */
function* gen ()
{
    yield "String de Teste";
    yield 2;
    yield 3.14;
}

let generator = gen ();

/* "next ()" = Retorna o proximo "yield" */
console.log (generator.next ());
console.log (generator.next ());
console.log (generator.next ());
console.log (generator.next ());


function* idCriador ()
{
    let i = 0;
    
    while (true)
    {
        yield i++;
    }
}

let criador = idCriador ();

/* "value" = Retorna o valor informado pelo "yield" */
console.log (criador.next ().value);
console.log (criador.next ().value);
console.log (criador.next ().value);
console.log (criador.next ().value);
console.log (criador.next ().value);