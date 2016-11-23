<?php

require ("database.php");

if ($_POST) {
    $pdo = Database::connect();
    $stmt = $pdo->prepare("SELECT * FROM pages WHERE title = :title");
    $stmt->bindParam(':title', $title, PDO::PARAM_STR);
    $title = $_POST['title'];
    $stmt->execute();
    Database::disconnect();
}


?>