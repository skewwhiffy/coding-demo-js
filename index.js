const firstTest = getSingleLine('*_', 3) // Expecting this to print *_*
console.log(firstTest)

const secondTest = getSingleLine('_*', 10) // Expecting this to print _*_*_*_*_*
console.log(secondTest)

pattern(3)
pattern(10)

function getSingleLine(repeatedString, lineLength) {
  let result = ''
  while (result.length < lineLength) {
    result = result + repeatedString
  }
  return result.substring(0, lineLength)
}

function pattern(length) {
  for (let i = 0; i < length; i++) {
    let repeatedString;
    if (i % 2 == 0) {
      repeatedString = '*_'
    } else {
      repeatedString = '_*'
    }
    const line = getSingleLine(repeatedString, length)
    console.log(line)
  }
}
