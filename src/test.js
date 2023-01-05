const toTree = (s) =>
  s
    ? {
        value: s[0],
        left: toTree(s.slice(1, s.length / 2 + 1)),
        right: toTree(s.slice(s.length / 2 + 1)),
      }
    : null
const depth = memo((tree) =>
  tree ? busyWait(5e3) || 1 + Math.max(depth(tree.left), depth(tree.right)) : 0
)
const sumDepth = (tree) => (tree ? depth(tree) + sumDepth(tree.left) + sumDepth(tree.right) : 0)
const busyWait = (n) => n && busyWait(n - 1)

function memo(fn) {
    let cache = {}
  
  return (n) => {
    console.log(n.toString())
      if (n in cache) {
        return cache[n]
      } else {
        let result = fn(n)
        cache[n] = result
        return result
      }
    }
  }
console.log(sumDepth(toTree('-'.repeat(1e4))))
