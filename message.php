<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $first_name = $_POST["fname"];
  $last_name = $_POST["lname"];
  $email = $_POST["email"];
  $phone = $_POST["phone"];
  $message = $_POST["message"];

  $to = "info@anitabhouse.com";
  $subject = "Contact Form Submission from $first_name $last_name";
  $message_body = "Name: $first_name $last_name\nEmail: $email\nPhone: $phone\nMessage:\n$message";

  $headers = "From: $email";

  if (mail($to, $subject, $message_body, $headers)) {
    echo "Message sent successfully. We will get back to you soon.";
    header("location: thankyou.html"); 
  } else {
    echo "Something went wrong. Please try again later.";
  }
}
?>
