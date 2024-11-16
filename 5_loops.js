// while loop : executes the block of code as long as the condition is true
let i = 1;
while(i<=10){
    console.log(i);
    i++;
}

const obj = {
    name: 'saurabh',
    age: 25
}
for(let i in obj){
    console.log(i);
    console.log(obj[i]);
}

// do while loop  : execute the block of code at least once before checking the condition 
let j = 1;
do{
    console.log(j);
    j++;
}while(j<=10)

// for loop  : executes a block of code a specified number of times
for(let k = 1; k<=10; k++){
    console.log(k);
}

let l = 1;
for(l;l<=10;l++){
    console.log(l);
}

// for of loop : for of loop is used to iterate the values of an array or string
let arr = [10,20,30,40,50]
for(let m of arr){
    console.log(m);
}

let str = "saurabh";
for(let c of str){
    console.log(c);
}

// for in loop : for in loop is used to iterate the properties of an object
const obj1 = {
    name: 'saurabh',
    age: 25
}
for(let p in obj1){
    console.log(p, obj1[p]);
}
