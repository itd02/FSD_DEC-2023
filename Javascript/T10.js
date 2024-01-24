// FOR 
// 	Classical
// 	for Of
// 	for in

// While
// 	Regular
// 	Do While


// For Classical

// for(initilization; condition; increment/decrement){
// 	console.log("Hello")
// }


// for(let i = 0; i<10;i++)
// {
// 	if (i == 3){
// 		break
// 	}
// 	console.log(`Hello ${i}`)

// }

let countries = ['AUS', 'ENG', 'PAK']




for (let country of countries){
	console.log(country)
}

console.log("============================\n\n")
for (let country in countries){
	console.log(country, countries[country])
}

console.log("============================\n\n")

for (let country=0; country<countries.length;country++){
	console.log(country, countries[country])
}
