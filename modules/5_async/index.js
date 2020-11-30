export const delay = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

export const runPromisesInSeries = ps => ps.reduce((p, next) => p.then(next), Promise.resolve());

export const Promise_all = (promises) => {
  return new Promise((resolve, reject) => {
    var resolveArr = new Array(promises.length);
    if (promises.length == 0)
      resolve(resolveArr);
    var pending = promises.length;
    promises.forEach((promise, i) => {
      promise.then((result) => {
        resolveArr[i] = result;
        pending -= 1;
        if (pending == 0)
          resolve(resolveArr);
      }, (error) => {
        reject(error);
      });
    });
  });
};

export function* fibonacci(n) {
  const infinite = !n && n !== 0;
  let current = 0;
  let next = 1;

  while (infinite || n--) {
    yield current;
    [current, next] = [next, current + next];
  }
}

export const helper = gen => {
  const iterator = gen();
  async function iterate(iteration) {
    if (!iteration.done) {
      try {
        const value = await iteration.value;
        iterate(iterator.next(value));
      } catch (e) {
        iterator.throw(e);
      }
    }
  }
  return iterate(iterator.next());
};

export const MyPromise = () => {};
