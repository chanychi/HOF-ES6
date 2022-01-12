let names = ['Jon', 'Tyrion', 'Jamie' , 'Cersei']
let [first, second, three, four] = names;
console.log(second) //print Tyrion

function getArray() {
  return ['Does', 'This', 'Work']
}

let [test1, test2] = getArray();
console.log(test2) //print 'This'

let a = 8;
let b = 10;
[a,b] = [b,a]
console.log(a) //10
console.log(b) //8
