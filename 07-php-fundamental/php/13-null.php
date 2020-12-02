<?php
    $nome = null;
?>

<!doctype html>
<html>
    <head>
        <meta charset="UTF-8">
        <title> Null </title>
    </head>
    <body>
        <?php
            /* is_null (var) = Verifica se o valor de uma variavel e nulo */
            echo "Valor da variável: " . $nome . "<br>";
            echo "A variável é null? " . is_null ($nome). "<br>";
        ?>
    </body>
</html>