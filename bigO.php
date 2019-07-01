#!/usr/bin/php
<?php

// O(1)
//execute in same amount of time regardless of array size
function addItemToArray(array $array, int $newItem)
{
    $array[] = $newItem;
    
    return $array;
}

// O(N)
//time to complete grows in direct proportion to amount of data. EG linear search
function indexesWithValue(array $items, int $value)
{
    $indxes = [];

    foreach($items as $key => $item) {

        if($item == $value) {
            $indxes[] = $key;
        }

    }

    return $indxes;

}

// O (N^2)
//time to complete proportional to square of the data
function bubbleSort($array)
{
    for($i = sizeof($array) - 1; $i > 1; $i--)
    {
        for($j = 0; $j < $i; $j++)
        {
            if($array[$j] > $array[$j+1]) {
                $temp = $array[$j];
                $array[$j] = $array[$j+1];
                $array[$j+1] = $temp;
            }
        }        
    }

    return $array;
}

