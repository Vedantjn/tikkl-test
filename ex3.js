// Async programming 3

/*
1. Using Callback
-----------------
We pass a method that the asynchronous method will call when the operation is complete. 
The method readChunk would be called like,

  readChunk(processData)

The implementation of readChunk would be something like this,

  function readChunk(callback){
    // start the async operation & return.
    // - when we get a notification that the operation is complete,
    // - check the status, 
    //    - on error throw an exception, otherwise,
    //    - call `callback(data)`
  }
*/

/** 
generates a random number [0,100) with a delay of 200ms.
See: https://developer.mozilla.org/en-US/docs/Web/API/setTimeout
*/
function getData(callback){
  setTimeout(
    () => callback(Math.round(Math.random() * 100)), 
    200
  )
}

console.log('Callback Implementation');

// Ex 3.1. Rewrite the code below using arrow function `(x) => code`
getData((n) => {
  console.log('Got some data:', n);
})

// Ex 3.2. Write code to push 10 data items from getData into an array
let arr = [];
for (let i = 0; i < 10; i++) {
  getData((n)=>{
    arr.push(n);
    if(arr.length == 10){
      
      // Ex 3.3  Print out the data array and the largest element. 
      // (Hint: When will all the data be available in the array?)
      console.log('Data array : ', arr);

      console.log("Largest element : ", Math.max(...arr));
    }
  })
  
}

console.log('will be processing data soon...');
