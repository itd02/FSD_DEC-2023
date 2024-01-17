// Template Tags and Literals

/*
let a = 10
let b = 20
let sum = a + b
console.log(`The sum of ${a} and ${b} is ${sum}`)

*/

// String Methods and String Properties


let country = 'india'

//console.log(`Length of country is ${country.length}`)


country[0] = 'B' // This is not allowed beacuse strings are immmutable


// let data = 20
// console.log(data.length)


//let ucontry = country[0].toUpperCase()
//console.log(`The upper case version of ${country} is ${ucontry}`)


let data = 'Confusion followed the announcement from Iran as state media reports on it soon'

// let output1 = data.substr(0, 9)			// starting index, total nmber of chaacters

// let output2 = data.substring(0, 3)		// starting index, ending index (ending index is excluded)

// console.log(output2)


// let data2 = 'Health officials in Hamas-run Gaza reported on January 15 more than 24,000 deaths in the war with Israel which has rocked the region, and militants released a video announcing the death of two Israeli hostages.'
// let output3 = data2.split(',')
// console.log(output3)


// let data3 = '                       announcement      from Iran                '

// let output4  = data3.trim()

// console.log(output4)

let data4 = 'Confusion followed the Iran announcement from Iran as state media reports on it soon'

// let output5  = data4.toUpperCase().includes('IRAN')

// let output6  = data4.lastIndexOf('I')



//let outpu7  = data4.replace('Iran', '')


let output8 = data4.charAt(29)


console.log(output8)