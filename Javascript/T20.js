
let fullname
let first_name = "Mohammad"
let last_name = "Shami"

try{
	fullname = first_name + last_name
	}
catch (err){
	fullname = first_name
}
finally{
	console.log(fullname)
}

