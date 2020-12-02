<?php
    require_once ("../private-php/conexao.php");

    $conecta = abre_conexao ();

    // tabela de transportadoras
    $select = "SELECT * FROM transportadoras ";
    $result = mysqli_query ($conecta, $select);
    if (!$result) 
        die("erro no banco");
?>

<!doctype html>
<html>
    <head>
        <meta charset="UTF-8">
        <title> Listagem de Transportadoras </title>
        <link rel="stylesheet" href="../css/estilo-listagem.css">
    </head>

    <body>
        <main>  
            <div id="janela_transportadoras">
                
                <?php 
                    
                    while ($linha = mysqli_fetch_assoc ($result))
                    {
                        $transportadoraID = $linha["transportadoraID"];
                        $nometransportadora = $linha["nometransportadora"];
                        $cidade = $linha["cidade"];
                        
                        echo "<ul>";
                        echo "<li> $nometransportadora </li>";
                        echo "<li> $cidade </li>";
                        echo "<li><a href='' class='excluir' title='$transportadoraID'> Excluir </a></li>";
                        echo "</ul>";
                    }
                ?>
                
                <div id="mensagem"><p></p></div>
            </div>
        </main>
        
        <script src="../libs/jquery-3.4.0.min.js"></script>
        <script src="../js/20-excluir.js"></script>
    </body>
</html>

<?php
    // Fechar conexao
    fecha_conexao ($conecta);
?>