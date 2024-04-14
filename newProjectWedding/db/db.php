<?php

$dbhost = "localhost";
$dbname = "wed";
$username = "root";
$password = "";


$db = mysqli_connect($dbhost, $username, $password, $dbname);
function get_wishes_all(){
    global $db;
    $query = 'SELECT * FROM wedding__wishes';
    $wishes = mysqli_query($db, $query);
    return $wishes;
}

function get_guests_all(){
    global $db;
    $query = 'SELECT * FROM wedding_quests';
    $guests = mysqli_query($db, $query);
    return $guests;
}

function get_guests_number(){
    global $db;
    $query  = mysqli_query($db, 'SELECT COUNT(1) FROM wedding_quests');
    $count = mysqli_fetch_array($query)[0];
    return $count;
}