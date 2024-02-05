// let people = [18, 20, 30, 55, 100, 70, 65, 61, 88, 38, 34, 28, 24]

// let checkAllAreVoters = people.every(el => el >= 18)

// console.log("This is every function's output ", checkAllAreVoters)


// let checkAllSomeVoters = people.some(el => el < 18)
// console.log("This is some function's output ", checkAllSomeVoters)


// let x = Array()
// x = Array().fill(8)
// x = []
// x = "saghfgsd".split()
// x = Array.from('sadgsakdgsajdg')

// let [x, y, ...z] = [1, 2, 3, 4, 6, 789, ]

// let [first_name, last_name] = ['Virat', 'Kohli']


// let fullstack = [   ['HTML', 'CSS', 'JS', 'React JS'],
// 					['Node', 'Express'], 
// 					['MongoDB', 'MySQL']]

// let [frontEnd, backEnd, DB] = fullstack





// for (let [fe, be, db]  of fullstack  ){

// 		console.log(`The element is ${fe}, ${be}, ${db}`)

// }


// let states_of_india = [['Karnataka', 'Bangalore'],  ['Goa', 'Panaji'], ['Meghalaya', 'Shillong'], ['Bihar', 'Patna']]

// for (let [state, capital] of states_of_india){

// 	console.log(`The capital city of ${state} is ${capital}`)

// }


// let data1 = ['HTML', 'CSS', 'JS', 'React JS']

// let data2 = [...data1]

// console.log('data1 before pop', data1)
// console.log('data2 before pop', data2)

// data1.pop()


// console.log('data1 after pop', data1)
// console.log('data2 after pop', data2)


// let data1 = ['HTML', 'CSS', 'JS', 'React JS']

// let [...data2] = data1


// console.log('data1 before pop', data1)
// console.log('data2 before pop', data2)

// data1.pop()


// console.log('data1 after pop', data1)
// console.log('data2 after pop', data2)



// let fullstack = {   
// 					frontend: ['HTML', 'CSS', 'JS', 'React JS'],
// 					backend: ['Node', 'Express'], 
// 					db: ['MongoDB', 'MySQL']
// 				}


// //let {fe, be, db1, db, frontend, backend} = fullstack


// let {frontend, backend, db, cloud='aws'} = fullstack

// console.log(fullstack.frontend)


// let cricketers = [
// 		{
// 			first_name: 'Sachin',
// 			last_name: 'Tendulkar',
// 			age: 40,
// 		},
// 		{
// 			first_name: 'Virat',
// 			last_name: 'Kohli',
// 			age: 36,
// 		},
// 		{
// 			first_name: 'Rohit',
// 			last_name: 'Sharma',
// 			age: 38,
// 		},
// 		{
// 			first_name: 'Shubhan',
// 			last_name: 'Gill',
// 			age: 22,
// 		},
// 	]


// for (const {first_name, last_name, age} of cricketers){


// 	console.log(`Hi my name is ${first_name} ${last_name} and I am ${age} years old `)


// }


// function main() {
// 		let data = 200

// 		function nested() 
// 		{
// 			console.log(data)
// 		}

// 		nested() 
// }


// main()



// function factorial(num){
// 	let fac = 1
// 	for (let i=1;i<=num; i++)
// 	{
// 		fac *= i

// 		console.log(`at i = ${i} ==> factorial = ${fac}`)
// 	}

// 	console.log(fac)
// }

// factorial(5)


// Recursion

function factorial(num)
{
		if (num == 1) return 1
		return num * factorial(num-1)
}

console.log(factorial(6))



	
		
			