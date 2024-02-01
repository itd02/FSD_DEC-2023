let cricketer = {
	first_name: "Virat",
	last_name:  "Kohli",
	age: 36,
	skills: ['Batting', 'Bowling', 'Fielding'],
	full_name: function(){
				return this.first_name +' ' + this.last_name
				}
}




let cricketer1 = cricketer //Object.assign({}, cricketer)

cricketer1.place1 = 'BLR'
cricketer.place2 = 'DLH'


console.log(cricketer)

console.log(cricketer1)

Object.assign(cricketer, {first_name2: "Virat", last_name3:  "Kohli",})


creciter3  = {...cricketer, {extra1:"", extra2:""}}

