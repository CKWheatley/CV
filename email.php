<?php

    // $name = $_POST['name'];
    // $company = $_POST['company'];
    // $jobtitle = $_POST['jobtitle'];
    // $pay = $_POST['pay'];
    // $description = $_POST['description'];
    // $location = $_POST['location'];
    // $extrainfo = $_POST['extrainfo'];
    // $file = $_POST['file'];

    // $msg = "Employer Name: " . $name . "\nCompany: " . $company . "\nJob Title: " . $jobtitle "\nOffered Pay: " . $pay . "\nJob Description: " . $description . "\nLocation: " . $location . "\nextra info: " . $extrainfo . "\n" . $file;
    // $headers = "MIME-Version: 1.0" . "\r\n";
	// $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    // mail('ckwheatley15@gmail.com' ,"My CV Interest",$msg, $headers);
    // header("Location: sent.html");

    // sent html will have a little game on it.
    // potentially add local db to stop duplicate offers if possible to show off sql ability



 
    




    

    //smtp example 
    /*

    $mail = new PHPMailer(true);

    //Send mail using gmail
    if($send_using_gmail){
        $mail->IsSMTP(); // telling the class to use SMTP
        $mail->SMTPAuth = true; // enable SMTP authentication
        $mail->SMTPSecure = "ssl"; // sets the prefix to the servier
        $mail->Host = "smtp.gmail.com"; // sets GMAIL as the SMTP server
        $mail->Port = 465; // set the SMTP port for the GMAIL server
        $mail->Username = "your-gmail-account@gmail.com"; // GMAIL username
        $mail->Password = "your-gmail-password"; // GMAIL password
    }

    //Typical mail data
    $mail->AddAddress($email, $name);
    $mail->SetFrom($email_from, $name_from);
    $mail->Subject = "My Subject";
    $mail->Body = "Mail contents";

    try{
        $mail->Send();
        echo "Success!";
    } catch(Exception $e){
        //Something went bad
        echo "Fail - " . $mail->ErrorInfo;
    }

    */



?>
