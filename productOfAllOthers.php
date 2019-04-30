#!/usr/bin/php
<?php

/**
 * Given an array of integers, return a new array such that each element 
 * at index i of the new array is the product of all the numbers in the original 
 * array except the one at i.
 *
 * @param array $numbers
 * @return array 
 */
function productOfAllOthers(array $numbers)
{
    $result = [];
    
    foreach ($numbers as $key => $number) {

        $temp = $numbers;
        
        unset($temp[$key]);
            
        $result[] = array_product($temp);
    
    }

    return $result;
}

var_dump(productOfAllOthers([1, 2, 3, 4, 5])); //[120, 60, 40, 30, 24]
var_dump(productOfAllOthers([3, 2, 1])); //[2, 3, 6]