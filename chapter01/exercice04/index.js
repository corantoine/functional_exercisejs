export function addWithCallback(a, b, callback) {
  setTimeout(() => {
    callback(a+b);
   },
1000);
}

export function filterArrayWithCallback(array, filterFunc, callback) {
  setTimeout(() => {
callback (array.filter(filterFunc))
  }, 1000);
}

export async function asyncAdd(a, b) {
  return new Promise((resolve, reject)=> 
  { setTimeout(() => {
const result = a + b;
resolve(result);
  }, 1000);
});
}

export async function filterArrayAsync(array, filterFunc) {
  setTimeout(() => {

  }, 1000);
}
