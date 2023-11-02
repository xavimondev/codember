import fs from 'fs';
const message = fs.readFileSync('message_01.txt', 'utf-8');

function challengeOne(message) {
  let result = ''
  const data = {}
  const array = message.split(' ')
  array.forEach(item => {
    const animal = item.toLowerCase()
    data[animal] = data[animal] ?? 0
    data[animal] += 1
  })

  for (let key in data) {
    result += `${key}${data[key]}`
  }
  return result
}

console.log(challengeOne(message))