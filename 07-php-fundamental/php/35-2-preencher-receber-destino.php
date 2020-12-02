<!doctype html>
<html>
    <head>
        <meta charset="UTF-8">
        <title> Preencher e Receber Dados de um Formulário </title>
    </head>
    <body> 
        <?php 
            /* Verifica parametros passados */
            $nome = (isset ($_POST["nome"]) ? $_POST["nome"] : "Sem definição");
            $email = (isset ($_POST["email"]) ? $_POST["email"] : "Sem definição");
        
            /* Exibe */
            echo "Meu nome é " . $nome . "<br>";
            echo "Meu email é " . $email . "<br>";
        ?>
    </body>
</html>