let a = prompt('Enter value of a');
let b = prompt('Enter value of b');
if (a>b){
    console.log('a is the largest number');
}
else{
    console.log('b is the largest number');
}


let x = prompt('Enter value of x');
if (x > 0){
    console.log('x is positive');
}
else if(x<0){
    console.log('x is negative');
}
else{
    console.log('Zero');
}

let num1 = prompt('Enter value of num1');
let num2 = prompt('Enter value of num2');
let num3 = prompt('Enter value of num3');

if (num1>num2 && num1<num3 || num1<num2 && num1>num3){
    console.log('num1 is second largest number');
}
else if(num2>num1 && num2<num3 || num2<num3 && num2>num1){
    console.log('num2 is second largest number');
}
else{
    console.log('num3 is second largest number');
}


let marks = prompt('Enter your marks');
if (marks>=90 && marks<=100){
    console.log('Grade A');
}
else if(marks>=80 && marks<90){
    console.log('Grade B');
}
else if(marks>=70 && marks<80){
    console.log('Grade C');
}
else if(marks>=60 && marks<70){
    console.log('Grade D');
}
else{
    console.log('Fail');
}