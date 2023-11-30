
import fs from 'fs'
import { isValidField } from './utils.js'
import { paintGreen } from '../paint.js'
const data = fs.readFileSync('database_attacked.txt', 'utf-8')

function challengeFive(data) {
  const invalids = []
  data.split('\n').forEach(person => {
    const information = person.split(',')
    const [id, username, email, age, location] = information
    const idValidId = isValidField({ type: 'alphanumeric', data: id })
    const idValidUsername = isValidField({ type: 'alphanumeric', data: username })
    const isValidEmail = isValidField({ type: 'email', data: email })
    if (idValidId && idValidUsername && isValidEmail) {
      if (age || location) {
        const isValidAge = isValidField({ type: 'number', data: age })
        const isValidLocation = isValidField({ type: 'string', data: location })

        if (!isValidAge || !isValidLocation) invalids.push(username)
      }
    } else {
      invalids.push(username)
    }
  })

  return invalids.map(invalid => invalid.at(0)).join('')
}

console.log(paintGreen({ text: `submit ${challengeFive(data)}` }))