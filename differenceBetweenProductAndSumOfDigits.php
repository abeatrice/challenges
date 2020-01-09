#!usr/bin/php
<?php

/**
 * Given an integer, return the difference between the product of its digits and the sum of its digits.
 *
 * @param int $digits
 * @return int
 */
function differenceBetweenProductAndSumOfDigits(Int $digits) {
    $product = 0;
    $sum = 0;
    
    foreach(str_split($digits) as $key => $digit) {
        if($key == 0) {
            $product = $digit;
            $sum = $digit;
        } else {
            $product *= $digit;
            $sum += $digit;
        }
    }

    return $product - $sum;
}

var_dump(differenceBetweenProductAndSumOfDigits(11)); // -1
var_dump(differenceBetweenProductAndSumOfDigits(22)); // 0
var_dump(differenceBetweenProductAndSumOfDigits(234)); // 15
var_dump(differenceBetweenProductAndSumOfDigits(4421)); // 21