// 1
let fname = prompt('Enter Your first name');
let lname = prompt('Enter your last name');
console.log(`full name is ${fname} ${lname}`);

// 2
let radius = prompt('Enter the radius of sphere');
let volume = 4/3*3.14*radius*radius*radius;
console.log(`the volume of sphere is ${volume}`);

// 3
let celsius = prompt('Enter temperature value');
let fahrenheit = celsius * 9/5 + 32;
console.log(`temperature in fahrenheit is ${fahrenheit}`);

// 4
let sub1 = prompt('Enter maths marks');
let sub2 = prompt('Enter science marks');
let sub3 = prompt('Enter english marks');
let sub4 = prompt('Enter physics marks');
let sub5 = prompt('Enter biology marks');

let total = +sub1 + +sub2 + +sub3 + +sub4 + +sub5;
let avg = total/5;
console.log(`avg of 5subject is ${avg}`);

// 5
let height = prompt('Enter height of rectangle');
let widht = prompt('Enter width of rectange');
let area = height * widht;
console.log(`area of rectangle is ${area}`);