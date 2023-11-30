import fs from 'fs'
import { paintGreen } from '../paint.js'
const message = fs.readFileSync('message_02.txt', 'utf-8')

function challengeTwo(string) {
  let currentValue = 0
  let output = ''
  for (let i = 0; i < string.length; i++) {
    const currentSymbol = string.at(i)
    if (currentSymbol === '#') {
      currentValue += 1
    } else if (currentSymbol === '@') {
      currentValue -= 1
    } else if (currentSymbol === '*') {
      currentValue *= currentValue
    } else {
      output += `${currentValue}`
    }
  }
  return output
}

console.log(paintGreen({ text: `submit ${challengeTwo(message)}` }))