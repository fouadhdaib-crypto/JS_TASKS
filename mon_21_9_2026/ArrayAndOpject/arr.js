let person = {
    name: "Adam",
    age: 25,
    gender: "male"
};

let per1={
    age:90
    ,gender:"male"
    ,name:"Fuad"
};
per1.email="Fouad@yahoo.com";

console.log(per1);

let person3 = {
    name: "Adam",
    age: 25
};

console.log(person3.name);


let numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(number) {
    console.log(number);
});


let fruits = ["banana", "cherry", "apple"];

fruits.sort();

console.log(fruits);


let fruits2 = ["apple", "banana", "cherry"];

fruits2.reverse();

console.log(fruits2);


let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

arr3=array1.concat(array2);



console.log(arr3);


array1=array1.slice(0,3);

console.log(array1);


array1=array1.splice(0,2);

console.log(array1);

let numbers4 = [1, 2, 3, 4, 5];

let index = numbers4.indexOf(2);

console.log(index);


let numbers5 = [1, 2, 3, 4, 5];

let text = numbers5.join(",");

console.log(text);


let text2 = "1,2,3,4,5";

let array = text2.split(",");

console.log(array);

let numbers6 = [1, 2, 3, 4, 5];

console.log(numbers6.length);

let numbers7 = [1, 2, 3, 4, 5];

for (let number of numbers7) {
    console.log(number);
}


let numbers8 = [1, 2, 3, 4, 5];

console.log(Array.isArray(numbers8));

