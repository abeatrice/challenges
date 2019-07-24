/**
 * Given two arrays arr1 and arr2, the elements of arr2 are distinct, and all elements in arr2 are also in arr1.
 * Sort the elements of arr1 such that the relative ordering of items in arr1 are the same as in arr2.  
 * Elements that don't appear in arr2 should be placed at the end of arr1 in ascending order.
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
    let arr3 = [];
    for (i = 0; i < arr2.length; i++) {
        for (j = 0; j < arr1.length; j++) {
            if (arr1[j] === arr2[i]) {
                arr3.push(arr1.splice(j, 1).pop());
                j--;
            }
        }
    }
    let temp = 0;
    for (i = 0; i < arr1.length; i++) {
        for (j = arr1.length - 1; j > i; j--) {
            if (arr1[i] > arr1[j]) {
                temp = arr1[j];
                arr1[j] = arr1[i];
                arr1[i] = temp;
            }
        }
    }
    return arr3.concat(arr1);
};

console.log(relativeSortArray([2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], [2, 1, 4, 3, 9, 6])); //[2,2,2,1,4,3,3,9,6,7,19]