// variable 3 prokar 

// var , let , const

// var --- ja ta amra kokhono used korbo nha

// let & const ata diye amra akhon thake variable diclar korbo

// let ata amra used korbo jokhon amra kunu man change korbo 

// let name = "Golap"
// name = "Tahmid"
// console.log(name)


// const ata amra used korbo jokhon amra kunu man change korbo nha

// const countryName = "Bangladesh";
// countryName = "BD"
// console.log(countryName)



// if else codition 

// const number = 20;

// if(number > 20){
//     console.log("YES")
// }
// else{
//     console.log("Noooooooooooo")
// }
// const number = 20;

// if(number >= 20){
//     console.log("YES")
// }
// else{
//     console.log("Noooooooooooo")
// }



// amra condition er moddhe or and used korte  pari || ,, &&


// Array diclaration

// const friends = ["Golap", "Sabbir", "Basar", "Imrul"]
// console.log(friends)
// console.log(friends.slice(1, 2))
// console.log(friends.splice(1,2))
// friends.pop()
// friends.push("Raj")

// friends.unshift("go")
// friends.shift()
// console.log(friends)


// console.log(friends[0])

// console.log(friends[1])

// console.log(friends[2])



// ai ber loop niye kotha hobe 

// 3 dhoroner loop amra used kori 

// 1.. for of loop;

// 2.. for loop,
// 3.. while loop


// const numbers = [12, 33, 55, 22, 87, 90]
// // console.log(numbers);
// // for(let number of numbers){
// //     console.log(number)
// // }

// for (let index = 0; index < numbers.length; index++) {
//     const element = numbers[index];
//     console.log(element)
    
// }


// ai ber function diclaration , 2 vabe function diclar kora jai

// function sum (a, b) {
//     const result = a + b;
//     console.log(result);

// }

// sum(10, 5);


// tamplate String

// const fName = "Golap";
// const lName = "Raj"
// console.log(fName, lName)
// console.log(fName + " " + lName)

// const fullName = fName + " " + lName;
// console.log(fullName)

// console.log(`${fName} ${lName}`)
// console.log(`My Name Is ${fName} ${lName}`)


// * --- function 2 vabe used kore ;

// 1.. regular function;
// 2.. arroow function

// regular function diclaration 

// function sum (a,b) {
//     const result = a + b;
//     return result

// }

// const output = sum(12, 33);
// console.log(output)



// arrow function diclaration

// const sum = (a, b,c) => {
//     const result = a + b +c
//     return result

// }

// const output = sum(12, 22, 33);
// console.log(output)


// spred oparator ...sum

// const numbers = [12, 33, 65, 88, 90];
// console.log(Math.max(...numbers))

// const newNumbers = [100, 2000, ...numbers];
// console.log(newNumbers)

// const newArray = [...numbers, 1, 2];
// console.log(newArray)



// ai ber amra recape korbo  Array --- forEach, map, find, filter

// const products = [
//     {Namen : "Redmi", Brand : "xaiomi", price : 3000, color : "Black"},
//     {Namen : "Sam", Brand : "SamSung", price : 4000, color : "white"},
//     {Namen : "Apple1", Brand : "Apple", price : 5000, color : "gold"},
//     {Namen : "Apple2", Brand : "Apple", price : 5000, color : "gold"},
//     {Namen : "Redmi", Brand : "xaiomi", price : 3000, color : "Black"},
//     {Namen : "Redmi2", Brand : "xaiomi", price : 3000, color : "Black"},
// ]

// filter
// const result = products.filter(product => product.Brand === "Apple");
// console.log (result)
// const result = products.find(product => product.price > 4000);
// console.log (result)
// // products.forEach(product => console.log(product))
// const result = products.map(product => product.price)
// console.log(result)

// const result = products.map(product => product.Namen)
// console.log(result)
// const result = products.map(product => product.Brand)
// console.log(result)
// const result = products.map(product => product.color)
// console.log(result)

// console.log(products)

// for(let product of products){
//     console.log(product)
// }


// Array dictruct charing

// const friends = ["golap", "tapos", "imrul", "raj"];

// const [first, secend, third , fourth] = friends;
// console.log(first)
// console.log(secend)
// const name = fourth;
// console.log(name)
// console.log(friends)
// console.log(friends[0])

// console.log(friends[2])






// Object dictruct charing

// const person = {
//     name : "golap",
//     id : 10,
//     fatherName : "abdullah",
//     motherName : "chamely"
// }

// console.log(person.id)
// console.log(person["fatherName"])

// const {name , id , fatherName, motherName} = person;
// console.log(name);
// console.log(motherName)



// JSON conver of Object


// const person = {
//     name : "golap",
//     id : 10,
//     fatherName : "abdullah",
//     motherName : "chamely",
//      friends : ["golap", "tapos", "imrul", "raj"],


// }

// // console.log(person)

// const jsonData = JSON.stringify(person);
// console.log(jsonData)

// const nojson = JSON.parse(jsonData);
// console.log(nojson)



// fetch used

// fetch ("url")
// .then((res) => res.json())
// .then((data) => console.log(data))



// Object kay and value ber kora



// const person = {
//     name : "golap",
//     id : 10,
//     fatherName : "abdullah",
//     motherName : "chamely",
//      friends : ["golap", "tapos", "imrul", "raj"],


// }

// const key = Object.keys(person);
// console.log(key)

// const value = Object.values(person);
// console.log(value)


// console.log(Object.keys(person))
// console.log(Object.values(person))


// Object er upor for in loop 

// const person = {
//     name : "golap",
//     id : 10,
//     fatherName : "abdullah",
//     motherName : "chamely",
//      friends : ["golap", "tapos", "imrul", "raj"],


// }


// for(let per in person){
//     console.log(per)
// }





// Array of Object


const products = [
    {Namen : "Redmi", Brand : "xaiomi", price : 3000, color : "Black"},
    {Namen : "Sam", Brand : "SamSung", price : 4000, color : "white"},
    {Namen : "Apple1", Brand : "Apple", price : 5000, color : "gold"},
    {Namen : "Apple2", Brand : "Apple", price : 5000, color : "gold"},
    {Namen : "Redmi", Brand : "xaiomi", price : 3000, color : "Black"},
    {Namen : "Redmi2", Brand : "xaiomi", price : 3000, color : "Black"},
]

const newArray = {
    name : "golap",
    id : 12,

}

const newArray2 = [...products,newArray];
console.log(newArray2)