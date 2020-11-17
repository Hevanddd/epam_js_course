/**
 * Point
 * 
 * @param {number} x 
 * @param {number} y 
 */
export class Point {
  constructor(x, y) {
    if (isNaN(x) || isNaN(y)) {
      throw new Error()
    }
    this.x = x
    this.y = y
  }

  plus(point) {
    return new Point(this.x + point.x, this.y + point.y)
  }
}

/**
 * Speaker and Screamer
 */

// ES5
function SpeakerES5(name, verb) {
  this.name = name
  this.verb = verb || "says"
}

SpeakerES5.prototype.speak = function (text) {
  console.log(`"${this.name} ${this.verb} ${text}"`)
}

function ScreamerES5(name) {
  SpeakerES5.call(this, name, "shouts")
}

ScreamerES5.prototype = Object.create(SpeakerES5.prototype)
ScreamerES5.prototype.speak = function (text) {
  SpeakerES5.prototype.speak.call(this, text.toUpperCase())
}

export class Speaker {
  constructor(name) {
    if (name === undefined) {
      throw new Error('no arguments');
    }
    this.name = name
  }

  get verb() {
    return "says"
  }

  speak(text) {
    console.log(`${this.name} ${this.verb} ${text}`)
  }
}

export class Screamer extends Speaker {
  constructor(name) {
    super(name)
  }

  get verb() {
    return "shouts"
  }

  speak(text) {
    super.speak(text.toUpperCase())
  }
}

/**
 * The Reading list
 */
export class Book {
  constructor({
    title,
    genre,
    author,
    isRead,
    readDate
  }) {
    if (title === undefined) {
      throw new Error();
    }
    this.title = title
    this.genre = genre
    this.author = author
    this.isRead = isRead || false
    this.dateFinished = readDate || null
  }

  markAsRead() {
    this.isRead = true;
    this.dateFinished = new Date(Date.now());
  }
}

export class BookList {
  constructor(books) {
    this.books = books || [];
    this.booksFinished = 0;
    this.booksNotFinished = this.books.length;
    this.currentBook = this.books.length ? this.books[0] : null;
    this.nextBook = this.books.length > 1 ? this.books[1] : null;
    this.lastBook = null;
  }

  add(book) {
    if (book instanceof Book) {
      this.books.push(book);
      this.booksNotFinished += 1;
      if (this.books[0] === book) {
        this.currentBook = book;
      } else {
          this.nextBook = book;
      }
    } else {
      throw new Error();
    }
  }

  finishCurrentBook() {
    this.currentBook.markAsRead();
    this.lastBook = this.currentBook;
    this.currentBook = this.books.find((el) => !el.isRead);
  }
}
