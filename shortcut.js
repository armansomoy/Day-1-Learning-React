//'aasd', 5, true, {}, []
//  "", 0, false, null, undefined

let myVar = 5;

if (myVar) {
    myVar = myVar * 100;
} else {
    myVar = 0;
}

let myMoney = 50;

// check negative 
if (!myMoney) {

}

console.log(myVar);
const money = 800;
let food;

if (money > 100) {
    food = 'biryani';
} else {
    food = 'cha';
}

// ternary 

let food1 = money > 100 ? 'biryani' : 'cha';
console.log(food);
console.log(food1);

let direct = (money > 100 && myVar > 100) ? ' coke' : 'normal water';

//  number to string converstaion 
const num1 = 52;
console.log(num1);
const num2 = num1 + '';
console.log(num2);

//  string to number 

const input = '560';
const inputNum = +input;
console.log(inputNum);

let isActive = true;
const showUser = () => console.log('display user')
const hideUser = () => console.log('hide user')

isActive ? showUser() : hideUser();
isActive && showUser();
isActive || hideUser();

isActive = !isActive;