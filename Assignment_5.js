// 1 
let username = prompt('Enter your name');
let age = prompt('Enter your age');
console.log(`hello ${username} you are ${age} years old`);

// 2 remove leading or trailing spaces
let fullname = prompt('Enter your full name');
console.log(fullname.trimStart());
console.log(fullname.trimEnd());

// 3 take first and last name as input and display full name
let firstname = prompt('Enter your first name');
let lastname = prompt('Enter your last name');
console.log(`full name is ${firstname} ${lastname}`);

// 4 display first 5 characters
let s = "learning string methods";
console.log(str.slice(0,5));

// 5 reverse the given string
let str = prompt('Enter string:')
let rev_str = '';
for(let i=str.length-1; i>=0; i--){
    rev_str += str[i];
}
console.log(rev_str);

// 6  check if string is palindrome or not
let stri = prompt('Enter string:')
let rev_stri = '';
for(let i=str.length-1; i>=0; i--){
    rev_stri += stri[i];
}
if(rev_stri == stri){
    console.log('Palindrome string');
}
else{
    console.log('Not Palindrome');
}

// 7  count number of vowels in string
let string = prompt('Enter any string:')
let count = 0;
for(let i=0; i<string.length; i++){
    if (string[i]=='a' || string[i]=='e' || string[i]=='i' || string[i]=='o' || string[i]=='u'){
        count++;
    }
} 
console.log(count);

// 8  remove all spaces from string
let strr = "Hello my name is varma saurabh";
console.log(strr.replaceAll(' ', ''));

// 9 count number of alphabets in string
let name = "Hello saurabh";
let count = 0;
for(let ch of name){
    if(ch>="a" && ch<="z"){
        count++;
    }
}
console.log(count);
