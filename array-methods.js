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

// map
const brands = products.map(product => product.brand);
const prices = products.map(product => product.price);
console.log(brands);
console.log(prices);

// forEach
products.forEach(product => console.log(product.color));

products.forEach(product => {

})

// filter 

const cheap = products.filter(product => product.price <= 5000);
console.log(cheap[0]);

console.log(cheap[0].name);
const specificName = products.filter(product => product.name.includes('a'));
console.log(specificName);

//  find 

const special = products.find(product => product.name.includes('a'));
console.log(special);