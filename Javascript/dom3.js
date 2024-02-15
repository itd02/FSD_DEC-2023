

let root = document.getElementById('root')

let order_list = document.querySelector('#order_content')
let order_list_items = document.querySelectorAll('#order_content > li')



for (let el in order_list_items){

	if (el == 2 ){
		order_list.removeChild(order_list_items[el])
	}

}
















// let h1 = document.createElement('h1')
// 	h1.innerHTML = "This From JS"

// let para1 = document.createElement('p')
// 	para1.innerHTML = "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"

// let para2 = document.createElement('p')
// 	para2.innerHTML = "2 -- Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"




// 	root.appendChild(h1)	
// 	root.appendChild(para1)	
// 	root.appendChild(para2)