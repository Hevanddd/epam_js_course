import {
  mergeWords,
  checkUsersValid,
  countWords,
  isPalindrome,
  factorial,
  amountToCoins,
  repeat,
  reduce,
} from './index';

describe('Module 2', () => {
  beforeAll(() => {
    global.console.log = jest.fn();
  });

  afterEach(() => {
    console.log.mockReset();
  });
  
  describe('mergeWords', () => {
    it('should merge words into sentence', () => {
      const result = mergeWords('GNU')('is')('not')('Unix.')();

      expect(result).toBe('GNU is not Unix.');
    });
  });

  describe('checkUsersValid', () => {
    const goodUsers = [
      { id: 1 },
      { id: 2 },
      { id: 3 },
    ];
    const testAllValid = checkUsersValid(goodUsers)

    it('#case 1', () => {
      const result = testAllValid([
        { id: 2 },
        { id: 1 },
      ]);

      expect(result).toBe(true);
    });

    it('#case 2', () => {
      const result = testAllValid([
        { id: 2 },
        { id: 4 },
        { id: 1 },
      ]);

      expect(result).toBe(false);
    });
  });

  describe('reduce', () => {
    it('should return an object which contains the number of times each string occured in the array', () => {
      const inputWords = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian'];

      const result = countWords(inputWords);


      expect(result).toEqual({ 'Apple': 2, 'Banana': 1, 'Durian': 3 });
    });
  });

  describe('isPalindrome', () => {
    it('should check whether a passed string is palindrome or not', () => {
      expect(isPalindrome('madam')).toBe('The entry is a palindrome');
      expect(isPalindrome('fox')).toBe('Entry is not a palindrome');
    });
  });



  describe('Recursion', () => {
    describe('factorial', () => {
      it('should take a positive integer N as a parameter and print the result of N! (factorial)', () => {
        expect(factorial(1)).toBe(1);
        expect(factorial(5)).toBe(120);
      });
    });

    describe('amountToCoins', () => {
      it('should convert an amount to coins', () => {
        expect(amountToCoins(46, [25, 10, 5, 2, 1]))
          .toEqual([25, 10, 10, 1]);
      });
    });

    describe('repeat', () => {
      it('should take a function as its first argument, a number num as its second argument, then execute the passed in function num times', () => {
        repeat(() => console.log('Wassup'), 5);
        const expected = ['Wassup', 'Wassup', 'Wassup', 'Wassup', 'Wassup'];
        expected.forEach((expectedValue, i) => {
          expect(console.log).toHaveBeenNthCalledWith(i + 1, expectedValue);
        })
      });
    });

    describe('reduce', () => {
      it('should implement an Array reduce function', () => {
        const result = reduce([1, 2, 3], function (prev, curr, index, arr) {
          return prev + curr;
        }, 0);

        expect(result).toBe(6);
      });
    });
  });
});

