<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_FILES['audio'])) {
    $audioPath = $_FILES['audio']['tmp_name'];

    // Example: send to OpenAI Whisper API (or your own backend)
    // For now, mock response:
    echo json_encode([
        "transcript" => "This is a placeholder transcript. Real processing goes here."
    ]);
} else {
    http_response_code(400);
    echo json_encode(["error" => "No audio received."]);
}
?>
