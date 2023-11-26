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

$sql = "SELECT Admin FROM Usuario WHERE Nombre = '$var1' and Password = '$var2'";

$result = mysqli_query($cone, $sql);

if((mysqli_num_rows($result)==0)){
    echo -1;
}else{
    while($row = mysqli_fetch_array($result)) {
    echo ($row[0]);       // Print the entire row data
    }
}

?>