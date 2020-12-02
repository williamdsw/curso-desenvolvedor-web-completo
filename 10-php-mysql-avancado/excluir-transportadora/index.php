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

    /* EXCLUI */
    if (isset ($_POST["transportadoraID"]))
    {
        /* Parametros */
        $transportadoraID = $_POST["transportadoraID"];
        
        /* Comando SQL */
        $sql = " DELETE FROM transportadoras ";
        $sql .= " WHERE transportadoraID = {$transportadoraID} ";
        
        /* Conecta e busca */
        $query = mysqli_query ($conecta, $sql);
        
        if (!$query)
        {
            die ("Falha ao excluir");
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
        <title> Excluir Dados da Transportadora </title>
        
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
                    <h2> Excluir Dados da Transportadora </h2>
                    
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
                    
                    <input type="submit" value="Confirmar Exclusão">
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