<?php

$type = $_GET['type'];
$id = $_GET['id'];

switch ($_SERVER['REQUEST_METHOD']) {

	case 'GET':
    if (strlen($id) == 0) {
      include($type.'/list.php');
    } else {
		  include($type.'/get.php');
    }
		break;

	case 'POST':
		include($type.'/post.php');
		break;
    
  default:
    header('HTTP/1.1 404 Resource not found');
    echo('Invalid request method. Expected GET or POST');
    exit();

}