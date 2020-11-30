import {
  delay,
  runPromisesInSeries,
  Promise_all,
  fibonacci,
  helper,
  MyPromise,
} from './index';

describe('Module 5 Async', () => {
  beforeAll(() => {
    global.console.log = jest.fn();
    global.console.error = jest.fn();
  });

  afterEach(() => {
    console.log.mockReset();
    console.error.mockReset();
  });

  describe('delay', () => {
    const PENDING = 'pending';
    const RESOLVED = 'resolved';
    const BEFORE_DELAY_TIME = 90;
    const DELAY_TIME = 100;

    it('should return a promise, which becomes resolved in some milliseconds', async () => {
      let status = PENDING;
      delay(DELAY_TIME).then(() => { status = RESOLVED; });

      expect(status).toEqual(PENDING);
      await new Promise((resolve) => setTimeout(resolve, DELAY_TIME));
      expect(status).toEqual(RESOLVED);
    });

    it('should not be resolved before required time has passed', async () => {
      let status = PENDING;
      delay(DELAY_TIME).then(() => { status = RESOLVED; });

      expect(status).toEqual(PENDING);
      await new Promise((resolve) => setTimeout(resolve, BEFORE_DELAY_TIME));
      expect(status).toEqual(PENDING);
    });
  });

  describe('runPromisesInSeries', () => {
    it('should run an given array of promises in series', async () => {
      let FIRST_PROMISE_TIMEOUT = 100;
      let SECOND_PROMISE_TIMEOUT = 200;

      runPromisesInSeries([
        () => delay(FIRST_PROMISE_TIMEOUT).then(() => {
          console.log('message in 1 second')
        }),
        () => delay(SECOND_PROMISE_TIMEOUT).then(() => {
          console.log('message in 3 seconds')
        })
      ]);

      await new Promise((resolve) => setTimeout(resolve, FIRST_PROMISE_TIMEOUT - 10));
      expect(console.log).not.toBeCalled();

      await new Promise((resolve) => setTimeout(resolve, 10));
      expect(console.log).toBeCalledWith('message in 1 second');
      console.log.mockReset();

      await new Promise((resolve) => setTimeout(resolve, SECOND_PROMISE_TIMEOUT - 10));
      expect(console.log).not.toBeCalled();

      await new Promise((resolve) => setTimeout(resolve,  10));
      expect(console.log).toBeCalledWith('message in 3 seconds');
    });
  });

  describe('Promise_all', () => {
    const soon = (val) => {
      return new Promise(resolve => {
        setTimeout(() => resolve(val), Math.random() * 100);
      });
    };

    it('should return a promise that waits for all of the promises in the array to finish', async () => {
      await expect(Promise_all([soon(1), soon(2), soon(3)])).resolves.toEqual([1, 2, 3]);
    });

    it('should accept empty list', async () => {
      await expect(Promise_all([])).resolves.toEqual([]);
    });

    it('should reject if one of promises reject', async () => {
      await expect(Promise_all([soon(1), Promise.reject('X'), soon(3)])).rejects.toEqual('X');
    })
  });

  describe('Fibonacci', () => {
    it('should return fibonacci sequence', () => {
      expect([...fibonacci(10)]).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
    });
  });

  describe('Generator helper', () => {
    it('should take a generator function and invoke it step by step', async () => {
      const asyncTask1 = () => new Promise((resolve) => setTimeout(() => resolve('first resolved'), 100));
      const asyncTask2 = () => new Promise((resolve) => setTimeout(() => resolve('second resolved'), 100));
      const asyncTask3 = () => new Promise((resolve, reject) => setTimeout(() => reject('third rejected'), 100));

      helper(function* main() {
        try {
          const a = yield asyncTask1();
          console.log(a);
          const b = yield asyncTask2();
          console.log(b);
          const c = yield asyncTask3();
        } catch(e) {
          console.error('error happened', e);
        }
      });

      expect(console.log).not.toBeCalledWith();

      await new Promise((resolve) => setTimeout(resolve, 150));
      expect(console.log).toBeCalledWith('first resolved');
      console.log.mockReset();

      await new Promise((resolve) => setTimeout(resolve, 100));
      expect(console.log).toBeCalledWith('second resolved');

      await new Promise((resolve) => setTimeout(resolve, 100));
      expect(console.error).toBeCalledWith('error happened', 'third rejected');
    });
  });

  describe.skip('My Promise (optional)', () => {
    it('should have ability to resolve', () => {
      const myPromise = new MyPromise((resolve) => {
        setTimeout(() => resolve('successful!!'));
      });

      expect(myPromise).resolves.toEqual('successful!!');
    });

    it('should have ability to reject', () => {
      const myPromise = new MyPromise((resolve, reject) => {
        setTimeout(() => reject(new Error('Time is up')));
      });

      expect(myPromise).rejects.toThrow('Time is up');
    });

    it('should have .then() and .catch() methods written in prototype', async () => {
      const myResolvedPromise = new MyPromise((resolve) => {
        setTimeout(() => resolve('successful!!'), 0);
      });
      const myRejectedPromise = new MyPromise((resolve, reject) => {
        setTimeout(() => reject(new Error('Time is up')), 0);
      });

      await myResolvedPromise.then(console.log);
      await myRejectedPromise.catch(console.error);

      expect(console.log).toBeCalledWith('successful!!');
      expect(console.error).toBeCalledWith(new Error('Time is up'));
    });
  });
});
