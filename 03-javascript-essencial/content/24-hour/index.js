/* Concatena o tempo caso um deles for entre 0 e 9 */
function retornaDoisDigitos (tempo)
{
    if  (tempo < 10)
    {
        tempo = "0" + tempo;
    }
    
    return tempo;
}

/* Criando objeto da classe Date */
var agora = new Date ();

/* Metodos que essa classe fornece */
var milissegundos = agora.getMilliseconds ();
var segundos = agora.getSeconds ();
var minutos = agora.getMinutes ();
var horas = agora.getHours ();

/* Printando */
console.log ("Date: " + agora);
console.log ("getMilliseconds (): " + milissegundos);
console.log ("getSeconds (): " + segundos);
console.log ("getMinutes (): " + minutos);
console.log ("getHours (): " + horas);

/* Concatenando */
var horaCompleta = retornaDoisDigitos (horas) + ":" + retornaDoisDigitos (minutos) + ":" + 
                   retornaDoisDigitos (segundos) + "." + retornaDoisDigitos (milissegundos);

/* Printando */
console.log (horaCompleta);