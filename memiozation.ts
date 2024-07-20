//how can we implement Fibonacci using memoization in ts
function fibc(n: number, memo: Record<number, number>= {}):number{
  if(n<=1) return n;
  if(n in memo) returm memo[n];

  memo[n] = fibc(n - 1, memo) + fibc (n -2, memo);
  return memo[n];
}


console.log(fibc(10));//output = 55
