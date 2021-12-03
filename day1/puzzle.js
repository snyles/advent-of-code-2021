const data = require('./data.json')

// part 1
const answer = data.reduce((acc, num, index) => {
  if(acc.prev < num) acc.count++
  acc.prev = num
  return acc
}, { 
  prev: Infinity,
  count: 0,
})
// console.log(answer)

// part 2
const stuff = data.reduce((acc, num, index) => {
  const first = acc.windows[0]
  if (index <= 1) {
    first.push(num)
    if (index === 1) acc.windows[1].push(num)
  } else {
    acc.windows.forEach(window => window.push(num))
    const sum = first.reduce((a, n) => a + n, 0)
    if (sum > acc.prev) acc.count++
    acc.prev = sum
    acc.windows.shift()
    acc.windows.push([])
  }
  return acc
},{
  windows: [
    [],[],[]
  ],
  prev: Infinity,
  count: 0,
})

console.log(stuff.count)
