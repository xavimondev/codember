export function isValidField({ type, data }) {
  const listOfRegex = {
    alphanumeric: /^[a-zA-Z0-9_]+$/,
    string: /^[A-Za-z\s]+$/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  }

  if (type === 'number') return !isNaN(data)

  const regex = listOfRegex[type]
  return regex.test(data)
}