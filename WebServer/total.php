<?php
//datos de conexion
$server = "localhost";
$user = "dana";
$pass = "86547";
$bd = "id21233744_datos";
$cone = mysqli_connect($server, $user, $pass);

if(!$cone){
    die("error al conectar");
}

$selectedDB = mysqli_select_db ( $cone , "id21233744_datos" );

if(!$selectedDB){
    die("error al conectar");
}

$sql = "SELECT Total FROM Central WHERE Admin in (0,1)";
$cons = mysqli_query($cone, $sql);
$row = mysqli_fetch_array($cons);
$update =  $row[0] + 1;
$sql2 = "Update Central SET Total=$update WHERE Admin in (0,1)";
$res= mysqli_query($cone, $sql2);
echo $update;


?>