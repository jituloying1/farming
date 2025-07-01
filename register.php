<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "social_app";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$email = $_POST['email'];
$phone = $_POST['phone'];
$user = $_POST['username'];
$pass = password_hash($_POST['password'], PASSWORD_DEFAULT);

$sql = "INSERT INTO users (username, email, phone, password) VALUES (?, ?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ssss", $user, $email, $phone, $pass);

if ($stmt->execute()) {
    echo "success";
} else {
    echo "Error: " . $stmt->error;
}
$conn->close();
?>



