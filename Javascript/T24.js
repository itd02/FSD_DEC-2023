// Promises


const promise1 = new Promise((resolve, reject) => setTimeout(resolve, 1000, "Enter Your PIN"));
const promise2 = new Promise((resolve, reject) => setTimeout(resolve, 2000, 'Validating Your PIN'));
const promise3 = new Promise((resolve, reject) => setTimeout(resolve, 5000, 'How much you want'));
const promise4 = new Promise((resolve, reject) => setTimeout(resolve, 10000, 'Check Balance'));
const promise5 = new Promise((resolve, reject) => setTimeout(resolve, 15000, 'Dispense 5000 Rs'));

const promises = [promise1, promise2, promise3, promise4, promise5];


Promise.allSettled(promises).then((value) => console.log(value));


