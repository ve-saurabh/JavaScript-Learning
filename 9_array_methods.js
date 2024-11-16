let arr = ['saurabh','varma',24,true,{name:'saurabh'},[1,2,3]];
console.log(arr);

length
console.log(arr.length);

// index
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[4].name);
console.log(arr[5][0]);

// last index
console.log(arr[arr.length-1]);

// Push
let array = [10,20,30,40,50]
array.push(60);
console.log(array);

// pop
array.pop(60);
console.log(array);

// unshift
array.unshift(5);
console.log(array);

array.unshift(0);
console.log(array);

// shift
array.shift(0);
console.log(array);
array.shift(5);
console.log(array);

// slice
console.log(array.slice(1,5));
console.log(array.slice(4));

// splice   modify the original array
array.splice(1,2,50,60);
console.log(array);
array.splice(0,1,[1,2,3]);
console.log(array);

// indexof
console.log(array.indexOf(50));
console.log(array.indexOf(40));

// lastIndexOf
let arr1 = [10,20,30,10,40,10,50];
console.log(arr1.lastIndexOf(10, 4));

// includes
console.log(arr1.includes(10, 2));
console.log(arr1.includes(20,1));
console.log(arr1.includes(10,6));

// reverse
arr1.reverse();
console.log(arr1);

// sort
arr1.sort();
console.log(arr1);

// concat
console.log(arr1.concat(array));

// join
console.log(arr1.join(' '));
let arr2 = ['hello','how','are','you'];
console.log(arr2.join(' '));
console.log(arr2.join(''));
console.log(arr2.join());

// foreach
let a = ['a','b','c','d','e']
a.forEach((ele,index) => console.log(ele,index));

let ar = [10,20,30,40,50]
ar.forEach((ele, index) => console.log(ele, index));

let arrray = [100,200,300,400,500]
arrray.forEach(display);
function display(ele, index){
    console.log(ele, index);
}

// filter
