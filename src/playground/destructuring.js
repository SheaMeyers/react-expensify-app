// Object Destructuring

// const person = {
//     name: 'Shea',
//     age: 28,
//     location: {
//         city: 'Voorburg',
//         temp: 18
//     }
// }

// const { name: firstName = 'Anonymous', age } = person;

// console.log(`${firstName} is ${age}.`)

// const { city, temp: tempurature } = person.location;

// console.log(`It's ${tempurature} in ${city}.`)

const address = ['1299 S Juniper Street', 'Philadephia', 'Pennsylvania', '19147'];

const [, city, state = 'New York'] = address;

console.log(`You are in ${city} ${state}`);
