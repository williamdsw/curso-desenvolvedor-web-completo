<?php require_once("../private-php/conexao.php"); ?>

<?php
    // tabela de transportadoras
    $select = "SELECT * FROM transportadoras ";
    $result = mysqli_query ($conecta, $select);
    if(!$result) 
        die("erro no banco");
?>

<!doctype html>
<html>
    <head>
        <meta charset="UTF-8">
        <title> Listagem de Transportadoras </title>
        
        <!-- estilo -->
        <link href="../css/estilo.css" rel="stylesheet">
        
        <style>
            div#janela_transportadoras {
                width:700px;
                margin:60px auto 0;
                border:1px solid #EDEDDC;
                font-family:sans-serif;
                font-size:13px;
                color:#9A9668;
            }
            
            div#janela_transportadoras ul {
                margin:0;padding:0; 
                border-bottom:1px solid #EDEDDC;
            }
            
            div#janela_transportadoras ul:last-child {
                border-bottom:none;
            }
            
            div#janela_transportadoras ul:nth-child(odd) {
                background:#EDEDDC;   
            }
            
            div#janela_transportadoras li {
                list-style:none;
                display:inline-block;
                
            }
            
            div#janela_transportadoras li:nth-child(1) {
                width:380px; 
                padding:8px 4px;
            }

            div#janela_transportadoras li:nth-child(2) {
                width:140px;  
                padding:5px 2px;
            }    
            
            div#janela_transportadoras li:nth-child(3) a {
                color:#9A9668;
                text-align:center;
                padding:0 10px;
            }
            
            div#janela_transportadoras li:nth-child(4) a {
                color:#9A9668;
                text-align:center;
                padding:0 10px;
            }  
        </style>
    </head>

    <body>
        <!-- inclui header -->
        <?php include_once ("../components/topo.php"); ?>
        
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
                        echo "<li><a href='../alterar-transportadora/?transportadoraID=$transportadoraID'> Alterar </a> </li>";
                        echo "<li><a href='../excluir-transportadora/?transportadoraID=$transportadoraID'> Excluir </a> </li>";
                        echo "</ul>";
                    }
                ?>
           
            </div>
        </main>

        <!-- inclui footer -->
        <?php include_once ("../components/rodape.php"); ?> 
    </body>
</html>

<?php
    // Fechar conexao
    mysqli_close ($conecta);
?>