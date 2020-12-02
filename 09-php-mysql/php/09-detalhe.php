<!doctype html>
<html>
    <head>
        <meta charset="UTF-8">
        <title> Detalhe do Produto </title>
        
        <!-- estilo -->
        <link href="../css/08-estilo.css" rel="stylesheet">
        <link href="../css/09-produto-detalhe.css" rel="stylesheet">
    </head>

    <body>
        <!-- Inclui header -->
        <?php include_once ("08-02-topo.php"); ?>
        
        <!-- Inclui conexao -->
        <?php require_once ("../private-php/conexao.php"); ?>
        
        <main>
            
            <?php
                /* Verifica parametro */
                if (isset ($_GET["codigo"]))
                {
                    $codigo = $_GET["codigo"];
                }
                else 
                {
                    /* Header ("Location: pagina") = Redireciona para alguma pagina */
                    Header ("Location: 08-01-listagem-de-produtos.php");
                }
            
                /* Query SQL */
                $consulta = " SELECT * FROM produtos " . 
                            " WHERE produtoID = {$codigo} ";
            
                /* Pesquisa */
                $resultado = mysqli_query ($conecta, $consulta);
            
                if (!$resultado)
                {
                    die ("Falha na consulta");
                }
                else 
                {
                    /* Pega array com valores */
                    $dados_detalhe = mysqli_fetch_assoc ($resultado);
                    
                    /* Pegando colunas */
                    $produtoID = $dados_detalhe["produtoID"];
                    $nomeProduto = $dados_detalhe["nomeproduto"];
                    $descricao = $dados_detalhe["descricao"];
                    $codigoBarra = $dados_detalhe["codigobarra"];
                    $tempoEntrega = $dados_detalhe["tempoentrega"];
                    $precoRevenda = $dados_detalhe["precorevenda"];
                    $precoUnitario = $dados_detalhe["precounitario"];
                    $estoque = $dados_detalhe["estoque"];
                    $imagemGrande = $dados_detalhe["imagemgrande"];
                }
            ?>
            
            <div id="detalhe_produto">
                <ul>
                    <li class="imagem">
                        <img src="../<?php echo $imagemGrande; ?>" alt="Produto">
                    </li>
                    <li><h2> <?php echo $nomeProduto; ?> </h2> </li>
                    <li><b> Descrição: </b> <?php echo $descricao; ?> </li>
                    <li><b> Código de Barra: </b>  <?php echo $codigoBarra; ?> </li>
                    <li><b> Tempo de Entrega: </b>  <?php echo $tempoEntrega; ?> </li>
                    <li><b> Preço de Revenda: </b>  <?php echo "R$ " . number_format ($precoRevenda, 2, ",", "."); ?> </li>
                    <li><b> Preço Unitário: </b>  <?php echo "R$ " . number_format ($precoUnitario, 2, ",", ".");; ?> </li>
                    <li><b> Estoque: </b>  <?php echo $estoque; ?> </li>
                </ul>
            </div>
            
        </main>
        
        <!-- inclui footer -->
        <?php include_once ("08-03-rodape.php"); ?>
    </body>
</html>

<?php
    // Fechar conexao
    mysqli_close ($conecta);
?>