<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit;
}

header('Content-Type: application/json');

$DB_HOST = 'localhost';        // มักจะเป็น localhost ถ้าไฟล์ php อยู่เครื่องเดียวกับ db
$DB_USER = 'codeacadem_Test_User'; // ถามพี่ Admin หรือดูใน config เก่า
$DB_PASS = 'AkY5fwce_8D-5_h';
$DB_NAME = 'codeacadem_Test'; // ชื่อ Database ที่สร้างตาราง DemoInfo ไว้

$mysqli = new mysqli($DB_HOST, $DB_USER, $DB_PASS, $DB_NAME);

if ($mysqli->connect_errno) {
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => 'DB connect failed: ' . $mysqli->connect_error]);
    exit;
}

$mysqli->set_charset('utf8mb4');
?>
