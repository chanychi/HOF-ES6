let foo = null

function nullish (input) {
  return input ?? 'this is null'
}

console.log(nullish(foo)); //print this is null
foo = 8;
console.log(nullish(foo)); //print 8
/*
*/
let obj = {};

function something (input) {
  return input.name?.first ?? 'This is null or undefined'
  // return input.name.first ?? 'Not defined' //throws a type error
}

console.log(something(obj)) //print 'This is null or undefined'