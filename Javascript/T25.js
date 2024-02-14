
const promise1 = new Promise((resolve, reject) => setTimeout(resolve, 100, "One"));
const promise2 = new Promise((resolve, reject) => setTimeout(resolve, 3000, 'Two'));
const promise3 = new Promise((resolve, reject) => setTimeout(resolve, 6000, 'Three'));
const promise4 = new Promise((resolve, reject) => setTimeout(resolve, 9000, 'Four'));
const promise5 = new Promise((resolve, reject) => setTimeout(resolve, 12000, 'Five'));


// promise1.then(out1 => { console.log(out1); return promise2 })
// 	    .then(out2 => { console.log(out2); return promise3 })
// 	    .then(out3 => { console.log(out3); return promise4 })
// 	    .then(out4 => { console.log(out4); return promise5 })
// 	    .then(out5 => { console.log(out5);})


let syncFunc = () => "Seven"


async function asyncFunc(){

		console.log("Starting Execution!!!")

		let out1 = await promise1
		console.log(out1)
		
		let out2 = await promise2
		console.log(out2)
		
		let out3 = await promise3
		console.log(out3)
		
		let out4 = await promise4
		console.log(out4)
		
		let out5 = await promise5
		console.log(out5)


		let out6 = await syncFunc()
		console.log(out6)


		return "Funished Execution!"

}

asyncFunc().then(out => console.log(out))