<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $nome = $_POST["name"];
    $email = $_POST["email"];
    $assunto = $_POST["subject"];
    $mensagem = $_POST["message"];

    // Verifica se os campos não estão vazios
    if (!$nome || !$email || !$assunto || !$mensagem) {
        echo "error";
        exit;
    }

    $destinatario = "contato@paradigmadesign.com";
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    $corpo_email = "Nome: $nome\n";
    $corpo_email .= "E-mail: $email\n";
    $corpo_email .= "Assunto: $assunto\n";
    $corpo_email .= "Mensagem:\n$mensagem\n";

    // Enviar e-mail
    if (mail($destinatario, $assunto, $corpo_email, $headers)) {
        echo "success";
    } else {
        echo "error";
    }
} else {
    echo "error";
}
?>