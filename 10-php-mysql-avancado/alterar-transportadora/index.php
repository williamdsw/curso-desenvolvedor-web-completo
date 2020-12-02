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

    /* RECUPERA INFORMACOES */
    if (isset ($_GET["transportadoraID"]))
    {
        /* ID */
        $transportadoraID = $_GET["transportadoraID"];
        
        /* Comando SQL */
        $sql = " SELECT * FROM transportadoras ";
        $sql .= " WHERE transportadoraID = {$transportadoraID} ";
        
        /* Conecta e busca */
        $query = mysqli_query ($conecta, $sql);
        
        if (!$query)
            die ("Falha na conexão");
        
        /* Resultado */
        $result = mysqli_fetch_assoc ($query);
        
        /* Dados */
        $transportadoraID = $result["transportadoraID"];
        $nometransportadora = $result["nometransportadora"];
        $endereco = $result["endereco"];
        $telefone = $result["telefone"];
        $cidade = $result["cidade"];
        $estadoID = $result["estadoID"];
        $cep = $result["cep"];
        $cnpj = $result["cnpj"];
    }
    else 
    {
        header ("location: ../listagem-transportadora/");
        exit;
    }

    if (isset ($_POST["nome_transportadora"]))
    {
        /* Parametros */
        $transportadoraID = $_POST["transportadoraID"];
        $nome_transportadora = $_POST["nome_transportadora"];
        $endereco = $_POST["endereco"];
        $telefone = $_POST["telefone"];
        $cidade = $_POST["cidade"];
        $estadoID = $_POST["estado"];
        $cep = $_POST["cep"];
        $cnpj = $_POST["cnpj"];
        
        /* Comando SQL */
        $sql = " UPDATE transportadoras ";
        $sql .= " SET nometransportadora = '{$nome_transportadora}', ";
        $sql .= "     endereco = '{$endereco}', ";
        $sql .= "     telefone = '{$telefone}', ";
        $sql .= "     cidade = '{$cidade}', ";
        $sql .= "     estadoID = {$estadoID}, ";
        $sql .= "     cep = '{$cep}', ";
        $sql .= "     cnpj = '{$cnpj}' ";
        $sql .= " WHERE transportadoraID = {$transportadoraID} ";
        
        /* Conecta e busca */
        $query = mysqli_query ($conecta, $sql);
        
        if (!$query)
        {
            die ("Falha ao atualizar");
        }
        else 
        {
            header ("location: ../listagem-transportadora/");
        }
    }
?>

<!doctype html>
<html>
    <head>
        <meta charset="UTF-8">
        <title> Alterar Dados da Transportadora </title>
        
        <!-- estilo -->
        <link rel="stylesheet" href="../css/estilo.css">
        <link rel="stylesheet" href="../css/alteracao.css">
    </head>

    <body>
        <!-- inclui header -->
        <?php include_once ("../components/topo.php"); ?>
        
        <main>
            <!-- Formulario -->
            <div id="janela_formulario">
                <form action="" method="post">
                    <h2> Alterar Dados da Transportadora </h2>
                    
                    <!-- campos -->
                    <input type="hidden" name="transportadoraID" value="<?php echo $transportadoraID ?>">
                    
                    <label for="nome_transportadora"> Nome da Transportadora </label>
                    <input type="text" id="nome_transportadora" name="nome_transportadora" placeholder="Nome da Transportadora" value="<?php echo $nometransportadora ?>">
                    
                    <label for="endereco"> Endereço </label>
                    <input type="text" id="endereco" name="endereco" placeholder="Endereço" value="<?php echo $endereco ?>">
                    
                    <label for="telefone"> Telefone </label>
                    <input type="text" id="telefone" name="telefone" placeholder="Telefone" value="<?php echo $telefone ?>">
                    
                    <label for="cidade"> Cidade </label>
                    <input type="text" id="cidade" name="cidade" placeholder="Cidade" value="<?php echo $cidade ?>">
                    
                    <label for="estado"> Estado </label>
                    <select id="estado" name="estado">
                        <?php
                            
                            /* SELECT */
                            $select = " SELECT estadoID, nome FROM estados ";
                            $query = mysqli_query ($conecta, $select);

                            if (!$query)
                                die ("Erro no banco");
                        
                            /* Iterando */
                            while ($linha = mysqli_fetch_assoc ($query))
                            {
                                $localEstadoID = $linha["estadoID"];
                                $nome = $linha["nome"];
                                
                                if ($estadoID == $localEstadoID)
                                {
                                    echo "<option value='$localEstadoID' selected> $nome </option>";
                                }
                                else 
                                {
                                    echo "<option value='$localEstadoID'> $nome </option>";
                                }
                            }
                        ?>
                    </select>
                    
                    <label for="cep"> CEP </label>
                    <input type="text" id="cep" name="cep" placeholder="CEP" value="<?php echo $cep ?>">
                    
                    <label for="cnpj"> CNPJ </label>
                    <input type="text" id="cnpj" name="cnpj" placeholder="CNPJ" value="<?php echo $cnpj ?>">
                    
                    <input type="submit" value="Confirmar Alteração">
                </form>
            </div>
        </main>
        
        <!-- inclui footer -->
        <?php include_once ("../components/rodape.php"); ?>

    </body>
</html>

<?php
    /* Fechar conexao */
    mysqli_close ($conecta);
?>