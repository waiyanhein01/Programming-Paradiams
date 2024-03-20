// imperative

// An array of numbers
const numbers = [3, 6, 5, 1, 3, 2, 5, 4]

// goal of sum numbers\

let sum = 0; //state

//for statement

for (el of numbers) {
    sum += el;
}
console.log(sum);

// remove duplicate
let result = [];

for (el of numbers) {
    if (!result.includes(el)) {
        result.push(el)
    }
}

console.log(result);

// new array with even numbers
const resultTwo = [];

for (el of numbers) {
    if (el % 2 === 0) {
        resultTwo.push(el);
    }
}

console.log(resultTwo);
