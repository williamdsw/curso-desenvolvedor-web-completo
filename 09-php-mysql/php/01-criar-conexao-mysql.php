<!doctype html>
<html>
    <head>
        <meta charset="UTF-8">
        <title> Criar uma conexão com MySQL </title>
    </head>
    <body>
        <?php
            /* Parametros */
            $servidor = "localhost";
            $usuario = "root";
            $senha = "root";
            $database = "andes";

            /* "mysqli_connect ()" = Abre a conexao com banco */
            $conecta = mysqli_connect ($servidor, $usuario, $senha, $database);

            /* "mysqli_connect_errno ()" = Retorna o erro de conexao caso houver */
            if (mysqli_connect_errno ())
            {
                die ("Conexão falhou: " . mysqli_connect_errno ());
            }
            else 
            {
                echo "Conectado com sucesso";
            }
        ?>
    </body>
</html>