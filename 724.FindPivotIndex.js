/*
Given an array of integers nums, calculate the pivot index of this array.
The pivot index is the index where the sum of all the numbers strictly to the left
of the indexis equal to the sum of all the numbers strictly to the index's right.
If the index is on the left edge of the array, then the left sum is 0 because
there are no elements to the left. This also applies to the right edge of the array.
Return the leftmost pivot index. If no such index exists, return -1.

*/

// ZORLUK SEVIYESI - EASY

// Time Comp : O(N) Hiz 93.70 - Space Comp : O(1) Hafiza 41%
//Hizli fakat hafiza kullaniminda pek iyi degil
function pivotIndex(nums) {
    let leftSum = 0;
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
    }
    for (let i = 0; i < nums.length; i++) {
        if (leftSum === sum - leftSum - nums[i]){
            return i
        }
        leftSum += nums[i]
    }
    return -1
}

//console.log(pivotIndex([2,1,-1]));

// Time Comp : O(N) Hiz 94.64% - Space Comp : O(1) Hafiza 80.38%%
// Hem hiz hem hafiza konusunda cok cok iyi
function pivotIndex2 (nums) {
    const total = nums.reduce((acc, val) => acc + val, 0);
    let leftSum = 0;
    for (let i=0; i < nums.length; i++) {
        if (leftSum === total - leftSum - nums[i]) {
            return i;
        }
        leftSum += nums[i];
    }
    return -1;
}

console.log(pivotIndex2([1,7,3,6,5,6]));