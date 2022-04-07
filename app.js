// array functions
const items = [
    {name: "bike", price: 100},
    {name: "teddy bear", price: 20},
    {name: "computer", price: 2000},
    {name: "book", price: 10},
    {name: "shoes", price: 200},
    {name: "phone", price: 500},
    {name: "sofa", price: 800},
]


// forEach
// executes a provided function once for each array element.
items.forEach(item => {
    return console.log(item.price)
})




// map
// creates a new array populated with the results of calling a provided function on every element in the calling array.
const mappedItems = items.map(item => {
    return item.name
})

console.log(mappedItems)
console.log(items)



// filter
// creates a new array with all elements that pass the test implemented by the provided function.

const filteredArray = items.filter(item => {
    return item.name == "book"
})
console.log("filtered array", filteredArray)


// find 
// returns the first one that is true
const foundItem = items.find(item => {
    return item.name.startsWith("b")
})

console.log("found item", foundItem)



// higher order functions
function outerFunction(outerParameters) {
    const outerVariable = "hey"
    return function innerFunction(innerParameters) {
        console.log(outerParameters)
        console.log(innerParameters)
        console.log(outerVariable)
    }
}

console.log(outerFunction("outer")("inner"))



// array and object destructuring
const letters = ['A', 'B', 'C', 'D', 'E', 'F']
const numbers = [1, 2, 3, 4, 5, 6]

const [a, b, ...rest] = numbers

console.log(a, b, rest)
console.log(...letters, ...numbers)





const person = {
    name: "James",
    age: 52,
    address: {
        city: 
            {miami: "HEY", atlanta: ["Grant Park", "Buckhead"]},
        state: "Florida"
    }
}

const {name, age, address: {city: {miami, atlanta}}} = person

console.log(name, age, miami, atlanta)
let atlantaArray = atlanta
console.log(atlanta[0])



