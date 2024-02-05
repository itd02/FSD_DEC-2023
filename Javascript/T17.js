// function main_function(){
// 	function inner_function(){
// 		console.log('I am inner Function!!!')		
// 	}

// 	return inner_function

// }



// main_function()


// let function1 = a => {
// 	let function2 = b => {
// 		let function3 = c => {
// 			return a*10 + b*20 + c*30
// 		}
// 		return function3
// 	}
// 	return function2
// }


// let output = function1(10)(2)(5)

// console.log(output)

// setInterval(<callback>, duration)

// setTimeout(<callback>, duration)

// let callBack = () => console.log('Hello!!!')

// setInterval(callBack, 3000)

//Array Functional Programming


// forEach
	//countries.forEach(<callback(element, index, inp_array)>)

	//let countries = ['AUS', 'ENG', 'PAK']


	// let numbers = [2, 4, 6, 8, 10]
	// function do_something(num){
	// console.log(num ** 3)
	// }



	// numbers.forEach( el => do_something(el))


// map
	// let countries = ['AUS', 'ENG', 'PAK']

	// let lower_array = countries.map(el => el.toLowerCase())


	// let numbers = [2, 4, 6, 8, 10]


	// function do_something(num){
	// 	return num ** 3
	// }


	// console.log("orignal array ==>", numbers)

	// let squared_numbers = numbers.map(el => do_something(el))

	// console.log("mapped array ==>", squared_numbers)




// reduce
	// let numbers = ["a", "b", "c", "d", "e"] 
	// let output = numbers.reduce( (acc, el) => acc + el)
	// console.log(output)




// filter
	// let citizens = [18, 20, 30, 55, 10, 70, 65, 61, 88, 38, 34, 28, 14] 

	// let senior_citizens = citizens.filter(el => el>=60)

	// let childrn = citizens.filter(el => el<18)

	// console.log(senior_citizens)
	// console.log(childrn)


	// let students =[
	// 		{name:'Sachin', marks: 80},
	// 		{name:'Rahul', marks: 60},
	// 		{name:'Rohit', marks: 30},
	// 		{name:'Virat', marks: 90},
	// 		{name:'Dhoni', marks: 55},
	// 	]



	// let first_class_students = students.filter( el => el.marks >= 60 )

	// console.log(first_class_students)
