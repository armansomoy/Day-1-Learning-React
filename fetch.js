//  JSON

const student = {
    name: "Sakib Khan",
    age: 32,
    movies: ['King Khan', 'Dhakar Mastan']
}


const studentJSON = JSON.stringify(student);
console.log(student);
console.log(studentJSON);

const studentObj = JSON.parse(studentJSON);
console.log(studentObj);

// fetch 

fetch('url')
    .then(res => res.json())
    .then(data => console.log(data))

// keys, values 

const keys = Object.keys(student);
const values = Object.values(student);

// for

const numbers = [12, 2, 50, 35, 53, 6];
numbers.forEach(num => console.log(num));
numbers.map(num => num * 2);

// for of - use on array like object 
//  for in - use on loop


// add or remove for an array 
const products = [{
    name: "laptop",
    price: 10000,
    brand: 'lenovo',
    color: 'sliver'
},
{
    name: "phone",
    price: 15000,
    brand: 'oppo',
    color: 'golden'
},
{
    name: "watch",
    price: 500,
    brand: 'casio',
    color: 'sliver'
},
{
    name: "glass",
    price: 10000,
    brand: 'reybond',
    color: 'black'
},
{
    name: "camera",
    price: 50000,
    brand: 'canon',
    color: 'gray'
}
];

const newProduct = {name: 'webcam', price: 700, brand: 'red'};

// copy products array and then add newProduct 

const newProducts = [...products, newProduct];
console.log(newProducts);

// create a new array without one specific item 


const remaining = products.filter(p => p.name !== 'phone');
console.log(remaining);