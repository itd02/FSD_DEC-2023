
// // class Account(){
// // 	constructor(name, email, phone) {
// // 		this.name = name
// // 		this.email = email
// // 		this.phone = phone
// // 	}

// // 	// static emailValidator(name,email,phone){
// // 	// 	if (/\w+\@\w+\.\w+(\.\w+)?/.test(email)){
// // 	// 		Account(name,email,phone)
// // 	// 	}
// // 	// }


// // }


// // // let p1 = new Account('Ramesh', 'ramesh@gmail.com', 9090909090)
// // // let p3 = new Account('Suresh', 'suresh@gmail.com', 9191919191)
// // // let p4 = new Account('George', 'george@gmail.com', 9292929292)

// // let p1 = new Account.emailValidator('Ramesh', 'ramesh@gmail.com', 9090909090)


// // class ABCJeans{
// // 	static location = "Bangalore"
// // 	static color = "Red"

// // 	constructor(color){
// // 		this.color = color
// // 	}



// // 	static unitLocation(){
// // 		console.log(`The Manufacturing Location is at ${this.color}`)		
// // 	}

// // }


// // let blueJeans = new ABCJeans('Sky Blue')


// // ABCJeans.unitLocation()
// // console.log(blueJeans.color)


class Animal{
	constructor(legs)
	{
		this.num_legs=legs
	}

	desplyDetails(abc){
		console.log(this)
	}
}


class Dog extends Animal {
	constructor(legs, bark){
		super(legs)
		this.bark = bark
	}

	desplyDetails(){
		console.log(this)
	}
}

class German_Shepherd extends Dog {
	constructor(legs, color){
		super(legs, true)
		this.color = color
	}


	desplyDetails(){
		console.log(arguments)
		console.log(`This Dog is German_Shepherd and it has ${this.num_legs}, ${this.color} and it barks=${this.bark}`)
	}
}


let GS1 = new German_Shepherd(4, 'Brown')

GS1.desplyDetails(123)

