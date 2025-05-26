const notadad = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== 'number') {
      return "adad nis"; }}
  return "adad hast";};
console.log(notadad ([1, 2, 3, 4]));
console.log(notadad ([1, 2, 'a', 4])); 
