// Async programming -- ex4

/*
2. Using Promise
----------------
Promise provides a mechanism to simplify cascading callbacks -- 
callbacks inside callbacks inside ...

Async methods can now return a value -- a Promise that will eventually
be resolved. Promise instance methods can be used to retrieve the 
resolved value (using a callback -- in JS using callbacks is a normal 
way to program.)

If getData returns a promise, then you can can rewrite the code as,

  getData().then((val) => console.log('got: ', val))

The `then` instance method calls the method that you pass in as soon, as 
the promise is resolved. Until then, the Promise may only have an unresolved 
value.

Notice how this is equivalent to,

  const p = getData();
  p.then((value) => console.log('got:', val) );


Learn all about Promises: 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises
*/

console.log('Promise Implementation');

function getData(){
  return new Promise((resolve, reject) => {
    setTimeout(
      () => resolve(Math.round(Math.random() * 100)),
      200
    )
  });
}

getData().then((data) => console.log('Got data:', data));
console.log('Waiting for promised data ...');

// Ex 4.1. Write a loop to generate an array of 10 data elements using `getData()`
let dataElements = [];
const promises = [];

for(let i = 0; i < 10; i++){
  promises.push(getData());
}

// Hint: Use Promise.all
Promise.all(promises).then((data) => {
  dataElements = data;
  console.log("Got all data : ", dataElements);
})

console.log("Waiting for promised data...");

// Ex. 4.2 Print out all the generated data, and the sum.
let sum = 0;
for(const element of dataElements){
  console.log("Data element : ", element);
  sum += element;
}
console.log("Sum of all data elements : ", sum);