/*
const prevent reassignment. Use var or let (replace var with let in your future codes)
*/
const name = 'Jimbo'
//name = 'Bob' //this throws a type error (comment & uncomment out to test)

//Cool things
let array = [1,1,2,3,4,5,5,6]
let removeDup = new Set(array)
console.log(removeDup) //print an obj of {1,2,3,4,5,6}
console.log(removeDup.size) //print 6 -> size method is unique to set
//it also contains has, add, clear, delete, forEach, values, entries

let nThTimes = (n, func) => {
  let count = 0
  let result = 0
  return function () {
    if(count === n) {
      return result
    } else {
      result = func(...arguments)
      count++
      return result
    }
  }
}

let add = (a, b) => a + b;

let TwoTimes = nThTimes(2, add)
console.log(TwoTimes(2,3))
console.log(TwoTimes(4,2))
console.log(TwoTimes(5,6))
