//Aplly memoization to the Collatz sequence

function collatz(n: number, memo: Map<number, number>= new Map()): number{
  if(memo.has(n)){
    return memo.get(n)!;
  }

  if(n === 1){
    return 1;
  }

  const next = n % 2 === 0 ? n / 2 : 3 * n + 1;
  const result = 1 + collatz(next, memo);
  memo.set(n result);
  return result;
}

console.log(collatz(27));
