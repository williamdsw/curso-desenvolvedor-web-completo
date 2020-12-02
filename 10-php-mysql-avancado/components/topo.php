<header>
    <div id="header_central">
        
        <?php
            
            /* Mensagem de saudacao */
            if (isset ($_SESSION ["usuario"]))
            {
                $user = $_SESSION ["usuario"];
                $nome_completo = $user["nomecompleto"];
        ?>   
            <div id="header_saudacao">
                <h5> Bem-vindo, <?php echo $nome_completo; ?> - 
                <a href="../logout.php"> Logout </a> </h5>
            </div>
        <?php } ?>
        
        <img src="../assets/logo_andes.gif">
        <img src="../assets/text_bnwcoffee.gif">
    </div>
</header>