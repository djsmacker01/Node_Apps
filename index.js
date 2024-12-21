const Person = {
    name: 'John Doe',
    age: 30,
    greet() {
        console.log(`Hello, my name is ${this.name}!`);
    }
}
// Destructuring
const printName = (personData) => {
    console.log(personData.name)
}

printName(Person)
// console.log(Person)

// const copiedPerson = { ...Person }
// console.log(copiedPerson)

// // Using rest operator
// const toArray = (...args) => {
//     return args
// }

// console.log(toArray(1, 2, 3, 4))