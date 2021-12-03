const data = require('./data.json')

// part 1

function part1() {
  let horiz = 0, depth = 0
  for (const command of data) {
    let [direction, value] = command.split(' ')
    value = parseInt(value)
    switch (direction) {
      case 'forward':
        horiz += value
        break
      case 'down':
        depth += value
        break
      case 'up':
        depth -= value
        break
    }
  }
  console.log(horiz * depth)
}

// part 2

let horiz = 0, depth = 0, aim = 0
for (const command of data) {
  let [direction, value] = command.split(' ')
  value = parseInt(value)
  switch (direction) {
    case 'forward':
      horiz += value
      depth += value * aim
      break
    case 'down':
      aim += value
      break
    case 'up':
      aim -= value
      break
  }
}
console.log(horiz * depth)