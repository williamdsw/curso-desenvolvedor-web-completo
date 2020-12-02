<?php
    require_once ("../private-php/conexao.php");

    $conecta = abre_conexao ();

    /* ID */
    $transportadoraID = 1;

    /* Comando SQL */
    $sql = " SELECT * FROM transportadoras ";
    $sql .= " WHERE transportadoraID = {$transportadoraID} ";

    /* Conecta e busca */
    $query = mysqli_query ($conecta, $sql);

    if (!$query)
        die ("Falha na consulta");

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
?>

<!doctype html>
<html>
    <head>
        <meta charset="UTF-8">
        <title> Atualizar dados com AJAX </title>
        <link rel="stylesheet" href="../css/estilo-form.css">
    </head>

    <body>
        <main>
            <!-- Formulario -->
            <div id="janela_formulario">
                <form id="formulario_transportadora">
                    <h2> Alterar Dados da Transportadora </h2>
                    
                    <!-- campos -->
                    <input type="hidden" name="transportadoraID" value="<?php echo $transportadoraID ?>">
                    
                    <label for="nome_transportadora"> Nome da Transportadora </label>
                    <input type="text" id="nome_transportadora" name="nome_transportadora" placeholder="Nome da Transportadora" value="<?php echo $nometransportadora ?>">
                    
                    <label for="endereco"> Endereço </label>
                    <input type="text" id="endereco" name="endereco" placeholder="Endereço" value="<?php echo $endereco ?>">
                    
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
                    
                    <input type="submit" value="Confirmar Alteração">
                    
                    <div id="mensagem"><p></p></div>
                </form>
            </div>
        </main>
        
        <script src="../libs/jquery-3.4.0.min.js"></script>
        <script src="../js/19-alterar.js"></script>
    </body>
</html>

<?php fecha_conexao ($conecta); ?>