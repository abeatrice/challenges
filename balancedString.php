#!/usr/bin/php
<?php

/**
 * determine if letters in string appear at the same 
 * frequency as all other letters in string
 *
 * @param string $string
 * @return bool
 */
function balanced($string)
{
   $letters = array_unique(str_split($string));

   if(count($letters) <= 1) return true; 

   foreach($letters as $i => $letter)
   {
       
        if($i == 0) {
            $count = substr_count($string,$letter);
            continue;
        }

       $tempCount = substr_count($string,$letter);

       if($count != $tempCount) return false;

       $count = $tempCount;
        
   }

   return true;

}

var_dump(balanced('xxxyyyzzz')); //true
var_dump(balanced('abccbaabccba')); //true
var_dump(balanced('xxxyyyzzzz')); //false
var_dump(balanced('abcdefghijklmnopqrstuvwxyz')); //true
var_dump(balanced('pqq')); //false
var_dump(balanced('fdedfdeffeddefeeeefddf')); //false
var_dump(balanced('www')); //true
var_dump(balanced('x')); //true
var_dump(balanced('')); //true