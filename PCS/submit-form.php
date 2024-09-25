<?php
if(isset($_POST['submit'])) {
    // Récupération des données du formulaire
    $nom = $_POST['nom'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Construction de l'e-mail
    $to = 'mr222compte@gmaiil.com';
    $subject = 'Nouveau message depuis le formulaire de contact';
    $headers = 'From: ' . $email . "\r\n" .
        'Reply-To: ' . $email . "\r\n" .
        'X-Mailer: PHP/' . phpversion();
    $body = "Nom: $nom\n\nEmail: $email\n\nMessage:\n$message";

    // Envoi de l'e-mail
    if(mail($to, $subject, $body, $headers)) {
        echo 'Votre message a été envoyé avec succès.';
    } else {
        echo 'Une erreur s\'est produite. Veuillez réessayer plus tard.';
    }
}
?>
