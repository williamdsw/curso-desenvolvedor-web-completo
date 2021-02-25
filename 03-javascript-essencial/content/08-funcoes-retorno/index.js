/* Funcao de retorno e com parametro */
function converterTemperatura(celsius)
{
    /* Variavel de retorno */
    var fahreinheit = (celsius * 1.8) + 32;
    
    /* Necessario para retornar o valor */
    return fahreinheit;
}

/* Recebe o valor da funcao */
var fahreinheit = converterTemperatura (30);

/* Exibe */
console.log ("30 celsius = " + fahreinheit + " fahreinheit ");