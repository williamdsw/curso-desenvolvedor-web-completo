<?php 
    /* . = Faz a concatencao */
    $nome = "William";
    $sobrenome = "Santos";
    $nome_completo = $nome . " " . $sobrenome;
?>

<!doctype html>
<html>
    <head>
        <meta charset="UTF-8">
        <title> Strings </title>
    </head>

    <body>
        <p> <?php echo $nome_completo; ?></p>
    </body>
</html>