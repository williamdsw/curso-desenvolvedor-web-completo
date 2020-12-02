<?php 
    /* Verifica se deu submit */
    if (isset ($_POST["formulario"]))
    {
        /* Verifica variaveis */
        $nome = (isset ($_POST["nome"]) ? $_POST["nome"] : "Sem definição");
        $email = (isset ($_POST["email"]) ? $_POST["email"] : "Sem definição");

        /* Exibe */
        echo "Meu nome é " . $nome . "<br>";
        echo "Meu email é " . $email . "<br>";
    }
?>

<!doctype html>
<html>
    <head>
        <meta charset="UTF-8">
        <title> Enviar dados do Formulário para a Mesma Página </title>
        <link href="../css/estilo.css" rel="stylesheet">
    </head>
    <body>
        
        <!-- Exibe o formulario apenas se nao for submetido -->
        <?php if (!isset ($_POST["formulario"])) { ?>

            <!-- Informa a propria URL -->
            <form action="36-enviar-dados-formulario-propria-pagina.php" method="post">
                
                <!-- Nome Completo -->
                <label for="nome"> Nome Completo </label>
                <input type="text" id="nome" name="nome">

                <!-- Email -->
                <label for="email"> Email </label>
                <input type="text" id="email" name="email">
                
                <!-- Submit -->
                <input type="submit" name="formulario" value="Enviar Cadastro">
            </form>
        
        <?php } ?>
    </body>
</html>