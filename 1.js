// @flow

function sayHi(x: number): string {
  return `Hello, I am ${x} years old`
}

function takeFirstWord(words: string): string {
    return words.split(' ')[0].replace(',', '')
}

const message = takeFirstWord(sayHi(10))
const message2 = takeFirstWord(sayHi(12));

console.log(message)
console.log(message2)
