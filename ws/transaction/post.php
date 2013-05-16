<?php
header('Content-type: application/json');
require('../includes/banking.php');

// check input
$input = json_decode(file_get_contents('php://input'));
if (!isset($input->id)) {
	header('HTTP/1.1 400 Bad Request');
	echo('Expected a JSON object with id attribute');
	exit();
}

// now find in the database
$transaction = Model::factory('Transaction')->find_one($input->id);
if ($transaction == null) {
	header('HTTP/1.1 404 Bad Request');
	echo('Transaction with id ['.$input->id.'] not found');
	exit();
}

// test check
if (isset($input->amount) && $input->amount < 0) {
	header('HTTP/1.1 400 Bad Request');
	echo('Amount cannot be negative');
	exit();
}

// update and save
if (isset($input->instant))			$transaction->instant = $input->instant;
if (isset($input->description)) $transaction->description = $input->description;
if (isset($input->amount))			$transaction->amount = $input->amount;
$transaction->save();
