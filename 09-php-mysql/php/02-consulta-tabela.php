<!doctype html>
<html>
    <head>
        <meta charset="UTF-8">
        <title> Consultar Tabela </title>
    </head>
    <body>
        <?php
            /* Parametros */
            $servidor = "localhost";
            $usuario = "root";
            $senha = "root";
            $database = "andes";

            /* Conecta */
            $conecta = mysqli_connect ($servidor, $usuario, $senha, $database);

            /* Verifica conexao */
            if (mysqli_connect_errno ())
            {
                die ("Conexão falhou: " . mysqli_connect_errno ());
            }

            /* Query SQL */
            $consulta = " SELECT * FROM categorias ";

            /* "mysqli_query ()" = Permite realizar uma query com base no SQL e na conexao */
            $query = mysqli_query ($conecta, $consulta);

            /* Verifica se deu errado */
            if (!$query)
            {
                die ("Falha na consulta ao banco");
            }
        ?>
    </body>
</html>