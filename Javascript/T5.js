// Slice Method
let data = "Today is a Good Day!!!"
let part_of_data = data.slice(6,11)
//console.log(part_of_data)


// Repeat Method
let data2 = "Hi.. "
//console.log(data2.repeat(3))


// startsWith and endsWith

let data3 = `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
unknown printer took a galley of type and scrambled it to make a type specimen book.
It has survived not only five centuries, but also the leap into electronic typesetting, 
remaining essentially unchanged. It was popularised in the 1960s with the release of 
Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
software like Aldus PageMaker including versions of Lorem Ipsum.`

data3 = data3.split('\n')


// for (let d of data3){
// 	console.log(d.endsWith('.'))
// }


// Concat 

let fn = 'Rohit'
let ln = 'Sharma'

let full_name = `${fn} ${ln}`
let full_name2 = fn + ln
let full_name3 = fn.concat(" ", ln, " is batsman")

// console.log(full_name)
// console.log(full_name2)
// console.log(full_name3)



// Padding
// let data4 = '2099'
// let ouput4 = data4.padStart(5, '0')
// console.log(ouput4)



// Search and Match

let data5 = `Lorem Ipsum is simply 50 Print dummy text of the PRINTing and typesetting industry print`

let email_pattern = /\d+/gi
let output5 = data5.match(email_pattern)

console.log(output5)