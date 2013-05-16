<?php
header('Content-type: application/json');
require('../includes/banking.php');

//header('HTTP/1.1 500 Internal Server Error');
//echo('An error occured');
//exit();

$transactions = Model::factory('Transaction')->order_by_asc('instant')->order_by_asc('description')->find_many();
echo json_encode(array_map(function($transaction) {
    return $transaction->as_array();
}, $transactions));
