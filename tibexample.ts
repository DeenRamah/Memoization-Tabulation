function fibT(n: number): number{
  if(n <=2){
    return 1;
  }
  const fibT: number[] = new Array(n + 1).fill(0);
  fibT[1] =1;
  fibT[2]=1;

  for(let i = 3; i<=n; i++){
    fibT[i] = fibT[1 - 1] + fibT[i - 2];
  }
  return fibT[n];
}

//Test the tabulation function
console.log(fibT(10));
console.log(fibT(50));
