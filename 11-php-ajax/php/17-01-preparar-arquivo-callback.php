<?php
    /* Preparando arquivo para Callback */
    $callback = isset ($_GET["callback"]) ? $_GET["callback"] : false;

    /* Configuracoes gerais */
    header ("Access-Control-Allow-Origin: *");

    /* Inclui classe de conexao */
    include_once ("../private-php/conexao.php");

    $conecta = abre_conexao ();

    /* Query */
    $sql = " SELECT nomeproduto, precounitario, imagempequena ";
    $sql .= " FROM produtos ";

    /* Resultado */
    $result = mysqli_query ($conecta, $sql);

    $retorno = array ();
    
    /* Itera */
    while ($linha = mysqli_fetch_object ($result))
    {
        $retorno[] = $linha;
    }

    fecha_conexao ($conecta);
          
    /* Envia callback */
    echo ($callback ? $callback . "(" : "") . json_encode ($retorno) . ($callback ? ")" : "");
?>