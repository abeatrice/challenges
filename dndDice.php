#!/usr/bin/php
<?php

/**
 * role d&d dice and return sum
 *
 * @param string $input
 * @return int
 */
function diceTotal($input)
{
    list($dice,$sideCount) = explode('d',$input);

    $n = 0;

    for($i=0;$i<$dice;$i++)
    {
        $n += random_int(1,$sideCount);            
    }

    return $n;
}

var_dump(diceTotal('2d20'));
var_dump(diceTotal('1d4'));
var_dump(diceTotal('3d8'));