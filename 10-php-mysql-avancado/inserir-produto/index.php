<!-- Inclui conexao -->
<?php require_once ("../private-php/conexao.php"); ?>
<?php require_once ("../components/funcoes.php"); ?>

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

    /* Insert do produto */
    if (isset ($_POST["nomeproduto"])) 
    {
        /* Parametros */
        $resultado_foto_grande = publicar_arquivo ($_FILES["foto_grande"]);
        $resultado_foto_pequena = publicar_arquivo ($_FILES["foto_pequena"]);

        $mensagem_foto_grande = $resultado_foto_grande[0]; 
        $mensagem_foto_pequena = $resultado_foto_pequena[0];
        
        $nomeproduto    = $_POST["nomeproduto"];
        $codigobarra    = $_POST["codigobarra"];
        $tempoentrega   = $_POST["tempoentrega"];
        $categoriaID    = $_POST["categoriaID"];
        $fornecedorID   = $_POST["fornecedorID"];
        $precounitario  = $_POST["precounitario"];
        $precorevenda   = $_POST["precorevenda"];
        $estoque        = $_POST["estoque"];
        $imagem_grande  = $resultado_foto_grande[1];
        $imagem_pequena = $resultado_foto_pequena[1];
        
        /* Tira pontos */
        $imagem_grande = str_replace ("../", "", $imagem_grande);
        $imagem_pequena = str_replace ("../", "", $imagem_pequena);
        
        /* Comando SQL */
        $sql_produto = " INSERT INTO produtos ";
        $sql_produto .=" (nomeproduto, codigobarra, tempoentrega, categoriaID, fornecedorID, precounitario, precorevenda, estoque, imagemgrande, imagempequena) ";
        $sql_produto .=" VALUES ";
        $sql_produto .=" ('$nomeproduto', '$codigobarra', $tempoentrega, $categoriaID, $fornecedorID, $precounitario, $precorevenda, $estoque, '$imagem_grande', '$imagem_pequena') ";
        
        $query_produto = mysqli_query ($conecta, $sql_produto);
        
        if(!$query_produto) 
        {
            die ("Erro na inserção");   
        } 
        else 
        {
            $mensagem = "Inserção ocorreu com sucesso.";
        }
    }

    /* Consulta categorias */
    $sql_categoria = " SELECT categoriaID, nomecategoria ";
    $sql_categoria .= " FROM categorias ";
    $query_categoria = mysqli_query ($conecta, $sql_categoria);
    if (!$query_categoria)
        die ("Falha na consulta ao banco");   

    /* Consulta fornecedores */
    $sql_fornecedores = " SELECT fornecedorID, nomefornecedor ";
    $sql_fornecedores .= " FROM fornecedores ";
    $query_fornecedores = mysqli_query ($conecta, $sql_fornecedores);
    if (!$query_fornecedores) 
        die ("Falha na consulta ao banco");   
?>

<!doctype html>
<html>
    <head>
        <meta charset="UTF-8">
        <title> Inserir Novo Produto </title>
        
        <!-- estilo -->
        <link rel="stylesheet" href="../css/estilo.css">
        <link rel="stylesheet" href="../css/inclusao.css">
    </head>

    <body>
        <!-- Inclui header -->
        <?php include_once ("../components/topo.php"); ?>
        
        <main>
            <div id="janela_formulario">
                <form action="" method="post" enctype="multipart/form-data">
                    
                    <h2> Inserir Novo Produto </h2>

                    <!-- campo de nome do produto e codigo de barra -->
                    <input type="text" name="nomeproduto" placeholder="Nome do Produto">
                    <input type="text" name="codigobarra" placeholder="Codigo de Barra">                      

                    <!-- campo de tempo de entrega -->
                    <label> Tempo de Entrega </label>
                    <input type="radio" name="tempoentrega" value="5">5 dias
                    <input type="radio" name="tempoentrega" value="8">8 dias
                    <input type="radio" name="tempoentrega" value="15">15 dias
                    <input type="radio" name="tempoentrega" value="30">30 dias

                    <!-- campo de categorias -->
                    <label> Selecione a categoria do produto </label>
                    <select name="categoriaID">
                        <?php
                            while ($linha = mysqli_fetch_assoc ($query_categoria)) 
                            {
                                $categoriaID = $linha["categoriaID"];
                                $nomecategoria = $linha["nomecategoria"];
                                echo "<option value='$categoriaID'> $nomecategoria </option>";
                            }
                        ?>
                    </select>

                    <!-- campo de fornecedor -->
                    <label> Selecione o fornecedor do produto </label>
                    <select name="fornecedorID">
                        <?php
                            while ($linha = mysqli_fetch_assoc ($query_fornecedores)) 
                            {
                                $fornecedorID = $linha["fornecedorID"];
                                $nomefornecedor = $linha["nomefornecedor"];
                                echo "<option value='$fornecedorID'> $nomefornecedor </option>";
                            }
                        ?>
                    </select>                    

                    <!-- campo de precos -->
                    <input type="text" name="precorevenda" placeholder="Preço Revenda">
                    <input type="text" name="precounitario" placeholder="Preço Unitário">                      

                    <!-- campo de estoque -->
                    <input type="hidden" name="MAX_FILE_SIZE" value="614400">

                    <!-- campo de foto grande -->
                    <label> Foto Grande </label>
                    <input type="file" name="foto_grande">
                    <span class="resposta">
                        <?php if (isset ($mensagem_foto_grande)) echo $mensagem_foto_grande; ?>
                    </span>

                    <!-- campo de foto pequena -->
                    <label> Foto Pequena </label>
                    <input type="file" name="foto_pequena">
                    <span class="resposta">
                        <?php if (isset ($mensagem_foto_pequena)) echo $mensagem_foto_pequena; ?>
                    </span>

                    <!-- campo escondido para iniciar estoque -->
                    <input type="hidden" name="estoque" value="0">

                    <!-- botao submit -->
                    <input type="submit" value="Inserir novo produto">

                        <?php if (isset ($mensagem)) echo "<p>{$mensagem}</p>"; ?>                                  
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