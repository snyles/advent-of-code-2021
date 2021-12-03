const data = require('./data.json')

// part 1

const flipBits = str => str.split('').map(n => 1 - n).join('')

const result = data.reduce((result, binary) => {
  binary.split('').forEach((digit, index) => {
    result[index][digit]++
  })
  return result
},[
  [0, 0],
  [0, 0],
  [0, 0],
  [0, 0],
  [0, 0],
  [0, 0],
  [0, 0],
  [0, 0],
  [0, 0],
  [0, 0],
  [0, 0],
  [0, 0],
])

let gamma = result.map(count => {
  return count.indexOf(Math.max(...count))
}).join('')

let epsilon = flipBits(gamma)

gamma = parseInt(gamma, 2)
epsilon = parseInt(epsilon, 2)

console.log(gamma * epsilon)