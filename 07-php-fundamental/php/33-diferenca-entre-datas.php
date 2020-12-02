<!doctype html>
<html>
    <head>
        <meta charset="UTF-8">
        <title> Diferenças entre Datas </title>
    </head>
    <body>
        <?php
            /* Objetos DateTime */
            $inicio = new DateTime ("1994-10-02");
            $termino = new DateTime ("2019-04-07");
        
            /* DateTime -> diff (DateTime) = Retorna diferencas entre ambas datas */
            $intervalo = $inicio -> diff ($termino);
        
            /* format (str) = Retorna a propriedade informada formatada */
            echo "Diferenças entre '1994/10/02 até 2019/04/07' : <br>";
            echo $intervalo -> format ("%y") . " anos <br>";
            echo $intervalo -> format ("%m") . " meses <br>";
            echo $intervalo -> format ("%d") . " dias <br>";
        ?>
    </body>
</html>