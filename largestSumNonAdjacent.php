#!/usr/bin/php
<?php

/**
 * returns the largest sum of non-adjacent 
 * numbers in a list of ints
 *
 * @param array $numbers
 * @return int
 */
function largestSumNonAdjacent(array $numbers)
{
    for($i = 0; $i < sizeof($numbers); $i++)
    {
        var_dump($numbers[$i]);
    }
}

var_dump(largestSumNonAdjacent([2, 4, 6, 2, 5] )); //13
var_dump(largestSumNonAdjacent([5, 1, 1, 5])); //10