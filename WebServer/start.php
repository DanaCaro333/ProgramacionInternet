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

$sql = "UPDATE Central SET Admin=0, Total=0, Conteo=0 WHERE Admin in (0,1)";

$result = mysqli_query($cone, $sql);

if($result){
    echo "Actualizacion satisfactoria";
}else{
    echo "Actualizacion NO satisfactoria";       
}

?>