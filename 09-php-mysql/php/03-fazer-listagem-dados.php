<!doctype html>
<html>
    <head>
        <meta charset="UTF-8">
        <title> Fazer Listagem dos Dados </title>
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
                die ("Conexão falhou: " . mysqli_connect_errno ());

            /* SQL */
            $consulta = " SELECT * FROM categorias ";

            /* Busca */
            $query = mysqli_query ($conecta, $consulta);

            if (!$query)
                die ("Falha na consulta ao banco");
        
            /* "mysqli_fetch_row ()" = Retorna arrays indexados */
            /* "mysqli_fetch_array ()" = Retorna arrays indexados e array associativos */
            /* "mysqli_fetch_assoc ()" = Retorna arrays associativos */
            while ($registro = mysqli_fetch_assoc ($query))
            {
                print_r ($registro);
                echo "<br>";
            }
        ?>
    </body>
</html>