# Module 2: Functions and functional expressions

## Functions basics

_Read:_

- [Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions) (~60min)
- [Functions basics](https://learn.javascript.ru/function-basics) (~30min)
- [Function declaration expression](https://learn.javascript.ru/function-declaration-expression) (~30min)

_Watch:_

- [First-class functions](https://www.youtube.com/watch?v=JEq7Ehw-qk8) (~5min)
- [Arrow functions](https://www.youtube.com/watch?v=mrYMzpbFz18) (~25min)
- [JavaScript Higher Order Functions & Arrays](https://www.youtube.com/watch?v=rRgD1yVwIvE) (~35min)

## Recursion

_Read:_

- [Recursion](https://learn.javascript.ru/recursion) (~30min)


## Closures

_Watch:_

- [Closures](https://www.youtube.com/watch?v=CQqwU2Ixu-U) (~10min)

## Currying

_Read:_

- [Partial Application and Currying](https://scotch.io/tutorials/javascript-functional-programming-explained-partial-application-and-currying) (~30min)


## Excercises

### Currying 

Write a function that merges words into sentence 

``` js
mergeWords('GNU')('is')('not')('Unix.')(); // Output: ‘GNU is not Unix.’ 
```

### Every/Some 

Write a JavaScript function that takes a list of valid users, and returns a function that returns true if all of the supplied users exist in the original list of users. You need to check only user ids, no need to check objects in depth 

``` js
let goodUsers = [ 
    { id: 1 }, 
    { id: 2 }, 
    { id: 3 } 
] 
// `checkUsersValid` is the function you'll define 

let testAllValid = checkUsersValid(goodUsers) 
testAllValid([ 
    { id: 2 }, 
    { id: 1 } 
]) 
// Output: true 

testAllValid([ 
    { id: 2 }, 
    { id: 4 }, 
    { id: 1 } 
]) 
// Output: false 
```

### Reduce 

Write a function that returns an object which contains the number of times each string occured in the array. 

``` js
const inputWords = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian']; 
countWords(inputWords);
// Output: { ‘Apple’: 2, ‘Banana’: 1, ‘Durian’: 3 } 
```

### Palindrome 

Write a function that checks whether a passed string is palindrome or not? 

``` js
isPalindrome('madam'); // Output: ‘The entry is a palindrome’ 
isPalindrome('fox'); // Output: ‘Entry is not a palindrome’ 
```

### Recursion 

1. Write a factorial function that takes a positive integer N as a parameter and prints the result of N! (factorial). 

``` js
factorial(5); // Output: 120 
```

2. Write a function to convert an amount to coins 

``` js
amountToCoins(46, [25, 10, 5, 2, 1]); // Output: [25, 10, 10, 1] 
```

3. Write a function using recursion that takes a function as its first argument, a number num as its second argument, then executes the passed in function num times. 

``` js
repeat(console.log('Wassup'), 5); // Function should output ‘Wassup’ 5 times 
```

4. (optional) Implement Array reduce function. For simplicity, your implementation of reduce doesn't need to replicate the behaviour of a reduce missing an initial value. You may assume the initial value will always be supplied. 

``` js
reduce([1,2,3], function(prev, curr, index, arr) { 
    return prev + curr; 
}, 0);
// Output: 6 
```
