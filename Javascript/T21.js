// OOPs



class Account{
	constructor(name, acccount_num, balence) {
		this.name = name
		this.acccount_num = acccount_num
		this.balence = balence
	}

	deposit(amount){
		this.balence += amount
	}


	set withdaw(amount){
		this.balence -= amount
	}

	statement(){
		console.log(this)		
	}

	get currentBalence(){
		return this.balence
	}

}

let p1 = new Account('Suresh', '1223', 1000) // Instantiation, p1 is an instace/object of Acccount Class
let p2 = new Account('Ramesh', '1224', 1000)
let p3 = new Account('Kiran', '1225', 1000)



// p1.deposit(10000)

// p1.statement()

// p1.withdaw(100)
// p1.withdaw(500)
// p1.withdaw(2000)
// p1.deposit(123)
// p2.withdaw(100)
// p2.withdaw(500)
// p3.withdaw(2000)
// p3.deposit(123)

p1.withdaw =  100

console.log(p1.currentBalence)





