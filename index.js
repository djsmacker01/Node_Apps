const Person = {
    name: 'John Doe',
    age: 30,
    greet() {
        console.log(`Hello, my name is ${this.name}!`);
    }
}
// Destructuring
const printName = ({name,age}) => {
    console.log(name)
}

// printName(Person)

const { name, age } = Person
console.log(name, age)

// Asynchronous

setTimeout(() => {
    console.log('Async greeting')
    Person.greet()
},1000)
// console.log(Person)

// const copiedPerson = { ...Person }
// console.log(copiedPerson)

// // Using rest operator
// const toArray = (...args) => {
//     return args
// }

// console.log(toArray(1, 2, 3, 4))