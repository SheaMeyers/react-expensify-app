const person = {
    name: 'Shea',
    age: 28,
    location: {
        city: 'Voorburg',
        temp: 18
    }
}

const { name: firstName = 'Anonymous', age } = person;

console.log(`${firstName} is ${age}.`)

const { city, temp: tempurature } = person.location;

console.log(`It's ${tempurature} in ${city}.`)
