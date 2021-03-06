<!doctype html>
<html>
    <head>
        <meta charset="UTF-8">
        <title> Listagem de Produtos </title>
        
        <!-- estilo -->
        <link href="../css/08-estilo.css" rel="stylesheet">
        <link href="../css/08-produtos.css" rel="stylesheet">
    </head>

    <body>
        <!-- Inclui header -->
        <?php include_once ("08-02-topo.php"); ?>
        
        <!-- Inclui conexao -->
        <?php require_once ("../private-php/conexao.php"); ?>

        <?php
            
            /* SQL query */
            $consulta = " SELECT produtoID, nomeproduto, tempoentrega, precounitario, imagempequena " .
                        " FROM produtos ";
            
            /* Busca */
            $resultado = mysqli_query ($conecta, $consulta);

            if (!$resultado)
                die ("Falha na consulta ao banco");
            ?>
        
        <main>
            
            <div id="listagem_produtos">
            <?php
                /* Template HTML */
                $template = "";
            
                /* Itera */
                while ($linha = mysqli_fetch_assoc ($resultado))
                {
                    $template .= "<ul>";
                    $template .= "<li class='imagem'>";
                    $template .= "<a href='09-detalhe.php?codigo=" . $linha["produtoID"] . "'>";
                    $template .= "<img src='../" . $linha["imagempequena"] . "' alt='imagem'>";
                    $template .= "</a>";
                    $template .= "</li>";
                    $template .= "<li><h3>" . $linha["nomeproduto"] . "</h3></li>";
                    $template .= "<li> Tempo de Entrega : " . $linha["tempoentrega"] . "</li>";
                    $template .= "<li> Preço Unitário : " . number_format ($linha["precounitario"], 2, ",", ".") . " R$ </li>";
                    $template .= "</ul>";
                }
            
                echo $template;
            ?>
            </div>
            
        </main>
        
        <!-- inclui footer -->
        <?php include_once ("08-03-rodape.php"); ?>
    </body>
</html>

<?php
    /* Fecha conexao */
    mysqli_close ($conecta);
?>