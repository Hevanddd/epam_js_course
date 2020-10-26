# Module 5: Asynchronous JavaScript

## Callbacks

_Read:_

- [Callback hell](http://callbackhell.com/) (~25min)

## Promises

_Read:_

- [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) (~20min)

_Watch:_

- [Promises](https://www.youtube.com/watch?v=2d7s3spWAzo) (~20min)
- [Error handling Promises in JavaScript](https://www.youtube.com/watch?v=f8IgdnYIwOU) (~10min)

## Async functions

_Read:_

- [Async function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function) (~15min)

_Watch:_

- [Async / Await in JavaScript](https://www.youtube.com/watch?v=568g8hxJJp4) (~25min)
- [Async JS Crash Course - Callbacks, Promises, Async Await](https://www.youtube.com/watch?v=PoRJizFvM7s) (~25min)

## Generators

_Watch:_

- [Generators in JavaScript](https://www.youtube.com/watch?v=ategZqxHkz4) (~30min)

## Event loop

_Read:_

- [Concurrency model and the event loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop) (~10min)

_Watch:_

- [What the heck is the event loop anyway?](https://www.youtube.com/watch?v=8aGhZQkoFbQ) (~25min)
- [Jake Archibald: In The Loop - JSConf.Asia 2018](https://www.youtube.com/watch?v=cCOL7MC4Pl0) (~30min)

## Exercises

### Delay

Write a function that returns a promise, which becomes resolved in some milliseconds 

``` js
delay(1000).then(() => console.log("Hey!")) // → ‘Hey!’ in 1 second 
```

### Array of promises in series 

Write a function to run an given array of promises in series, without using async/await syntax 

``` js
runPromisesInSeries([ 
  () => delay(1000).then(() => { 
    console.log('message in 1 second') 
  }), 
  () => delay(2000).then(() => { 
    console.log('message in 3 seconds') 
  }) 
]); 
// → ‘message in 1 second’ 
// → ‘message in 3 seconds’ 
```

### Building Promise.all 

Given an array of promises, Promise.all returns a promise that waits for all of the promises in the array to finish. It then succeeds, yielding an array of result values. If a promise in the array fails, the promise returned by all fails too, with the failure reason from the failing promise. 

Implement something like this yourself as a regular function called Promise_all. 

Remember that after a promise has succeeded or failed, it can’t succeed or fail again, and further calls to the functions that resolve it are ignored. This can simplify the way you handle failure of your promise. 

``` js
function Promise_all(promises) { 
  return new Promise((resolve, reject) => { 
    // Your code here. 
  }); 
} 

Promise_all([]).then(array => { 
  console.log("This should be []:", array); 
}); 

function soon(val) { 
  return new Promise(resolve => { 
    setTimeout(() => resolve(val), Math.random() * 500); 
  }); 
} 

Promise_all([soon(1), soon(2), soon(3)]).then(array => { 
  console.log("This should be [1, 2, 3]:", array); 
}); 

Promise_all([soon(1), Promise.reject("X"), soon(3)]) 
  .then(array => { 
    console.log("We should not get here"); 
  }) 
  .catch(error => { 
    if (error != "X") { 
      console.log("Unexpected failure:", error); 
    } 
  }); 
```

### Fibonacci 

Write a generator function that returns fibonacci sequence 

``` js
let [...first10] = fibonacci(10); 
console.log(first10); // → [0, 1, 1, 2, 3, 5, 8, 13, 21, 34] 
```
 
 ### Generator helper 

Write a helper function that takes a generator function and invokes it step by step 

 ``` js
const asyncTask1 = () => new Promise((resolve, reject) => setTimeout(() => resolve('first resolved'), 1000)); 
const asyncTask2 = () => new Promise((resolve, reject) => setTimeout(() => resolve('second resolved'), 1000)); 
const asyncTask3 = () => new Promise((resolve, reject) => setTimeout(() => reject('third rejected'), 1000)); 
console.log('invoke helper') 

helper(function* main() { 
  try { 
    const a = yield asyncTask1(); 
    console.log(a); 
    const b = yield asyncTask2(); 
    console.log(b); 
    const c = yield asyncTask3(); 
  } catch(e) { 
    console.error('error happened', e); 
  } 
}); 

// → ‘invoke helper’ 
// 1000ms after helper invoked → ‘first resolved’ 
// 2000ms after helper invoked → ‘second resolved’ 
// 3000ms after helper invoked → ‘error happened third rejected’ 
 ```

 ### Use fetch to work with fake json api server (optional) 

About fetch - https://developer.mozilla.org/ru/docs/Web/API/Fetch_API/Using_Fetch 
Server url: https://jsonplaceholder.typicode.com/ 
Methods: 
*  GET - /comments 
*  GET - /posts/:id 
*  PUT /users/:id 
*  DELETE - /posts/:id 

Use fake api to get, put and delete posts: 

*  Write a function which will fetch the list of comments; 
*  Then use Math.random to get random comment from the list; 
*  Fetch post using postId from the comment object; 
*  Then fetch user by userId from the post; 
*  DELETE fetched post; 
*  Using PUT change username to one you prefer more and log the result in console; 

### My Promise (optional) 

Write your own promise implementation. 
Promise can have different states: 
*  Pending; 
*  Fulfilled; 
*  Rejected; 

Promise should have then and catch methods written in prototype; 

The behavior is expected like native promises: 

``` js
const myPromise = new MyPromise((resolve, reject) => { 
    setTimeout(() => reject(new Error('Time is up')), 5000); 
});  

const myPromise = new MyPromise((resolve, reject) => { 
    setTimeout(() => resolve('successful!!')5000); 
}); 

myPromise 
    .then((res) => console.log(res)) 
    .catch((error) => console.log(error); 
```
