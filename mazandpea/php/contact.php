<?php

$errorMSG = "";

// NAME

    $name = $_POST["name"];


// EMAIL

    $email = $_POST["email"];


// RSVP

    $rsvp = $_POST["rsvp"];


//DIETARY REQUIREMENTS
$dietaryRequirements = $_POST["dietaryRequirements"];


$EmailTo = "hello@mazandpea.co.uk";
$Subject = "RSVP from $name";
// prepare email body text
$Body = "";
$Body .= "Name: ";
$Body .= $name;
$Body .= "\n";
$Body .= "Email: ";
$Body .= $email;
$Body .= "\n";
$Body .= "rsvp: ";
$Body .= $rsvp;
$Body .= "\n";
$Body .= "Dietary Requirements: ";
$Body .= $dietaryRequirements;
$Body .= "\n";

// send email
$success = mail($EmailTo, $Subject, $Body, "From:".$email);

// redirect to success page
if ($success && $errorMSG == ""){
   echo "success";
}else{
    if($errorMSG == ""){
        echo "Something went wrong";
    } else {
        echo $errorMSG;
    }
}

?>