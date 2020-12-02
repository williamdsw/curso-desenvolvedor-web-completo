<?php 
    /* Exemplo de array associativo, onde os "index" sao nomeados */
    $_agenda = array
    (
        "nome" => "José",
        "sobrenome" => "Silva",
        "salario" => 800.99
    );
?>

<!doctype html>
<html>
    <head>
        <meta charset="UTF-8">
        <title> Associative Arrays </title>
    </head>
    <body>
        <?php
            
            /* print_r (obj) = Exibe o array da forma "bruta" */
            print_r($_agenda);
            echo "<br>";
        
            /* Exibindo dados do array pela nomeacao dos index */
            echo "Nome: " . $_agenda["nome"] . "<br>";
            echo "Sobrenome: " . $_agenda["sobrenome"] . "<br>";
            echo "Salário: " . $_agenda["salario"] . "<br>";
        ?>
    </body>
</html>