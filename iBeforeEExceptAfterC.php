#!/usr/bin/php
<?php

/**
 * Determine if string follows rule: 
 * i before e except after c
 *
 * @param string $string
 * @return bool
 */
function iBeforeEExceptAfterC($string)
{
    $string = strtoupper($string);

    $pos = strpos($string,'I');

    if($pos === false) return true;

    if($string[$pos+1] !== 'E' and $string[$pos-2] !== 'C') return false;

    return true;
}

var_dump(iBeforeEExceptAfterC('a')); //true
var_dump(iBeforeEExceptAfterC('zombie')); //true
var_dump(iBeforeEExceptAfterC('transceiver')); //true
var_dump(iBeforeEExceptAfterC('veil')); //false
var_dump(iBeforeEExceptAfterC('icier')); //false