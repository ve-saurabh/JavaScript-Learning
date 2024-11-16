// 1 access first and last element of an array
let arr = [10,20,30,40,50]
console.log(arr[0]);
console.log(arr[arr.length-1]);

// 2 print each and every element of an array in separate lines
for(let i=0; i<=arr.length-1; i++){
    console.log(arr[i]);
}

// 3 remove an element from an array at specified index given by user
// let index = prompt('Enter index value');
// console.log(arr.splice(index,1));
// console.log(arr)

// 4 find second largest number from an array
let first_max, second_max;
if(first_max>second_max){
    first_max = arr[0];
    second_max = arr[1];
}   
else{
    first_max = arr[1];
    second_max = arr[0];
}
for(let i = 0; i<arr.length; i++){
    if(arr[i] > first_max){
        second_max = first_max;
        first_max = arr[i];
    }
    else{
        second_max = arr[i];
    }
}
console.log(second_max);

// 5 find second smallest number from an array
let first_min, second_min;
if(arr[0] < arr[1]){
    first_min = arr[0];
    second_min = arr[1];
}
else{
    first_min = arr[1];
    second_min = arr[0];
}
for(let i = 0; i<arr.length; i++){
    if(arr[i] < first_min){
        second_min = first_min;
        first_min = arr[i];
    }
    else if(arr[i] < second_min && arr[i] != first_min){
        second_min = arr[i]; 
    }
}
if(second_min == first_min){
    console.log(-1);
}
else{
    console.log(second_min);
}

// 6 find most frequent element in an array
let a = [10,10,20,30,40,10,20,30];
let maxi = 0;
let index = 0;
for(let i=0; i<=a.length-1; i++){
    let count = 0;
    for(let j=0; j<=a.length-1; j++){
        if(a[i] == a[j]){
            count += 1;
        }
    }
    if(count > maxi){
        maxi = count;
        index = i;
    }
    count = 0;
}
console.log(arr[index]);

// 7 reverse a string using string and array methods
let str = "hello I'm Varma Saurabh";
let arr1 = str.split("");
let rev_arr = arr1.reverse();
console.log(rev_arr.join(''));

// 8 find and return the longest word in a string
let msg = "hello my name is saurabh";
let count = 0;
let tempword = '';
let max = 0;
let largeword = '';
for(let i = 0; i<msg.length; i++){
    if(msg[i] != " "){
        count ++;
        tempword += msg[i];
    }
    else{
        if(max<count){
            max = count;
            largeword = tempword;
        }
        count = 0;
        tempword = '';
    }
}
if(max<count){
    largeword = tempword;
}
console.log(largeword);


let s = "Maneesha maam is a teacher";
let mword = 0;
let lword = '';
let cword = '';
for(let i = 0; i<s.length; i++){
    if(s[i] == " "){
        if(cword.length >= mword){
            mword = cword.length;
            lword = cword;
        }
        cword = '';
    }
    else{
        cword += s[i];
    }
}
if(cword.length >= mword){
    lword = cword;
}
console.log(lword);

let strr = "Hello my name is varma saurabh";
let ar = strr.split(' ');
let maxx = 0;
let indexx = 0;
for(let i = 0; i<ar.length; i++){
    if(max<ar[i].length){
        max = ar[i].length;
        indexx = i;
    }
}
console.log(ar[indexx

]);

// 9 Remove duplicate values from array
let array = [10,10,20,30,40,10,20,30];
let array2 = [];
for(let i = 0; i<array.length; i++){
    if(array2.indexOf(array[i]) == -1){
        array2.push(array[i]);
    }
}
console.log(array2);

// 10 Capitalize first and last character of each word in string
let a2 = prompt('Enter string').split(' ');
for(let i = 0; i<a2.length; i++){
    a2.splice(i,1,a2[i][0].toUpperCase() + a2[i].slice(1, a2[i].length-1) + a2[i][a2[i].length-1].toUpperCase());
    // a2[i] = a2[i][0].toUpperCase() + a2[i].slice(1, a2[i].length-1) + a2[i][a2[i].length-1].toUpperCase();
}
console.log(a2.join(' '));

