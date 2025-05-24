
function factorial(n) {

    if (isNaN(n) || n <= 0) {
      return 1;
    }
   
    return n * factorial(n - 1);
  }

  const argStr = process.argv[2];
  
  const num = parseInt(argStr);
  
  const result = factorial(num);
  
  console.log(result);
  