<?php
    $fumante = false;
    $alcoolatra = true;
?>

<!doctype html>
<html>
    <head>
        <meta charset="UTF-8">
        <title> Booleanos </title>
    </head>
    <body>
        <?php
            echo "É fumante ? " . $fumante . "<br>";
            echo "É alcoólatra ? " . $alcoolatra . "<br>";
        
            /* is_bool (var) = Verifica se a variavel e um boolean */
            echo "É booleano ? " . is_bool ($fumante) . "<br>";
        ?>
    </body>
</html>