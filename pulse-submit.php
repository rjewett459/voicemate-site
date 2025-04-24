<?php
// pulse-submit.php

$target_dir = "uploads/";
if (!file_exists($target_dir)) {
    mkdir($target_dir, 0775, true);
}

$response = ["success" => false];

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $text = isset($_POST['message']) ? trim($_POST['message']) : '';
    $filename = '';

    if (isset($_FILES['audio']) && $_FILES['audio']['error'] === 0) {
        $fileTmp = $_FILES['audio']['tmp_name'];
        $fileName = basename($_FILES['audio']['name']);
        $targetFile = $target_dir . time() . "_" . preg_replace("/[^a-zA-Z0-9\.\-_]/", "_", $fileName);

        if (move_uploaded_file($fileTmp, $targetFile)) {
            $filename = $targetFile;
        }
    }

    $log_entry = date('Y-m-d H:i:s') . "\nText: $text\nAudio File: $filename\n---\n";
    file_put_contents("pulse-log.txt", $log_entry, FILE_APPEND);

    $response["success"] = true;
    $response["message"] = "Pulse received successfully.";
}

header('Content-Type: application/json');
echo json_encode($response);
