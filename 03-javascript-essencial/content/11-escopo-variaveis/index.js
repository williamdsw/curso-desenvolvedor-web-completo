var bonus;

/* Declarando funcao com parametros */
function calcularDiaria(salario, dias) {
    bonus = 300;

    return (salario / dias).toFixed(2);
}

var porDia = calcularDiaria(1500, 30);

console.log("Recebo " + porDia + " reais por dia");
console.log("Bonus: " + bonus + " reais");