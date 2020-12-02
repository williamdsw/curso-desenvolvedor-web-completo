<!-- Inclui conexao -->
<?php require_once ("../private-php/conexao.php"); ?>

<?php
    /* Abre sessao */
    session_start ();

    /* Redireciona para tela de login */
    if (!isset ($_SESSION["usuario"]))
    {
        header ("location: ../login.php");
        exit;
    }

    setlocale (LC_ALL, "pt_BR");

    /* INSERT */
    if (isset ($_POST["nome_transportadora"]))
    {
        /* Parametros */
        // utf8_encode
        $nome_transportadora = $_POST["nome_transportadora"];
        $endereco = $_POST["endereco"];
        $telefone = $_POST["telefone"];
        $cidade = $_POST["cidade"];
        $estadoID = $_POST["estado"];
        $cep = $_POST["cep"];
        $cnpj = $_POST["cnpj"];
        
        /* Comando SQL */
        $insert = " INSERT INTO transportadoras ";
        $insert .= " (nometransportadora, endereco, telefone, cidade, estadoID, cep, cnpj) ";
        $insert .= " VALUES ('$nome_transportadora', '$endereco', '$telefone', '$cidade', $estadoID, '$cep', '$cnpj') ";
        
        /* Insercao */
        $query = mysqli_query ($conecta, $insert);
        
        if (!$query)
            die ("Erro no banco");
    }
?>

<!doctype html>
<html>
    <head>
        <meta charset="UTF-8">
        <title> Inserir Transportadora </title>
        
        <!-- estilo -->
        <link rel="stylesheet" href="../css/estilo.css">
        <link rel="stylesheet" href="../css/crud.css">
    </head>

    <body>
        <!-- Inclui header -->
        <?php include_once ("../components/topo.php"); ?>
        
        <main>
            
            <!-- Formulario -->
            <div id="janela_formulario">
                <form action="" method="post">
                    
                    <!-- campos -->
                    <input type="text" name="nome_transportadora" placeholder="Nome da Transportadora">
                    <input type="text" name="endereco" placeholder="Endereço">
                    <input type="text" name="telefone" placeholder="Telefone">
                    <input type="text" name="cidade" placeholder="Cidade">
                    
                    <select name="estado">
                        <?php
                            
                            /* SELECT */
                            $select = " SELECT estadoID, nome FROM estados ";
                            $query = mysqli_query ($conecta, $select);

                            if (!$query)
                                die ("Erro no banco");
                        
                            /* Iterando */
                            while ($linha = mysqli_fetch_assoc ($query))
                            {
                                $estadoID = $linha["estadoID"];
                                $nome = $linha["nome"];
                                //$nome = utf8_encode ($linha["nome"]);
                                
                                echo "<option value='$estadoID'> $nome </option>";
                            }
                        ?>
                    </select>
                    
                    <input type="text" name="cep" placeholder="CEP">
                    <input type="text" name="cnpj" placeholder="CNPJ">
                    <input type="submit" value="Inserir">
                </form>
            </div>
            
        </main>
        
        <!-- inclui footer -->
        <?php include_once ("../components/rodape.php"); ?>
    </body>
</html>

<?php
    /* Fecha conexao */
    mysqli_close ($conecta);
?>