<?php
require __DIR__ . '/db.php';

// 1. รับค่าจาก Unity (รับแค่ ID กับ Wrong Answers พอ)
$id = (int)($_POST['id'] ?? 0);
$wrong_answers = trim($_POST['wrong_answers'] ?? ''); 

// 2. ตรวจสอบ ID
if ($id <= 0) { 
    echo json_encode(['ok' => false, 'error' => 'Invalid ID']); 
    exit; 
}

// 3. อัปเดตลง Database
// ตัด score = ? ออกไปเลย ให้เหลือแค่อัปเดต wrong_answers
$stmt = $mysqli->prepare("UPDATE DemoInfo SET wrong_answers = ? WHERE id = ?");

// แก้ bind_param เหลือแค่ "si" (String, Int)
$stmt->bind_param("si", $wrong_answers, $id);

$ok = $stmt->execute();

echo json_encode(['ok' => $ok]);
?>