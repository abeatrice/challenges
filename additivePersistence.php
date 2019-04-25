#!/usr/bin/php
<?php

/**
 * calculate the additive persistence
 * sum digits of a number until a single digit is left
 * number of iterations is the additive persistence
 *
 * @param int|string $number
 * @return int
 */
function additivePersistence($number)
{
    if (strlen($number) == 1) return 0;

    $n = 0;

    do {

        $number = array_sum(str_split($number));

        $n++;

    } while(strlen($number) > 1);
    
    return $n;
}

var_dump(additivePersistence(13)); //1
var_dump(additivePersistence(1234)); //2
var_dump(additivePersistence(199)); //3
var_dump(additivePersistence(999999999)); //2
var_dump(additivePersistence(1)); //0