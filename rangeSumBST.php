#!usr/bin/php
<?php

class TreeNode {
    public $val = null;
    public $left = null;
    public $right = null;
    function __construct($value) { $this->val = $value; }
}

class Solution {
    
    public function rangeSumBST($root, $L, $R)
    {
        return $this->getSum($root, $L, $R, 0);
    }
    
    public function getSum($root, $L, $R, $sum) {
        
        if ($root === NULL) return $sum;
        
        if ($root->val >= $L && $root->val <= $R) {
            $sum += $root->val;
            $sum = $this->getSum($root->right, $L, $R, $sum);
            return $this->getSum($root->left, $L, $R, $sum);
        } elseif ($root->val > $R) {
            return $this->getSum($root->left, $L, $R, $sum);
        } else {
            return $this->getSum($root->right, $L, $R, $sum);
        }
    }
}
    
$root = new TreeNode(10);
$root->left = new TreeNode(5);
$root->left->left = new TreeNode(3);
$root->left->right = new TreeNode(7);
$root->right = new TreeNode(15);
$root->right->right = new TreeNode(18);

$solution = (new Solution())->rangeSumBST($root, 7, 15);
var_dump($solution);