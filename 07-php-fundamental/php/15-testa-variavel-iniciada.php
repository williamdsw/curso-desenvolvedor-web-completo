<?php
    $nome = null;
    $endereco = "Brasil";
    $telefone = "";
?>

<!doctype html>
<html>
    <head>
        <meta charset="UTF-8">
        <title> Testar se variáveis foram inicializadas </title>
    </head>
    <body>
        <?php
            /* isset (var) = Verifica se uma variavel foi inicializada */
            echo "A variável 'nome' está configurada? " . isset ($nome) . "<br>";
            echo "A variável 'endereco' está configurada? " . isset ($endereco) . "<br>";
            echo "A variável 'telefone' está configurada? " . isset ($telefone) . "<br>";
            echo "A variável 'cep' está configurada? " . isset ($cep) . "<br>";
        ?>
    </body>
</html>