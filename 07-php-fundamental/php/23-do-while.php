<!doctype html>
<html>
    <head>
        <meta charset="UTF-8">
        <title> Do While </title>
    </head>
    <body>
        <?php
            $contador = 1;

            do
            {
                $sorteio = rand (1, 100);
                echo $sorteio . " ";
                $contador++;
            } while ($contador <= 10);
        ?>
    </body>
</html>