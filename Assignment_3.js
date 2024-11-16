// 1
// let i = 1
// while(i<=15){
//     if(i%2==0){
//         console.log(`${i} is even`);
//     }
//     else{
//         console.log(`${i} is odd`);
//     }
//     i++;
// }

// 2
let j = 1;
for(j; j<=50; j++){
    if(j%3==0 && j%5==0){
        console.log('fizzbuzz');
    }else if(j%3==0){
        console.log('fizz');    
    }else if(j%5==0){
        console.log('buzz');
    }
    else{
        console.log(j);
    }
}

// 3
let n = Number(prompt('Enter a number')); 
let temp = n;
let rev = 0;
while(n>0){
    let rem = n%10;
    rev = rev*10+rem;
    n = (n-n%10)/10;
}
if(temp==rev){
    console.log('palindrome');
}else{
    console.log('not palindrome');
}

// 4
let num = Number(prompt('Enter a number'));
let isPrime = true;
if (num<=1){
    console.log('enter number greater than 1');
}
else{
    for(let i=2; i<num; i++){
        if(num%i == 0){
            console.log('not prime');
            isPrime = false;
            break;
        }
    }
    if (isPrime){
    console.log('prime');
    }
}