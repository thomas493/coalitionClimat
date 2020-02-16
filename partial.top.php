<html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="KEYWORDS" content="pacte coalition climat rouen municipales 2020"/>
        <meta name="description" content="Page de collecte des engagements des candidats aux municipales 2020"/>
        <script src="js/jquery.js" defer></script>
        <script src="js/script.js" defer></script>
        <link rel="stylesheet" type="text/css" href="css/style.css"/>
        <link rel="shortcut icon" type="image/png" href="favicon.ico"/>
        <title>Coalition Climat - Rouen</title>
            
    </head>
    <body>
    <?php
        if (!$fp2 = fopen("logfile.txt","a+")) {
            echo "Echec de l'ouverture du fichier";
        }
        else {
            fputs($fp2,date("d/m/Y G:i:s "));
            fputs($fp2,$_SERVER['REMOTE_ADDR']);
            fputs($fp2," ");
            fputs($fp2,$_SERVER['HTTP_USER_AGENT']);
            fputs($fp2,"\n");
            fclose($fp2);
        }
    ?>
        <div class="global">
            <div id="header">
                <div class="menu">
                    <div class="item indexLink" ><a href="index.php">Accueil</a></div>
                   
                </div>
                <img id="logoImage"  src="img/coalitionClimatRouen.png" width="709" height="709">
            </div>
            <div id="container">
