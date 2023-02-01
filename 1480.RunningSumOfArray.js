/*
Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
Return the running sum of nums.

Input: nums = [1,2,3,4]
Output: [1,3,6,10]
Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
*/


// Time Complexity : 37.73% COK YAVAS - Space Complexity = 93.23% HAFIZA SUPER
/* COK KOTU YAZDIM. TIME COMPLEXITY o(n*2) O YUZDEN YAVAS */
function runningSum (nums) {
    let runningSumArr = [];
    let sum = 0;
    for(let i = 0; i < nums.length; i++) {
        for(let j = 0; j <= i; j++) {
            sum += nums[j]
        }
        runningSumArr.push(sum)
        sum = 0;
    }
    return runningSumArr;
}

// CHAT GPT NIN DAHA EFFICIENT KODU
// TIME COMPLEXITY O(N) SPACE COMP O(N)
function runningSum2 (nums) {
    let runningSumArr = [];
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        runningSumArr.push(sum);
    }
    return runningSumArr;
}
// CHAT GPT DIGER KODU
// TIME COMPLEXITY O(N) SPACE COMP O(1) HAFIZAYI DAHA IYI KULLANIYOR
// KONU HAFIZA ISE BU KOD DAHA IYI AMA USTTEKI KOD DAHA GUVENILIR SEBEBI ISE ALTTAKI KODDA ORIJINAL ARRAY MODIFIYE EDILIYOR
function runningSum3 (nums) {
    let runningSum = 0;
    for (let i = 0; i < nums.length; i++) {
      runningSum += nums[i];
      nums[i] = runningSum;
    }
    return nums;
  }

console.log(runningSum([1,2,3,4]));
