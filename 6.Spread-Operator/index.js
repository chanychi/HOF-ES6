let num1 = [1,2,3,4,5];
let num2 = [6,7,8,9,10];

console.log(num1.concat(num2)) //print [1,2,3,4,5,6,7,8,9,10]
console.log([...num1, ...num2]) //print [1,2,3,4,5,6,7,8,9,10]
console.log(...num1) //print 1, 2, 3, 4, 5