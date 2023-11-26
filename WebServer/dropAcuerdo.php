<?php
//variable interna = variable externa
$var1 = $_GET['Num'];
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

$sql = "DELETE FROM Acuerdos WHERE idAcuerdos = $var1";
$cons = mysqli_query($cone, $sql);
$result = mysqli_fetch_array($cons);

echo["ok"]

?>