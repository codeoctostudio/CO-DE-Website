<?php
require __DIR__ . '/db.php';

$action = $_POST['action'] ?? ''; 

// ค่าคงที่
$COURSE_NAME = 'Python';
$CONTACT_VIA = 'python_test';

// ฟังก์ชันสุ่มรหัส Passcode
function generatePasscode() {
    $characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    $randomPart = '';
    for ($i = 0; $i < 4; $i++) {
        $index = rand(0, strlen($characters) - 1);
        $randomPart .= $characters[$index];
    }
    return $randomPart . date('dm');
}

// --- LOGIN ---
if ($action === 'login') {
    $passcode = trim($_POST['ref_code'] ?? ''); 

    $stmt = $mysqli->prepare("SELECT * FROM DemoInfo WHERE Passcode = ?");
    $stmt->bind_param("s", $passcode);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($row = $result->fetch_assoc()) {
        $age = 0;
        if (preg_match('/Age: (\d+)/', $row['memo'], $matches)) {
            $age = (int)$matches[1];
        }

        $data = [
            'name' => $row['Nickname'],
            'age' => $age,
            'school' => $row['School'],
            'parent_name' => $row['Parents_name'],
            'mobile' => $row['Phone_no']
        ];

        echo json_encode(['ok' => true, 'new_id' => $row['id'], 'data' => $data]);
    } else {
        echo json_encode(['ok' => false, 'error' => 'Not found']);
    }
    exit;
}

// --- REGISTER ---
if ($action === 'register') {
    // 1. รับค่า (ส่วนนี้สำคัญ ห้ามหาย!)
    $name   = trim($_POST['name'] ?? '');
    $age    = (int)($_POST['age'] ?? 0);
    $school = trim($_POST['school'] ?? '');
    $parent = trim($_POST['parent_name'] ?? '');
    $mobile = trim($_POST['mobile'] ?? '');

    if ($name === '') { echo json_encode(['ok'=>false, 'error'=>'No name']); exit; }

    // 2. หา DemoInfo_ID (แบบไม่มี 0 นำหน้า และเรียงลำดับถูก)
    $sqlMax = "SELECT MAX(CAST(DemoInfo_ID AS UNSIGNED)) as max_id FROM DemoInfo";
    $resultMax = $mysqli->query($sqlMax);
    $rowMax = $resultMax->fetch_assoc();
    
    $nextNum = ($rowMax['max_id'] !== null) ? intval($rowMax['max_id']) + 1 : 1;
    $demoId = (string)$nextNum; // เป็น '1', '2', ... '10'

    // 3. สุ่ม Passcode
    $passcode = '';
    $unique = false;
    $limit = 0;
    while (!$unique && $limit < 100) {
        $passcode = generatePasscode();
        $check = $mysqli->query("SELECT id FROM DemoInfo WHERE Passcode = '$passcode'");
        if ($check->num_rows == 0) $unique = true;
        $limit++;
    }

    $memo = "Age: " . $age;
    $currentDate = date('Y-m-d');

    // 4. บันทึก
    $stmt = $mysqli->prepare("INSERT INTO DemoInfo (Nickname, DemoInfo_ID, School, Parents_name, Contact_via, Phone_no, Date, Course, memo, Passcode) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
    
    $stmt->bind_param("ssssssssss", 
        $name, 
        $demoId, 
        $school, 
        $parent, 
        $CONTACT_VIA, 
        $mobile, 
        $currentDate, 
        $COURSE_NAME, 
        $memo, 
        $passcode
    );
    
    if ($stmt->execute()) {
        echo json_encode(['ok' => true, 'new_ref_code' => $passcode, 'new_id' => $mysqli->insert_id]);
    } else {
        http_response_code(500);
        echo json_encode(['ok' => false, 'error' => $stmt->error]);
    }
    exit;
}
?>