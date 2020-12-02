<?php
    $nome = "";
?>

<!doctype html>
<html>
    <head>
        <meta charset="UTF-8">
        <title> Empty </title>
    </head>
    <body>
        <?php
            /* empty (var) = Verifica se o valor de uma variavel esta vazio */
            echo "Valor da variável: " . $nome . "<br>";
            echo "A variável é empty? " . empty ($nome). "<br>";
        ?>
    </body>
</html>