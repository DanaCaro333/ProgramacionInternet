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

$sql = "SELECT Conteo FROM Central WHERE Admin in (0,1)";
$cons = mysqli_query($cone, $sql);
$conteo = mysqli_fetch_array($cons);
$sql = "SELECT Total FROM Central WHERE Admin in (0,1)";
$cons = mysqli_query($cone, $sql);
$total = mysqli_fetch_array($cons);

if($conteo < $total){
    echo 0;
}else{
    echo 1;
}

?>