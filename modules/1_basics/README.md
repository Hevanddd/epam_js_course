# Module 1: Introduction to JS basics

## Basic concepts of Javascript language.

Data structures, Operations, Conditional logic, Loops, Basic functions

_Read:_

- [Introduction to JS](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript) (~30min)

_Watch:_

- [Introduction to JS](https://www.youtube.com/watch?v=_y9oxzTGERs) (~70min)

 
## Understanding Variable Scope & Closures 

_Read:_

- [Grammar and types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Declarations) (~10min) 

_Watch:_

- [Understanding Variable Scope & Closures Without Losing your Mind](https://www.youtube.com/watch?v=iSlSxDNarDY) (~15min) 

- [Let vs var](https://www.youtube.com/watch?v=q8SHaDQdul0) (~10min) 

- [Const](https://www.youtube.com/watch?v=2iLVFyYwyRA) (~10min) 

- [Let, var and const](https://www.youtube.com/watch?v=sjyJBL5fkp8) (~20min) 


## Types conversions and equality

_Read:_

- [JS Equality table](https://dorey.github.io/JavaScript-Equality-Table/) (~10min) 

- [JavaScript type coercion explained](https://medium.com/@sergeybulavyk/%D0%BF%D1%80%D0%B5%D0%BE%D0%B1%D1%80%D0%B0%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D1%82%D0%B8%D0%BF%D0%BE%D0%B2-%D0%B2-javascript-35a15ddfc333) (~15min) 

_Watch:_ 

- [Typing: Static vs Dynamic, Weak vs. Strong](https://www.youtube.com/watch?v=C5fr0LZLMAs) (~10min) 

 
## ES6 features

_Read:_

- [ES6](https://slides.com/ginvaell/es6#/)  (~10min) 


## Exercises

### Change the capitalization of all letters in a string 

Write a function to change the capitalization of all letters in a given string. 

``` js
console.log(changeCase("21century")); // Output: 21CENTURY 
console.log(changeCase("Hybris")); // Output: hYBRIS 
```

### Filter out the non-unique values in an array 

Write a function to filter out non-unique values in an array. 

``` js
console.log(filterNonUnique([1, 2, 2, 3, 4, 4, 5])); // Output: [1,3,5] 
console.log(filterNonUnique([1, 2, 3, 4])); // Output: [1,2,3,4] 
```

### Sort string in alphabetical order

Write a function to convert the letters of a given string in alphabetical order. 

``` js
console.log(alphabetSort("Python")); // Output: ‘Phnoty’ 
```

### Get min integer 

Write function which gets array of integers and returns second minimum value 

``` js
console.log(getSecondMiminum([5,0,7,3,8])); // Output: 3 
```

### Double every even integer 

Write function which gets array of integers and returns another array of integers where every even number is doubled 

``` js
console.log(doubleEveryEven([2,0,7,3,8,4])); // Output: [4,0,7,3,16,8]
```

### Create array with all possible pairs of two arrays 

Write a JavaScript program to create a new array out of the two supplied by creating each possible pair from the arrays. 

``` js
console.log(getArrayElementsPairs([1, 2], ['a', 'b'])); // Output: [[1, “a”], [1, “b”], [2, “a”], [2, “b”]] 
```

### deepEqual 

Write a function deepEqual that takes two values and returns true only if they are the same value or are objects with the same properties, where the values of the properties are equal when compared with a recursive call to deepEqual 

``` js
let obj = {here: {is: "an"}, object: 2}; 
console.log(deepEqual(obj, obj)); // Output: true 
console.log(deepEqual(obj, {here: 1, object: 2})); // Output: false 
console.log(deepEqual(obj, {here: {is: "an"}, object: 2})); // Output: true 
 ```

 ### formatDate 

Write function that takes parameter of different types and returns date in ‘dd.mm.yy’ format 

 ``` js
console.log( formatDate('2011-10-02') ); // 02.10.11 
console.log( formatDate(1234567890000) ); // 14.02.09 
console.log( formatDate([2014, 0, 1]) ); // 01.01.14 
console.log( formatDate(new Date(2014, 0, 1)) ); // 01.01.14 
 ```
