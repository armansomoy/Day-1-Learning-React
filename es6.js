const numbers = [10, 20, 4, 3, 551, 65];
const student = {
    name: "Sakib Khan",
    age: 32,
    movies: ['King Khan', 'Dhakar Mastan']
}

// 1. template string 
const about = `My name is ${student.name}. age of ${student.age}, has number ${numbers[2]} also liked movies  ${student.movies[0]}`;
console.log(about);

// 2. arrow function 
const getFiftyFive = () => 55;
const addSixtyFive = num => num + 65;
const isEven =  x => x%2 == 0;
const result = isEven(2);
console.log(result);

const addThree = (x, y, z) => x + y + z;
const doMath = (num1, num2) => {
    const sum = num1 + num2;
    return sum;
}

const result2 = doMath(2, 5);
console.log(result2);

console.log(getFiftyFive);

//  spread operator 
const newNumbers = [...numbers];
numbers.push(99); 

console.log(newNumbers);
console.log(numbers);

//  create a new array from an older array and add an  element 

const currentNumbers = [...numbers, 55];

console.log(numbers);
console.log(newNumbers);
console.log(currentNumbers);
