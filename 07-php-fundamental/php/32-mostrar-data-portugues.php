<!doctype html>
<html>
    <head>
        <meta charset="UTF-8">
        <title> Mostrar a Data em Português </title>
    </head>
    <body>
        <?php
            /* Define timezone para Brasilia */
            date_default_timezone_set ("Etc/GMT+3");
        
            /* setlocale () = Define localidade dos valores da data */
            setlocale (LC_TIME, "pt_BR");
        
            /* strftime (str) = Permite extrair o valor da propriedade formatada */
            $dia = strftime ("%d");
            $dia_semana = strftime ("%A");
            $mes = strftime ("%B");
            $ano = strftime ("%Y");
            
            echo $dia_semana . ", " . $dia . " de " . $mes . " de " . $ano;
        ?>
    </body>
</html>