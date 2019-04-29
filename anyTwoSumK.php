#!/usr/bin/php
<?php

/**
 * Given a list of numbers and a number k, 
 * return whether any two numbers 
 * from the list add up to k.
 *
 * @param array $list
 * @param int $k
 * @return int
 */
function anyTwoSumK(array $list, int $k)
{
    if (sizeof($list) == 1) return $list[0] == $k;

    if (sizeof($list) == 0) return $k == 0;

    for($i = 0; $i < (sizeof($list) - 1); $i++)
    {
        for($j = $i + 1; $j < (sizeof($list)); $j++)
        {
            if ($list[$i] + $list[$j] == $k) return true;
        }
    }

    return false;

}

var_dump(anyTwoSumK([], 1)); //false
var_dump(anyTwoSumK([], 0)); //true
var_dump(anyTwoSumK([5, 1], 0)); //false
var_dump(anyTwoSumK([1], 1)); //true
var_dump(anyTwoSumK([1], 2)); //false
var_dump(anyTwoSumK([10, 15, 3, 7], 17)); //true
var_dump(anyTwoSumK([10, 15, 3, 7, 8], 11)); //true
var_dump(anyTwoSumK([1, 1, 1, 1, 1], 1)); //false
var_dump(anyTwoSumK([1000, 1542, 9548, 1, 518448485], 518450027)); //true