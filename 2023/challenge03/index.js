import fs from 'fs';
const listPoliciesOne = `2-4 f: fgff
4-6 z: zzzsg
1-6 h: hhhhhh`
const listPoliciesTwo = fs.readFileSync('message_03.txt', 'utf-8');

function challengeThree(policies) {
  const invalidPasswords = []
  const validPasswords = []
  let totalCharacters = 0
  const passwordsPolicies = policies.split('\n')
  for (let i = 0; i < passwordsPolicies.length; i++) {
    const currentPasswordPolicy = passwordsPolicies.at(i).split(':')
    const policy = currentPasswordPolicy.at(0)
    const password = currentPasswordPolicy.at(1).trim()
    const policySplit = policy.split(' ')
    const minmax = policySplit.at(0).split('-')
    const letter = policySplit.at(1)
    const min = Number(minmax.at(0))
    const max = Number(minmax.at(1))

    for (const character of password) {
      if (character === letter) {
        totalCharacters++
      }
    }

    if (totalCharacters >= min && totalCharacters <= max) {
      validPasswords.push(password)
    } else {
      invalidPasswords.push(password)
    }

    totalCharacters = 0
  }
  return invalidPasswords
}

const answer = challengeThree(listPoliciesTwo).at(41)
console.log(`submit ${answer}`)