var button = document.querySelector('button');
var output = document.querySelector('output');

if (button && output) {
    button.addEventListener('click', onRandom);

    function onRandom() {
        /* Variaveis */
        var sorteio;
        var megasena = [];

        /* Percorrendo para preencher */
        var i = 0;

        while (i < 6) {
            /* Pegando aleatorio entre 1 - 60 ja arredondado */
            sorteio = Math.ceil(Math.random() * 60);

            /* Verificando se o numero ja existe no array */
            if (megasena.indexOf(sorteio) < 0) {
                /* Adicionando */
                megasena.push(sorteio);
                i++;
            }
        }

        /* Para ordernar numeros */
        function ordernarNumeros(a, b) {
            return a - b;
        }

        /* Ordenando array */
        megasena.sort(ordernarNumeros);
        output.innerText = megasena;
    }
}