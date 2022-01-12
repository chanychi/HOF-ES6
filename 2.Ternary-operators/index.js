var add = function (a, b) {
  if (a + b >= 5) {
    return true;
  } else {
    return false;
  }
}

var add = (a, b) => {
  return (a + b >= 5) ? true : false;
};

var add = (a, b) => (a+b >= 5) ? true : false;
console.log(add(2,3))
// (a+b >= 5) is the if condition
// the two values after the '?' evaluate the left of the colon if true, evaluate the right if false