<?php
require_once 'vendor/autoload.php';

use Dotenv\Dotenv;

//session_start();

$dotenv = Dotenv::createImmutable(__DIR__);

$dotenv->load();

$route = new \App\Route();
