const calculator = {
  name: "math",
  add: function(num1, num2) {
    return num1 + num2;
  },
  subtract: function(num1, num2) {
    return num1 - num2;
  }
};
console.log(calculator.name);           
console.log(calculator.add(5, 3));      
console.log(calculator.subtract(10, 4)); 
console.log(calculator.add(100, 25));   