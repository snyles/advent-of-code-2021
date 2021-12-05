const data = require('./data.json')

// part 1
const flipBits = str => str.split('').map(n => 1 - n).join('')

const countDigits = data => {
  return data.reduce((result, binary) => {
    binary.split('').forEach((digit, index) => {
      if (result.length < (index + 1)) result.push([0,0])
      result[index][digit]++
    })
    return result
  },[])
}

const result = countDigits(data)

let gamma = result.map(count => {
  return count.indexOf(Math.max(...count))
}).join('')
let epsilon = flipBits(gamma)

gamma = parseInt(gamma, 2)
epsilon = parseInt(epsilon, 2)

console.log(gamma * epsilon)

// part 2

let o2data = [...data]

const digits = o2data[0].length

for(let i = 0; i < digits; i++) {
  const o2count = countDigits(o2data)
  const indexCount = o2count[i]
  const mostChar = (indexCount[0] === indexCount[1]) ? 
    "1" : 
    indexCount.indexOf(Math.max(...indexCount)).toString()
  o2data = o2data.filter(string => string.charAt(i) === mostChar)
  if (o2data.length <= 1) break
}

let co2data = [...data]

for(let i = 0; i < digits; i++) {
  const co2count = countDigits(co2data)
  const indexCount = co2count[i]
  const leastChar = (indexCount[0] === indexCount[1]) ? 
    "0" : 
    indexCount.indexOf(Math.min(...indexCount)).toString()
  co2data = co2data.filter(string => string.charAt(i) === leastChar)
  if (co2data.length <= 1) break
}

const o2 = parseInt(o2data[0], 2)
const co2 = parseInt(co2data[0], 2)

console.log(o2 * co2)