<?php
//variable interna = variable externa
$var1 = $_GET['Nombre'];
$var2 = $_GET['Password'];
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

$sql = "INSERT INTO Usuario (Nombre, Password, Admin) VALUES ('$var1','$var2',0)";

if(mysqli_query($cone, $sql)){
    echo "yasss";
}else{
    echo "$var1,$var2";
}

?>