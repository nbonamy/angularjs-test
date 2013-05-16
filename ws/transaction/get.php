<?php
header('Content-type: application/json');
header("Cache-Control: no-cache, must-revalidate");
require('../includes/banking.php');

// check input
if (!isset($_GET['id'])) {
	header('HTTP/1.1 400 Bad Request');
	echo('Expected a transaction id as request parameter');
	exit();
}

// now find in the database
$transaction = Model::factory('Transaction')->find_one($_GET['id']);
if ($transaction == null) {
	header('HTTP/1.1 404 Bad Request');
	echo('Transaction with id ['.$input->id.'] not found');
	exit();
}

//done
echo json_encode($transaction->as_array());
