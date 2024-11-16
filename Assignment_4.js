// palindrome string
let str = "oyo";
let rev = "";
for(let i=str.length-1; i>=0; i--){
    rev += str[i];
}
if(str == rev){
    console.log('Palindrome');
}
else{
    console.log('Not Palindrome');
}

// check vowels present in string 
let str1 = "saurabh";
let coun = 0;
let i = 0;
while (i<= str.length){
    if (str[i] == "a" || str[i] == "e" || str[i] == "i" || str[i] == "o" || str[i] == "u"){
        coun += 1;
    }
    i++;
}
console.log(coun);

// remove space from the given string
let s = "varma saurabh";
let s2 = "";
for(let i=0; i<=s.length-1; i++){
    if (s[i] != " "){
        s2 += s[i];
    }
}
console.log(s2);

// count alphabets in a given string
let pass = "_saurabh@03";
let count = 0;
let count2 = 0;
let count3 = 0;
let j = 0;
while (j<=pass.length-1){
    if (pass.charCodeAt(j) >= 97 && pass.charCodeAt(j) <=122 || pass.charCodeAt(j) >= 65 && pass.charCodeAt(j)<=90 ){
        count += 1;
    }
    else if(pass.charCodeAt(j)>=32 && pass.charCodeAt(j)<=47 || pass.charCodeAt(j)>=58 && pass.charCodeAt(j)<=64 || pass.charCodeAt(j)>=91 && pass.charCodeAt(j)<=96 || pass.charCodeAt(j)>=123 && pass.charCodeAt(j)<=126){
        count2 += 1; 
    }
    else{
        count3 += 1;
    }
    j++;
}
console.log('alphabets',count);
console.log('special characters', count2);
console.log('numbers', count3);

// find longest word in the sentence
let sentence = "hello my name is saurabh";
let arr = sent.split(" ");
let maxx = 0;
let indexx = 0;
for(let i=0; i<=arr.length-1; i++){
    if(maxx < arr[i].length){
        maxx = arr[i].length;        
        indexx = i;
    }
}   
console.log(arr[indexx]);



// find sum of all numbers present in array
let arr1 = [10,20,30,40,50]
sum = 0
for (let i=0; i<=arr1.length-1; i++){
    sum += arr1[i];
}
console.log(sum)

// find second largest number from the array
let a = [10,20,30,40,50]
let k = 0;

let maxi = a[k];
let second_max = a[k+1];
for (k; k<=a.length-1; k++){
    if (a[k] > maxi){
        second_max = maxi;
        maxi = a[k];
    }
    else{
        second_max = a[k];
    }
}
console.log(second_max);


// find largest word in the sentence
let sent = "hello my name is saurabh";
let counter = 0;
let tempword=''
let max1 = 0;
let largestword;
for(let char of sent){
    if (char != " "){
        counter += 1;
        tempword+=char
    }
    else{
        if(max1<counter){
            max1=counter
            largestword=tempword
        }
        counter=0
        tempword=''
    }
}
if(max1<counter){
    largestword=tempword
}
console.log(largestword);


// fIND FACTORIAL OF A GIVEN NUMBER
function fact(n){
    // let fac = 1;
    if(n==0){
        return 1;
    }
    else if(n<1){
        return 1;
    }   
    else{
        // for(let i=1; i<=n; i++){
        //     fac *= i;
        // }
        // return fac;
        return n * fact(n-1);
    }   
}
console.log(fact(5));


// fibonacci series
let num = 5;
let n1 = 0;
let n2 = 1;
let x = 0;
while (x<=5){
    console.log(n1);
    let sum = n1 + n2;
    n1 = n2;
    n2 = sum;
    x++;
}


// find most frequent element in an array
let arr2 = [10,20,30,20,10,20,40,50,40,30];
let max = 0;    
let index;
for(let i=0; i<=arr2.length-1; i++){
    let count1 = 0;
    for(let j=0; j<=arr2.length-1; j++){
        if(arr2[i] == arr2[j]){
            count1 += 1;
        }
    }
    if(count1 > max){
        max = count1;
        index = i;
    }
}
console.log(arr2[index]);

