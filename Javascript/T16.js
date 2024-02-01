// Higher Order Functions (HOFs)



// function sqr(number1){

// 	return number1 ** 2
// }


// function cube(number1){

// 	return number1 ** 3
// }

// function sqr_root(number1){

// 	return number1 ** 0.5
// }




// function main_func(fun1, num1){

// 	let out = null





// 	if (num1 > 0){
// 		out = fun1(num1)
// 	}



// 	console.log(out)
// }




// square_root_of_4 = main_func(sqr_root, 10)
// cube_of_4        = main_func(cube, 4)




function sqr(number1){
//	console.log( number1 ** 2)
	return "Done!!"
}



function func2(){
	return sqr()
}


function main_func(){
	return func2()
}


let out = main_func()

console.log(out)
