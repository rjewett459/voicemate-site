<?php
// get-intent.php (Debug version)

header('Content-Type: application/json');

ini_set('display_errors', 0); // turn OFF screen display
ini_set('log_errors', 1);     // turn ON logging
ini_set('error_log', 'intent_debug.log'); // log here
error_reporting(E_ALL);


// DEBUG LOGGING
$logfile = 'intent_debug.log';
file_put_contents($logfile, "--- New Request ---\n", FILE_APPEND);

try {
    $rawInput = file_get_contents("php://input");
    file_put_contents($logfile, "Raw Input: $rawInput\n", FILE_APPEND);

    $input = json_decode($rawInput, true);
    if (!$input || !isset($input["transcript"])) {
        throw new Exception("Invalid or missing 'transcript'");
    }

    $transcript = trim((string) ($input["transcript"] ?? ''));
    if ($transcript === "") {
        throw new Exception("Transcript is empty");
    }

    // Simulated AI intent
    $intent = "Follow-up requested about: \"$transcript\"";
    $ctas = ["Listen Later", "Book a Call", "Ask Me a Question"];

    echo json_encode([
        "success" => true,
        "intent" => $intent,
        "ctas" => $ctas
    ]);
} catch (Exception $e) {
    http_response_code(500);
    file_put_contents($logfile, "Error: " . $e->getMessage() . "\n", FILE_APPEND);
    echo json_encode([
        "success" => false,
        "error" => $e->getMessage()
    ]);
}
