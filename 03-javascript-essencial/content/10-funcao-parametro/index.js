/* Declarando funcao com parametros */
function calcularDiaria (salario, dias)
{
    return (salario/dias).toFixed (2);
}

var porDia = calcularDiaria (1500, 30);

console.log ("Recebo " + porDia + " reais por dia");