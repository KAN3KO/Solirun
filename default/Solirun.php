<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

define('MYSQL_HOST', '172.16.119.4');
define('MYSQL_USERNAME', 'solirun');
define('MYSQL_PASSWORD', 'solirunsioadmin');
define('MYSQL_DATABASE', 'Solirun');

$mysql = new mysqli(MYSQL_HOST, MYSQL_USERNAME, MYSQL_PASSWORD, MYSQL_DATABASE);

$_GET['plus'];

$result = $mysql->query("UPDATE Classe SET nbTours = nbTours + 1 WHERE nomClasse = 'classe1'");

$mysql->close();
?>