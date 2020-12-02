<?php
    include_once ("../private-php/conexao.php");

    $conecta = abre_conexao ();

    /* Selecao de estados */
    $query = "SELECT estadoID, nome ";
    $query .= "FROM estados ";
    $result = mysqli_query ($conecta, $query);
    if (!$result)
        die ("Erro no banco");
?>

<!doctype html>
<html>
    <head>
        <meta charset="UTF-8">
        <title> Inserir via AJAX </title> 
        <link rel="stylesheet" href="../css/estilo-form.css">
    </head>
    <body>
        <main>  
            <div id="janela_formulario">
                <form id="formulario_transportadora">
                    <label for="nometransportadora"> Nome da Transportadora </label>
                    <input type="text" id="nometransportadora" name="nometransportadora">

                    <label for="endereco"> Endereço </label>
                    <input type="text" id="endereco" name="endereco">

                    <label for="cidade"> Cidade </label>
                    <input type="text" id="cidade" name="cidade">

                    <select id="estados" name="estados">
                        <?php
                            while ($linha = mysqli_fetch_assoc ($result)) 
                            {
                                $estadoID = $linha["estadoID"];
                                $nome = $linha["nome"];
                                echo "<option value='{$estadoID}'> {$nome} </option>";
                            }
                        ?>
                    </select>
                    
                    <input type="submit" value="Confirmar inclusão">  
                    
                    <div id="mensagem"><p></p></div>
                </form> 
            </div>
        </main>
        
        <script src="../libs/jquery-3.4.0.min.js"></script>
        <script src="../js/18-inserir.js"></script>
    </body>
</html>