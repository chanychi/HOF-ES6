function print(n) {
  n = n || 0
  return n
}

function print(n = 0) {
  return n
}
console.log(print()) //prints 0
console.log(print(2)) //prints 2