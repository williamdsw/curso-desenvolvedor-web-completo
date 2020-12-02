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

    if (isset ($_POST["enviar"]))
    {
        $mensagem = publicar_arquivo ($_FILES["upload_file"]);
    }
?>

<!doctype html>
<html>
    <head>
        <meta charset="UTF-8">
        <title> Inserir Transportadora </title>
        
        <!-- estilo -->
        <link rel="stylesheet" href="../css/estilo.css">
        <link rel="stylesheet" href="../css/crud.css">
        
        <style>
        
            input 
            {
                display: block;
                margin-bottom: 15px;
            }
        </style>
    </head>

    <body>
        <!-- Inclui header -->
        <?php include_once ("../components/topo.php"); ?>
        
        <main>
            
            <form action="" method="post" enctype="multipart/form-data">
                
                <!-- campos -->
                <input type="hidden" name="MAX_FILE_SIZE" value="10000000000">
                <input type="file" name="upload_file" multiple="true">
                <input type="submit" name="enviar" value="Publicar">
            </form>
            
            <?php 
            
                if (isset ($mensagem))
                {
                    echo $mensagem;
                }
            ?>
            
        </main>
        
        <!-- inclui footer -->
        <?php include_once ("../components/rodape.php"); ?>
    </body>
</html>

<?php
    /* Fecha conexao */
    mysqli_close ($conecta);
?>