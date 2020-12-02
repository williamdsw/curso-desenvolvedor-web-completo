  <?php
    include_once ("../private-php/conexao.php");

    if (isset ($_POST["transportadoraID"])) 
    {
        $conecta = abre_conexao ();
        
        /* Parametros */
        $transportadoraID = $_POST["transportadoraID"];
        
        /* Query */
        $query = " DELETE FROM transportadoras ";
        $query .= " WHERE transportadoraID = {$transportadoraID} ";
        
        $result = mysqli_query ($conecta, $query);
        
        /* Retorno do resultado */
        $retorno = array ();
        $retorno["sucesso"] = ($result ? true : false);
        $retorno["mensagem"] = ($result ? "Transportadora excluída com sucesso!" : "Falha no sistema, tente mais tarde");
        
        echo json_encode ($retorno);
        
        fecha_conexao ($conecta);
    }
?>