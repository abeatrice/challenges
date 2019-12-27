<?php

/**
 * Given an array nums of integers, return how many of them contain an even number of digits.
 * @param Integer[] $nums
 * @return Integer
*/
function findNumbers($nums) {
    $count = 0;
    foreach ($nums as $key => $num) {
        $len = strlen($num);
        if($len % 2 == 0) {
            $count++;
        }
    }
    return $count;
}

var_dump(findNumbers([12,345,2,6,7896]));