/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

*/


/*  So, in terms of both time and space complexity, this function is already quite efficient, and it 
    would be hard to make it more efficient without changing the underlying problem or the
    requirement of using indices. However, the use of a Map object instead of a plain JavaScript
    object for the hash map in this implementation provides a number of benefits, including
    better performance, especially when working with large arrays, and easier handling of keys
    with special properties such as null or undefined.

    Time ve space complexity ikisinde de O(n). Olabilecek en etkili yontem

    DAHA BUYUK ARRAYLERDE MAP KULLANMAK PERFORMANS ACISINDAN DAHA BUYUK AVANTAJ SAGLIYOR. O YUZDEN ILK METHOD DAHA IYI
*/

// ZORLUK SEVIYESI - EASY

//MAP KULLANARAK COZUM
function twoSum (nums, target) {
    const map = new Map();
    for ( let i = 0; i < nums.length; i++) {
        if(map.has(target - nums[i])) {
            return [i, map.get(target - nums[i])]
        }
        map.set(nums[i], i)
    }
}

//OBJE KULLANARAK - Hiz olarak map e gore yavas kalsa da hafiza olarak mapten daha iyiydi
function twoSum2 (nums, target) {
    const obj = {};
    for ( let i = 0; i < nums.length; i++) {
        if(obj.hasOwnProperty(target - nums[i])) {
            return [i, obj[target - nums[i]]]
        }
        obj[nums[i]] = i
    }
}
console.log(twoSum2([1,5,2,4], 9));