<?php

define('__ROOT__', dirname(__FILE__));
require_once(__ROOT__.'/idiorm.php');
require_once(__ROOT__.'/paris.php');
require_once(__ROOT__.'/../model/transaction.php');

ORM::configure('mysql:host=localhost;dbname=banking');
ORM::configure('username', 'root');
ORM::configure('password', '');
ORM::configure('logging', true);
