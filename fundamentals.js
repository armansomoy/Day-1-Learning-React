// 1. how to declare a variable using let and const 

const fatherName = "Motaleb";
let season = "Rainy";
season = "Winter";

// 2. conditions 
// 6 basic conditions: >, <, ===, !==, <=, >=
// multiple conditions: &&, || 

if (fatherName === "Motaleb" || season === "Winter") {

}

// 3. Array decalre- index, length, push 
const numbers = [10, 20, 4, 3, 551, 65];


// 4. for loop 
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    console.log(number);
}

// 5. Function  
 function plus(num1 , num2) {
    const result = num1 + num2;
    return result;
    
}
const output = plus(10, 20);

console.log(output);


// 6. Object - 3 ways to access object 

const student = {
    name: "Sakib Khan",
    age: 32,
    moview: ['King Khan', 'Dhakar Mastan']
}

const myVariable = 'age';

console.log(student.age); // direct by property
console.log(student['age']); // access via property name string 
console.log(student[myVariable]); // access via property name in a variable 

