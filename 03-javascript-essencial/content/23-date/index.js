var output = document.querySelector('output');

if (output) {
    var meses = [
        'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio',
        'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro',
        'Novembro', 'Dezembro'
    ];

    var dias = [
        'Domingo', 'Segunda-Feira', 'Terça-Feira',
        'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira',
        'Sabado'
    ];

    // Criando objeto da classe Date
    var agora = new Date();

    // Metodos que essa classe fornece
    // Intervalo de '0 - 6'
    var diaDaSemana = agora.getDay();

    // Intervalo de '1 - 31'
    var dia = agora.getDate();

    // Intervalo de '0 - 11'
    var mes = agora.getMonth();
    var ano = agora.getFullYear();

    // Concatenando para exibir
    var completa = dias[diaDaSemana] + ', ' + dia + ' de ' + meses[mes] + ' de ' + ano;

    output.innerText = '';
    output.innerText += ` Date: ${agora}\n `;
    output.innerText += ` Dia da semana: ${diaDaSemana}\n `;
    output.innerText += ` Mês: ${mes}\n `;
    output.innerText += ` Ano: ${ano}\n `;
    output.innerText += ` Completa: ${completa}\n `;
}