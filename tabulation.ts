function fib(n: number): number{
  //Base cases
  if(n <= 2){
    return 1;
  }
  //Initialize an array to store Fibonacci numbers
  const fibT: number[] = new Array(n + 1).fill(0);
  fibT[1] = 1;
  fibT[2] = 1;

  //Fil the table iteratively
  for (let i =3; i<= n; i++){
    fibT[i] = fibT[i - 1] + fibT[i - 2];
  }
  //Return the nth Fibonacci number
  return fibT[n];
}
