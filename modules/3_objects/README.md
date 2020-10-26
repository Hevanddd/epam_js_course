# Module 3: Objects, context and inheritance basics

## Basics

_Read:_
- [Objects basics](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics) (~30min)

## Objects creation

_Read:_
- ["New" keyword](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new) (~10min)

_Watch:_
- [Bind and this - Object Creation in JavaScript P1](https://www.youtube.com/watch?v=GhbhD1HR5vk) (~15min)
- [Examples of bind and this - Object Creation in JavaScript P2](https://www.youtube.com/watch?v=PIkA60I0dKU) (~15min)

## Inheritance 

_Read:_
- [What’s the Difference Between Class & Prototypal Inheritance?](https://medium.com/javascript-scene/master-the-javascript-interview-what-s-the-difference-between-class-prototypal-inheritance-e4cd0a7562e9) (~30min)

## Excersises

### Array to List 

Write a function arrayToList that creates a linked list from an array, and listToArray that creates array from list 

``` js
let array = [1, 2, 3] 
let list = { 
  value: 1, 
  rest: { 
    value: 2, 
    rest: { 
      value: 3, 
      rest: null 
    } 
  } 
}; 
arrayToList([10, 20]); 
// → {value: 10, rest: {value: 20, rest: null}} 

listToArray(arrayToList([10, 20, 30])); 
// → [10, 20, 30] 
```

### Keys and values to list 

Write a function to convert an object into a list of '[key, value]' pairs. 

``` js
getKeyValuePairs({red: "#FF0000", green: "#00FF00", white: "#FFFFFF"}); 
// → [["red","#FF0000"],["green","#00FF00"],["white","#FFFFFF"]] 
```

### Invert keys and values 

Write a function to get a copy of the object where the keys have become the values and the values the keys. 

``` js
invertKeyValue({red: "#FF0000", green: "#00FF00", white: "#FFFFFF"});  
// → {"#FF0000":"red","#00FF00":"green","#FFFFFF":"white"} 
```

### Get all methods from an object 

Write a function to get all methods from an object 

``` js
getAllMethods(Math); // → ["abs", "acos", "acosh", "asin", ...] 
```

### Clock 

Write a JS class with two methods run and stop. First methods starts displaying current time in console in format ‘hh:mm:ss’ every second starting from now. Second method stops it. In order to complete the task, you should create a class with methods in ES5 style. 

``` js
const clock = new Clock(); 
clock.run(); 
// → 
// 19:55:11 
// 19:55:12 
// 19:55:13 
// … 

clock.stop(); 
// → timer stops 
```

### Groups 

Write a class called Group, which has add, delete and has methods. Its constructor creates an empty group, add adds a value to the group (but only if it isn’t already a member), delete removes its argument from the group (if it was a member), and has returns a Boolean value indicating whether its argument is a member of the group. 

Use the === operator, or something equivalent such as indexOf, to determine whether two values are the same. 

Give the class a static from method that takes an iterable object as argument and creates a group that contains all the values produced by iterating over it. 

Here you may use ES6 syntax. 

``` js
class Group { 
  // Your code here. 
} 
let group = Group.from([10, 20]); 
console.log(group.has(10)); // → true 
console.log(group.has(30)); // → false 
group.add(10); 
group.delete(10); 
console.log(group.has(10)); // → false 
```
