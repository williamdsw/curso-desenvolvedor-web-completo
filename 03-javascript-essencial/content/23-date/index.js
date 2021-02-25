var meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

var dias = ["Domingo", "Segunda-Feira", "Terça-Feira",
    "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sabado"];

/* Criando objeto da classe Date */
var agora = new Date();

/* Metodos que essa classe fornece */
var diaDaSemana = agora.getDay();                       /* Intervalo de "0 - 6" */
var dia = agora.getDate();                              /* Intervalo de "1 - 31" */
var mes = agora.getMonth();                             /* Intervalo de "0 - 11" */
var ano = agora.getFullYear();

/* Printando */
console.log("Date: " + agora);
console.log("getDay (): " + diaDaSemana);
console.log("getMonth (): " + mes);
console.log("getFullYear (): " + ano);

/* Concatenando para exibir */
var completa = dias[diaDaSemana] + ", " + dia + " de " + meses[mes] + " de " + ano;

/* Printando */
console.log(completa);