/**
 * Array to List
 */
export const arrayToList = (array) => {
  let list = null;

  for (let i = array.length - 1; i >= 0; i--)
    list = {
      value: array[i],
      rest: list
    };

  return list;
};

export const listToArray = (list) => {
  let array = [];

  for (let node = list; node; node = node.rest)
    array.push(node.value);

  return array;
};

/**
 * Keys and values to list
 */

export const getKeyValuePairs = (obj) => {
  return Object.entries(obj);
};

/**
 * Invert keys and values
 */

export const invertKeyValue = (obj) => {
  return Object.fromEntries(Object.entries(obj).map(a => a.reverse()))
};

/**
 * Get all methods from object
 */

export const getAllMethodsFromObject = (obj) => {
  return Object.getOwnPropertyNames(obj).filter(function (p) {
    return typeof Math[p] === 'function';
  });
}

export function Clock() {
  this.render = function () {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    console.log(`${hours}:${mins}:${secs}`);
  }

  this.stop = function () {
    clearInterval(this.timer);
  }

  this.start = function () {
    this.render();
    this.timer = setInterval(() => this.render(), 1000);
  }
}

/**
 * Groups
 */

export class Group {
  constructor() {
    this.values = [];
  }

  add(element) {
    if (this.values.includes(element))
      console.log("Value(s) already added to Group. Values must be unique.")
    else
      this.values.push(element);
  }

  has(element) {
    return this.values.includes(element);
  }

  delete(element) {
    if (this.has(element)) {
      this.values = this.values.filter(index => index != element);
    }
  }

  static from(iterable) {
    let group = new Group();
    for (let item of iterable)
      group.add(item);
    return group;
  }
}
