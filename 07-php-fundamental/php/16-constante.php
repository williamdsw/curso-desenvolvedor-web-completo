<?php
    /* Forma de definir constantes */
    define ("NOME", "José");
    define ("MESES", 12);
?>

<!doctype html>
<html>
    <head>
        <meta charset="UTF-8">
        <title> Constante </title>
    </head>
    <body>
        <?php
            echo "Meu nome é " . NOME . "<br>";
            echo "Existem " . MESES . " Meses no Ano" . "<br>";
        ?>
    </body>
</html>