function fibT(n: number, memo: { [key: number]: number} ={}): number{
  if(n in memo){
    return memo[n];
  }

  if(n <= 2){
    return 1;
  }
  memo[n]=fibT(n - 1, memo)+ fibT(n - 2, memo);
  return memo[n];
}

//test the memoization function
console.log(fibT((10);
console.log(fibT(50));
