var output = document.querySelector('output');
if (output) {
    /* Definindo array */
    var salada = new Array();

    /* Setando cada item individualmente do array */
    salada[0] = "Uva";
    salada[1] = "Laranja";
    salada[2] = "Banana";

    /* Printando */
    console.log(salada);

    /* Outras formas de declarar arrays */
    var outraSalada = new Array("Maçã", "Abacate", "Abacaxi");
    var maisSalada = ["Laranja", "Limão", "Tangerina"];

    /* Printando */
    console.log(outraSalada);
    console.log(maisSalada);

    output.innerText = '';
    output.innerText += `${salada.join(' , ')}\n`;
    output.innerText += `${outraSalada.join(' , ')}\n`;
    output.innerText += `${maisSalada.join(' , ')}\n`;
}