<!doctype html>
<html>
    <head>
        <meta charset="UTF-8">
        <title> Trabalhar com Data </title>
    </head>
    <body>
        <?php
            /* date_default_timezone_set () = Define timezone padrao dos metodos de data */
            date_default_timezone_set ("Etc/GMT+3");
            
            /* getdate () = Retorna objeto com valores da data atual */
            $agora = getdate ();
        
            /* Pegando propriedades */
            $segundos = $agora["seconds"];
            $minutos = $agora["minutes"];
            $horas = $agora["hours"];
            $dia = $agora["mday"];
            $mes = $agora["mon"];
            $ano = $agora["year"];
            
            /* Exibe na tela */
            echo $horas . ":" . $minutos . ":" . $segundos . " " . $dia . "/" . $mes . "/" . $ano;
        ?>
    </body>
</html>