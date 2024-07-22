function fibonacci(n: number, memo:Map<number, number>= new Map()): number{
  if(memo.has(n)){
    return memo.get(n)!;
  }
  if (n <= 1){
    return n;
  }

  const result = fibonacci(n -1 , memo)+ fibonacci(n - 2, memo);
  memo.set(n, result);
}

console.log(fibonacci(10))
