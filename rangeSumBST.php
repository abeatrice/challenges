#!usr/bin/php
<?php

class TreeNode {
    public $val = null;
    public $left = null;
    public $right = null;
    function __construct($value) { $this->val = $value; }
}

$root = new TreeNode(10);
$root->left = new TreeNode(5);
$root->left->left = new TreeNode(3);
$root->left->right = new TreeNode(7);
$root->right = new TreeNode(15);
$root->right->right = new TreeNode(18);

function rangeSumBST($root, $L, $R)
{
    $currentNode = $root;
    var_dump($currentNode);
    while($currentNode->val !== $L) {
        if($currentNode->val > $L) {
            $currentNode = $currentNode->left;
        } else {
            $currentNode = $currentNode->right;
        }
    }
    var_dump($currentNode);
}

var_dump(rangeSumBST($root, 7, 15));