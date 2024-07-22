//Calculate the factorial of a number using memoization:
function factorial(n: number, memo: Map<number, number> = new Map()):number{
  if(memo.has(n)){
    return memo.get(n)!;
  }
  if(n === 0){
    return 1;
  }
  const result = n * factorial(n - 1, memo);
  memo.set(n, result);
  return result;
}

console.log(factorial (5));
