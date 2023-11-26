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

$sql = "DELETE FROM Voto WHERE Opcion in (1,2,3)";
$result = mysqli_query($cone, $sql);

if($result){
    echo "Actualizacion satisfactoria";
}else{
    echo "Actualizacion NO satisfactoria";       
    
}


?>