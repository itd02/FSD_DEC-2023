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