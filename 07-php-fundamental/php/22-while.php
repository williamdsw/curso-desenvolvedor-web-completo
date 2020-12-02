<!doctype html>
<html>
    <head>
        <meta charset="UTF-8">
        <title> While </title>
    </head>
    <body>
        <?php
            $contador = 1;

            while ($contador <= 10)
            {
                $sorteio = rand (1, 60);
                echo $sorteio . " ";
                $contador++;
            }
        ?>
    </body>
</html>