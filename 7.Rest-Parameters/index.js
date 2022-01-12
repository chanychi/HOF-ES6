function sum(...theArgs) {
  return theArgs.reduce((acc, el) => acc + el)
};

console.log(sum(1,2,3)) //print 6
console.log(sum(1,2,3,4,5)) //print 15

//now the function sum will take an infinite amount of argument.
//using the rest parameters theArgs becomes an array, which allows you to use array.prototype methods