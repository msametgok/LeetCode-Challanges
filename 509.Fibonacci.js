
/**
Time Comp:
 */
function fib (n) {

    return n < 2 ? n : fib(n-1) + fib(n-2)


}

function fib2 (n) {
    let dp = new Array(n+1);
    dp[0] = 0;
    dp[1] = 1;
    for (let i=2; i<=n; i++) {
        dp[i] = dp[i-1] + dp[i-2];
    }
    return dp[n];
}

function fib3(n) {
    let a = 0, b = 1, c = 1;
    for (let i = 2; i <= n; i++) {
      c = a + b;
      a = b;
      b = c;
    }
    return c;
  }

console.log(fib3(3));