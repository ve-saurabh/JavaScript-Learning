// Array
arr1 = [10,20,30,40,50];
console.log(arr1[3]);    
console.log(arr1[4]);
console.log(arr1.length);
console.log(arr1[-2]);
console.log(arr1[arr1.length-1]);
arr1[0] = 20;
console.log(arr1);

arr2 = ['hello',true,3.5,'saurabh',arr1]
console.log(arr2);
console.log(arr2.length);
console.log(arr2[4][2]);
console.log(arr2[1]);

// Object
let obj1 = {
    name:'saurabh',
    age: 25,
    graduate: true,
    unemployed: true,
    salary: undefined,
    address: {
        city: 'ahmedabad',
        state: 'Gujarat',
        pincode: 382415
    }
}
// Reading data
console.log(obj1);
console.log(obj1.name);
console.log(obj1.age);
console.log(obj1['graduate']);
console.log(obj1['name']);
console.log(obj1['address']['city']);

// Modifying data
obj1.name = "varma saurabh";
console.log(obj1);
obj1.address.pincode = 382430;
console.log(obj1);
obj1['graduation_year'] = 2024;
console.log(obj1);
console.log(obj1.length);

// Deleting data
delete obj1.unemployed;
console.log(obj1);