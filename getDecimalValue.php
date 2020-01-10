#!usr/bin/php
<?php

class ListNode {
    public $val = 0;
    public $next = null;
    function __construct($val) { $this->val = $val; }
}

$head = new ListNode(1);
$node2 = new ListNode(0);
$node3 = new ListNode(1);

$head->next = $node2;
$node2->next = $node3;

function getDecimalValue($head)
{
    $values = [];

    while($head->next) {
        $values[] = $head->val;
        $head = $head->next;
    }

    $values[] = $head->val;

    return dec($values);
}

function dec(Array $array)
{
    $result = 0;
    $base = 2;
    $exponent = sizeof($array) - 1;
    
    foreach ($array as $key => $value) {
        $columnValue = pow($base, $exponent);
        if($value) {
            $result += $columnValue;
        }
        $exponent--;
    }
    return $result;
}

// var_dump(getDecimalValue($head));
var_dump(dec([1,0,1])); //5
var_dump(dec([0])); //0
var_dump(dec([1])); //1
var_dump(dec([1,0,0,1,0,0,1,1,1,0,0,0,0,0,0])); //18880
var_dump(dec([0, 0])); //0