/**
 * Change the capitalization of all letters in a string
 */
export const changeCase = (word) => {
  const result = [...word].map((letter => {
    if (letter === letter.toLowerCase()) {
      return letter.toUpperCase();
    } else
      return letter.toLowerCase();
  }))
  return result.join("");
};

/**
 * Filter out the non-unique values in an array
 */
export const filterNonUnique = (array) => {
  let result = {};

  array.forEach((item) => {
    result[item] = result.hasOwnProperty(item) ? false : true;
  });
  return Object.keys(result).filter((i) => result[i]).map(Number);
};

/**
 * Sort string in alphabetical order
 */
export const alphabetSort = str => str.split("").sort().join("");

/**
 * Get min integer
 */
export const getSecondMinimum = arr => arr.sort((a, b) => a - b)[1];

/**
 * Double every even integer
 */
export const doubleEveryEven = (arr) => {
  return arr.map((el) => {
    if (el % 2 === 0) {
      return el * 2;
    } else {
      return el;
    }
  })
};

/**
 * Create array with all possible pairs of two arrays
 */
export const getArrayElementsPairs = (array1, array2) => {
  let pairs = [];
  array1.forEach((a1) => {
    array2.forEach((a2) => {
      pairs.push([a1, a2]);
    });
  });
  return pairs;
};

// console.log(getArrayElementsPairs([1, 2], ['a', 'b']));

/**
 * Deep equal
 */
export const deepEqual = (x, y) => {
  if (x === y) {
    return true;
  } else if ((typeof x == "object" && x != null) && (typeof y == "object" && y != null)) {
    if (Object.keys(x).length != Object.keys(y).length)
      return false;

    for (let prop in x) {
      if (y.hasOwnProperty(prop)) {
        if (!deepEqual(x[prop], y[prop]))
          return false;
      } else
        return false;
    }

    return true;
  } else
    return false;
};

/**
 * Format date
 */
export const formatDate = (data) => {
    let date = new Date(data);
    if(Array.isArray(data)){
        date = new Date(data[0], data[1], data[2]);
    }
    const m = date.getMonth() + 1;
    const d = date.getDate();
    const y = date.getFullYear().toString().substr(-2);
    return `${m < 10 ? "0" + m : m}/${d < 10 ? "0" + d : d }/${y}`;
};