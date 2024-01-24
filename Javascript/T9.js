// Non primitive Data Types

let countries = ['AUS', 'ENG']


// // Number of elements in countries
// console.log(countries.length)



// // Access 3rd element of countries
// console.log(countries[3])

// // Access last element of countries
// console.log(countries[countries.length-1])



// // Access a element if index which is greater than length-1 of the variable
// countries[10] = 'COMB'

// console.log(countries.length)

// console.log(countries[2])


let data = Array(5).fill("A")
let data2 = "INDIA".split('')

let countries1 = ['AUS', 'ENG']

let countries2 = ['IND', 'UK']

// let out = countries1+countries2
// let out2 = countries1.concat(countries2)

countries1.unshift('IND')
countries1.push('UK')

console.log(countries1)