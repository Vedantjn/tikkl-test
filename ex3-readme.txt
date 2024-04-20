// Async programming

/**
Typically, in Java, C, etc, code execution is synchronous. Each successive
line of code is executed only after the previous line completes execution.
Code that reads/writes from a file, DB, network, etc will block until the IO
operation is complete.

JavaScript is non-blocking. All IO and timer-based operations will return 
immediately even when the data operation has not been completed. Async
programming allows us to write code in response to the actual completion
of the operation.

Here's a typical case. Assume that there's a method, readChunk, that reads a chunk of
data from a file in 5ms, and processData that transforms/manipulates a chunk.

In C/Java you would write something like this,

  data = readChunk() Alternatively, readChunk(&data) 
  processData(data)

processData will be executed only after readChunk returns, and when it does it is
expected to have read a chunk of the file into the variable, data.

However, in JS since methods are non-blocking, readChunk will not wait. So, in a sequence 
of calls above, readChunk will return immediately, and data will be empty. So processData
will get no data (empty) to process.

There are 3 programming paradigms to effectively work with asynchronous programming in JS.
1. Callback (see ex3.1.js)
2. Promise (see ex3.2.js)
3. async/await (No examples at this time. You should use async/wait only after you master Promises.)
*/
