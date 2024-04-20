// Functions are first-class objects in JS.
// and they can be passed around like any other data.

function double(x){
  return x * 2
}

// assign a function to a variable.
const square = function (x) {
  return x * x
}

// define a method using the arrow operator.
// See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
const cube = (x) => square(x) * x;

// method takes another method as argument.
function applyMethod(method, val){
  return method(val)
}

// Pass a method as an arg
let v = applyMethod(double, 10)
console.log('double: ', v)

// Method from a variable is just a method.
v = applyMethod(square, 10)
console.log('square: ', v)

// Methods can be defined on the fly with no name -- lambda
v = applyMethod((x) => x * 3, 10)
console.log('x3: ', v)

const numbers = [7, 4, 3, 12, 9]
console.log('doubles: ')

// The forEach member function of Array takes a method and runs it for each element.
numbers.forEach((n) => console.log(applyMethod(double, n)))

// Ex 2.1 Write code to print out value/2 of each number in the numbers array.
// - Use forEach with a custom lambda method.
console.log("Halved values: ");
numbers.forEach((n) => console.log(n/2));