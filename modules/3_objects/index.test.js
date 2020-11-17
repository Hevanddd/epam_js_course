import {
  arrayToList,
  listToArray,
  getKeyValuePairs,
  invertKeyValue,
  getAllMethodsFromObject,
  Groups,
} from './index';

describe('Module 3', () => {
  describe('arrayToList', () => {
    it('should create linked list from array', () => {
      const result = arrayToList([10, 20]);

      expect(result).toEqual({ value: 10, rest: { value: 20, rest: null } });
    });
  });

  describe('listToArray', () => {
    it('should create array from linked list', () => {
      const result = listToArray(arrayToList([10, 20, 30]));

      expect(result).toEqual([10, 20, 30]);
    });
  });

  describe('getKeyValuePairs', () => {
    it('should convert object into a list of [key, value] pairs', () => {
      const result = getKeyValuePairs({ red: "#FF0000", green: "#00FF00", white: "#FFFFFF" });

      expect(result).toEqual([["red", "#FF0000"], ["green", "#00FF00"], ["white", "#FFFFFF"]]);
    });
  });

  describe('invertKeyValue', () => {
    it('should get a copy of the object where the keys have become the values and the values the keys', () => {
      const result = invertKeyValue({ red: "#FF0000", green: "#00FF00", white: "#FFFFFF" });

      expect(result).toEqual({ "#FF0000": "red", "#00FF00": "green", "#FFFFFF": "white" });
    });
  });

  describe('getAllMethodsFromObject', () => {
    it('should get all methods from an object', () => {
      const result = getAllMethodsFromObject(Math);

      expect(result).toEqual(["abs", "acos", "acosh", "asin", "asinh", "atan", "atanh", "atan2", "ceil", "cbrt", "expm1", "clz32", "cos", "cosh", "exp", "floor", "fround", "hypot", "imul", "log", "log1p", "log2", "log10", "max", "min", "pow", "random", "round", "sign", "sin", "sinh", "sqrt", "tan", "tanh", "trunc"]);
    });
  });

  describe('Groups', () => {
    it('should has one static method', () => {
      expect(Groups.from).toBeInstanceOf(Function);
    });

    it('should be a class which creates an instance with three methods', () => {
      const group = Groups.from([10, 20]);

      expect(group.has).toBeInstanceOf(Function);
      expect(group.add).toBeInstanceOf(Function);
      expect(group.delete).toBeInstanceOf(Function);
    });

    describe('has', () => {
      it('should check if item exists in group', () => {
        const group = Groups.from([10, 20]);

        expect(group.has(10)).toBe(true);
        expect(group.has(30)).toBe(false);
      });
    });

    describe('add', () => {
      it('should add item into a group', () => {
        const group = Groups.from([10, 20]);

        group.add(50);
        expect(group.has(50)).toBe(true);
        expect(group.length).toBe(3);
      });

      it('should not add duplicates', () => {
        const group = Groups.from([10, 20]);

        expect(group.length).toBe(2);
        group.add(20);
        expect(group.has(20)).toBe(true);
        expect(group.length).toBe(2);
      });
    });

    describe('delete', () => {
      it('should check if item exists in group', () => {
        const group = Groups.from([10, 20]);

        expect(group.length).toBe(2);
        group.delete(20);
        expect(group.has(20)).toBe(false);
        expect(group.length).toBe(1);
      });
    });
  });
});
