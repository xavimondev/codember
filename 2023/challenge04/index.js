import fs from 'fs'
import { deleteDuplicates } from './utils.js'
const listFilesOne = `xyzz33-xy
abcca1-ab1
abbc11-ca`
const listFilesTwo = fs.readFileSync('files_quarantine.txt', 'utf-8')

function challengeFour(files) {
  return files.split('\n').filter(file => {
    const [fileName, unchecksum] = file.split('-')
    const stringWithoutDuplicates = deleteDuplicates(fileName)
    return stringWithoutDuplicates === unchecksum
  })
}

const answer = challengeFour(listFilesTwo).at(32)
const checksum = answer.split('-').at(1)
console.log(`Example ${challengeFour(listFilesOne)}`)
console.log(`submit ${checksum}`)
