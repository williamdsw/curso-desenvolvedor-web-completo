<!doctype html>
<html>
    <head>
        <meta charset="UTF-8">
        <title> Operador Ternário </title>
    </head>
    <body>
        <?php
            $idade = 17;
        
            /* if-else simplificado */
            $maioridade = ($idade > 17 ? "De maior" : "De menor");
        
            echo "Idade: " . $idade . "<br>";
            echo "Maioridade: " . $maioridade . "<br>";
        ?>
    </body>
</html>