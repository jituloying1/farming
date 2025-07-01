<?php
$servername = "localhost";
$username = "root";
$password = ""; // your MySQL root password
$dbname = "social_app";

// Connect to MySQL
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$userInput = $_POST['username'];
$passInput = $_POST['password'];

// Check login by email or phone
$sql = "SELECT * FROM users WHERE email=? OR phone=?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ss", $userInput, $userInput);
$stmt->execute();
$result = $stmt->get_result();

if ($row = $result->fetch_assoc()) {
    if (password_verify($passInput, $row['password'])) {
        // Success
        echo "success";
    } else {
        echo "Invalid password";
    }
} else {
    echo "User not found";
}
$conn->close();
?>
