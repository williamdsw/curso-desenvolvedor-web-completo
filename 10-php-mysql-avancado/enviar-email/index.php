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
        if (enviar_mensagem ($_POST))
        {
            $mensagem = "Mensagem enviada com sucesso";
        }
        else 
        {
            $mensagem = "Erro no envio";
        }
    }

   
?>

<!doctype html>
<html>
    <head>
        <meta charset="UTF-8">
        <title> Enviar Email </title>
        
        <!-- estilo -->
        <link rel="stylesheet" href="../css/estilo.css">
        <link rel="stylesheet" href="../css/contato.css">
    </head>

    <body>
        <!-- Inclui header -->
        <?php include_once ("../components/topo.php"); ?>
        
        <main> 
            <div id="janela_formulario">
                <form action="" method="post">
                    
                    <!-- campos -->
                    <input type="text" name="nome" placeholder="Digite seu nome">
                    <input type="email" name="email" placeholder="Digite seu email">
                    <label> Mensagem </label>
                    <textarea name="mensagem"></textarea>
                    <input type="submit" name="enviar" value="Enviar Mensagem">
                    
                    <?php if (isset ($mensagem)) echo "<p> $mensagem </p>"; ?>                     
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