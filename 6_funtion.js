// function : it is a block of code or set of instructions that is used to perform specific task
function car(wheels, windows){
    // console.log('car has',wheels,'wheels');
    // console.log('car has',windows,'windows');
    return `car has ${wheels} wheels and ${windows} windows`;
}
console.log(car(4, 5));

function add(a, b){
    return a+b;
}
console.log(add(10, 20));

function Add(a, b){
    return a+b, a-b, a*b, a/b;     // here it will consider last value
}
console.log(Add(10, 20));

function sub(a, b){
    return a-b;
}
console.log(sub(10, 20));

// function types
// 1 named function
function hello(){
    console.log('hello');
}
hello();

// 2 anonymous function
let fun = function(){
    console.log('function');
}
fun();

// 3 function with expression
let fun1 = function fun2(){
    console.log('function 1');
}
fun1();

let fun3 = function(){
    console.log('this is function 3');
}
fun3();

// 4 immediate invoked function
(
    function(){
        console.log('this is immediate invoked function');
    }
)();

(
    function(a){
        console.log(a);
    }
)(10);

(
    function add(a,b,c){
        console.log(a+b+c);
    }
)(10,20,30);

// 5 Arrow function
let fun4 = (a,b)=> console.log(a+b);   
fun4(10,20);

let x = a => a*a;
console.log(x(10));

// 6 higher order function
function parent(func){
    console.log('this is parent function');
    func();
}
parent(child);

// 7 callback function
function child(){
    console.log('this is child function');
}

// 8 first class function
function add2(a, b){
    return a+b;
}
function sub2(a, b){
    return a-b;
}
function mul2(a, b){
    return a*b;
}
function div2(a, b){
    return a/b;
}
function func(a, b, callback){
    return callback(a, b);
}
console.log(func(10, 20, add2));
console.log(func(10, 20, sub2));
console.log(func(10, 20, mul2));
console.log(func(10, 20, div2));


// 9 Nested function
function parent2(){
    let a = 10;
    console.log(a);

    function child2(){
        let b = 20;
        console.log(b);
    }
    child2();
}
parent2();
