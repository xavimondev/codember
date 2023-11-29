export function deleteDuplicates(file) {
  const wordFiles = {}
  let withoutDuplicates = ''
  for (const word of file) {
    wordFiles[word] ??= 0
    wordFiles[word] += 1
  }

  for (let i = 0; i < file.length; i++) {
    const letter = file.at(i)
    if (wordFiles[letter] === 1) withoutDuplicates += letter
  }
  return withoutDuplicates
}

// Anothet way to delete duplicates
export function deleteDuplicates2(file) {
  let withoutDuplicates = ''
  for (let i = 0; i < file.length; i++) {
    const letter = file.at(i)
    if (file.lastIndexOf(letter) === file.indexOf(letter)) withoutDuplicates += letter
  }
  return withoutDuplicates
}
