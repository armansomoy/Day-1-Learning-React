//  array destructuring 
const numbers = [42, 65];

// const x = numbers[0];
// const y = numbers[1];

// const [x, y] = [42, 65];
const [x, y] = numbers;

console.log(x, y);

function boxify(num1, num2) {
    const nums = [num1, num2];
    return nums;
}

// const [first, second]= [90, 34];
const [first, second]= boxify(90, 34);

// console.log(boxify(60, 34));

const student = {
    name: "Sakib Khan",
    age: 32,
    movies: ['King Khan', 'Dhakar Mastan']
}


// const [firstMovie, secondMovie] =  ['King Khan', 'Dhakar Mastan'];
const [firstMovie, secondMovie] =  student.movies;

// object destructuring 
// const {name, age}= {name: "alu", age: 34};
const {name, age}= {name: "alu", salary: 3400, age: 34, id: 2};


const employee = {
    ide: 'vs code',
    designation: 'developer',
    machine: "mac",
     language: ['htrml', 'css', 'js'],
     specification: {
        height: 66,
        weight: 67, 
        address: 'dhaka',
        watch: {
            color: 'black',
            price: 50,
            brand: 'casio'
        }
     } 
}

const {brand} = employee?.specification?.watch;