function sum(n) {
    if (n === 1) {
      return 1;
    }
    else {
      return n + sum(n - 1);} }
  console.log(sum(1));
  console.log(sum(3));
  console.log(sum(5)); 
  console.log(sum(10)); 