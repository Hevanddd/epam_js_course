/**
 * Currying 
 */
export const mergeWords = (word) => {
  return (nextWord) => {
    if (nextWord === undefined) {
      return word;
    } else {
      return mergeWords(word + ' ' + nextWord);
    }
  }
};

/**
 * Every/Some
 */
export const checkUsersValid = (goodUsers) => {
  return function allUsersValid(submittedUsers) {
    return submittedUsers.every(function (submittedUser) {
      return goodUsers.some(function (goodUser) {
        return goodUser.id === submittedUser.id;
      });
    });
  };
};

/**
 * Reduce 
 */
export const countWords = (words) => {
  return words.reduce((resultObj, word) => {
    resultObj[word] = ++resultObj[word] || 1;
    return resultObj;
  }, {});
};

/**
 * Palindrome 
 */
export const isPalindrome = (str) => {
  return str == str.split('').reverse().join('');
};

/**
 * Recursion 
 */
export const factorial = (n) => {
  if ((n === 0) || (n === 1))
    return 1;
  else
    return (n * factorial(n - 1));
};

export const amountToCoins = (amount, coins) => {
  if (amount === 0) {
    return [];
  } else {
    if (amount >= coins[0]) {
      left = (amount - coins[0]);
      return [coins[0]].concat(amountTocoins(left, coins));
    } else {
      coins.shift();
      return amountTocoins(amount, coins);
    }
  }
};

export const repeat = (func, n) => {
  func();
  if (n > 1) {
    repeat(func, n - 1);
  }
};

export const reduce = (iterable, reduceFn, accumulator) => {
  for (let i of iterable) {
    accumulator = reduceFn(accumulator, i)
  }
  return accumulator
};