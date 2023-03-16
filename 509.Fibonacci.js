// ZORLUK SEVIYESI - EASY

// Time Complexity : O(2^n) 14.47% ASIRI YAVAS
// Space Comp : O(n) 96.75%
function fib (n) {

    return n < 2 ? n : fib(n-1) + fib(n-2)

}

// Time Comp: O(n) 75.95% - Space Complexity: O(n) 84.10%
//Chat Gpt kodu - En etkili yollardan birisi
//DYNAMIC PROGRAMMING APPROACH
function fib2 (n) {
    let dp = new Array(n+1);
    dp[0] = 0;
    dp[1] = 1;
    for (let i=2; i<=n; i++) {
        dp[i] = dp[i-1] + dp[i-2];
    }
    return dp[n];
}

// Time Comp: O(n) 86.39% - Space Complexity: O(1) 67.48%
//Chat Gpt kodu - En etkili yollardan birisi
// ITERATIVE APPROACH
function fib3(n) {
  if (n === 0) return 0;

  let a = 0, b = 1;
  for (let i = 2; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }

  return b;
  }

console.log(fib3(4));