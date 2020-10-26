# Module 4: OOP. Prototypes. More on objects and inheritance

## Inheritance

_Read:_

- [Inheritance in JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Inheritance) (~40min)

_Watch:_

- [Prototype basics - Object Creation in JavaScript P3](https://www.youtube.com/watch?v=YkoelSTUy7A) (~20min)
- [The 'new' keyword - Object Creation in JavaScript P4](https://www.youtube.com/watch?v=Y3zzCY62NYc) (~25min)
- [Object.create - Object Creation in JavaScript P6](https://www.youtube.com/watch?v=GhbhD1HR5vk) (~15min)
- [Class keyword - Object Creation in JavaScript P7](https://www.youtube.com/watch?v=Tllw4EPhLiQ) (~20min)


## Extra

_Read:_

- [The Forgotten History of OOP](https://medium.com/javascript-scene/the-forgotten-history-of-oop-88d71b9b2d9f) (~25min)

_Watch:_

- [Composition over Inheritance](https://www.youtube.com/watch?v=wfMtDGfHWpA) (~10min)

## Exercises

### Point 

Write a class called Point, which represents a point in two-dimensional space. A point has x and y properties, given as arguments to its constructor. 

It also has a single method plus, which takes another point and returns the sum of the two points, that is, a new point whose x is the sum of the x properties of the two original points, and whose y is the sum of their y properties. 

``` js
new Point(1, 2).plus(new Point(2, 1)) // → Point{x: 3, y: 3} 
```

### Speaker and Screamer 

Write two classes, which are called Speaker and Screamer. Speaker is a simple type that exposes a speak method which, when called, logs the given text along with the speaker's name. Shouter is a subtype of Speaker which shouts its text and makes it uppercase. 

You will need to complete this task in ES5 first and then rewrite in ES6. 

``` js
new Speaker("Mr. Calm").speak("easy, man"); 
// → “Mr. Calm says easy, man” 

new Screamer("Mr. Loud").speak("hell yeah"); 
// → “Mr. Loud shouts HELL YEAH” 
```

### The Reading List 

Create a class BookList. Create another class called Book. 

#### BookLists should have the following properties: 

*  Number of books marked as read 
*  Number of books marked not read yet 
*  A reference to the next book to read (book object) 
*  A reference to the current book being read (book object) 
*  A reference to the last book read (book object) 
*  An array of all the Books 

#### Each Book should have several properties: 

*  Title 
*  Genre 
*  Author 
*  Read (true or false) 
*  Read date, can be blank, otherwise needs to be a JS Date() object 

#### Every Book should have a few methods: 

.markAsRead(book) 
*  Should mark the book that is currently being read as "read" 
*  Give it a read date of new Date(Date.now()) 

#### Every Booklist should have a few methods: 

.add(book)
*  Should add a book to the books list. 
*  If it is first one in a list, then it should became current one 

.finishCurrentBook()
*  Change the last book read to be the book that just got finished 
*  Change the current book to be the next book to be read 
*  Change the next book to be read property to be the first unread book you find in the list of books 
 
 
