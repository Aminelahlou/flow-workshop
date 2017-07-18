// @flow

function sayHi(x) {
    if (x) {
        return `Hello, I am ${x} years old`
    }
}

function takeFirstWord(words) {
    return words.split(' ')[0].replace(',', '')
}

var message = takeFirstWord(sayHi(10))
message2 = takeFirstWord(sayHi());

console.log(message)
console.log(message2)