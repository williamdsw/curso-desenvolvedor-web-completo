function calcularDiaria() {
    /*
     * Math.round() = arredonda o valor
     * Math.ceil() = arredonda o valor para cima
     * Math.floor() = arredonda o valor para baixo
     * toFixed() = Define o numero de casas decimais para o valor
     */
    var divisao = (2000 / 30);
    var arredondado = Math.round(2000 / 30);
    var arredondadoCima = Math.ceil(2000 / 30);
    var arredondadoBaixo = Math.floor(2000 / 30);
    var fixadoEmDuas = (2000 / 30).toFixed(2);
    var fixadoEmTres = (2000 / 30).toFixed(3);
    var fixadoEmQuatro = (2000 / 30).toFixed(4);

    console.log("2000/30 = " + divisao);
    console.log("Math.round(2000/30) = " + arredondado);
    console.log("Math.ceil(2000/30) = " + arredondadoCima);
    console.log("Math.floor(2000/30) = " + arredondadoBaixo);
    console.log("(2000/30).toFixed(2)) = " + fixadoEmDuas);
    console.log("(2000/30).toFixed(3)) = " + fixadoEmTres);
    console.log("(2000/30).toFixed(4)) = " + fixadoEmQuatro);
}

calcularDiaria();