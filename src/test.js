function cache(func) {
  let cache = new Map()
  return (...arg) => {
    const key = Array.from(arg).join('')
    console.log(key)

    if (cache.has(...arg)) {
      console.log(1);
      return cache.get(...arg)
    } else {
      console.log(2);
      let result = func(...arg)
      cache.set(...arg, result )
      return result
    }
  }
}
function example(a, b) {
  console.log('b',a, b)
  return a + b
}

var cached = cache(example)

console.log('ans', cached('foo', 'bar'))
console.log('ans', cached('foo', 'bar'))
console.log('ans', cached('foo', 'baz'))
