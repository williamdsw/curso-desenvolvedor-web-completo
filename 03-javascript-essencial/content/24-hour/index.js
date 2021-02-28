var output = document.querySelector('output');

if (output) {
    // Concatena o tempo caso um deles for entre 0 e 9
    function retornaDoisDigitos(tempo) {
        return (tempo < 10 ? `0${tempo}` : tempo);
    }

    // Criando objeto da classe Date
    var agora = new Date();

    // Metodos que essa classe fornece
    var milissegundos = agora.getMilliseconds();
    var segundos = agora.getSeconds();
    var minutos = agora.getMinutes();
    var horas = agora.getHours();

    // Concatenando
    var horaCompleta = retornaDoisDigitos(horas) + ":" + retornaDoisDigitos(minutos) + ":" +
                       retornaDoisDigitos(segundos) + "." + retornaDoisDigitos(milissegundos);

    output.innerText = '';
    output.innerText += ` Date: ${agora}\n `;
    output.innerText += ` Milissegundos: ${milissegundos}\n `;
    output.innerText += ` Segundos: ${segundos}\n `;
    output.innerText += ` Minutos: ${minutos}\n `;
    output.innerText += ` Horas: ${horas}\n `;
    output.innerText += ` Hora Completa: ${horaCompleta}\n `;
}