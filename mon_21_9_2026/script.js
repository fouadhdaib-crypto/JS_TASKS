  function TypeOf_(number_){

    console.log(typeof(number_));
 }

TypeOf_(100);
TypeOf_(1.22);
TypeOf_("asd");
TypeOf_("A");
TypeOf_(5<1);

 function PRINT (STR){

    console.log(STR);
 }
    PRINT("Orange" - "s")
    PRINT("4" + "8")
    PRINT("4" - "8")
    PRINT("name" + 3)
    PRINT("name" - 3)
    PRINT(82 * "word")
    PRINT(1 + "hello")
    PRINT("hello" + 1)
    PRINT(1 + "True")
    PRINT("hello" + "True")   

 console.log(1000/500);
 console.log(1000-500);
 console.log(1000+500);
 console.log(1000*500);


 /* ___________________________________ */

 const ARR =[7,9,2];

 let SUM2 = 7+9+2;

 let avg = SUM2/2;

console.log("Avg =" + avg);

 let price = 150;

 console.log("DisCount = "+150/(150*15/100));





 let num1=2;
 let num2=3;
 console.log("The exponential of 2 with 3 as the exponent is:"+num1**num2 )



 // 1. String
let str = "Welcome to Orange";

console.log(str.toUpperCase());


console.log(str.substring(8, 10));

console.log(str.replace("Welcome to", "Hello from"));


console.log(str.toLowerCase());

console.log(str.length);


console.log(str.replace("Orange", '"zain"'));


console.log(str.concat("88888Jordan"));


// 2. Replace all occurrences of the first letter with '*'
let word = "cactus";
let firstLetter = word[0];

let result = word.replaceAll(firstLetter, "*");

console.log(result);
 /* ___________________________________ */
  /* ___________________________________ */
   /* ___________________________________ */




let zin = ["“Coding”", "“Academy”", "“By”", "“Orange”"];

console.log(zin);
console.log(zin[0] + zin[1]);
console.log(+"Wlecome"+zin[0] + "To"+ zin[1] + "By"+ zin[3]+"Jordan");


console.log(zin[0]+zin[1]+zin[2]+zin[3]);

console.log(zin[0] + zin[3]);



var fruit = ["banana", "apple", "orange", "watermelon"]; 
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];
fruit.pop();
console.log(fruit);
vegetables.shift();
console.log(vegetables);
console.log("index is " +fruit.indexOf("orange"));
fruit.push(1);
console.log(fruit);
console.log(vegetables.length);
let mixdarr = fruit.concat(vegetables);
console.log(mixdarr);
mixdarr.splice(4,1);
mixdarr.splice(5,1);


console.log(mixdarr);
console.log(mixdarr.toString());

let birthYear =2001;

let current_year =  new Date().getFullYear();

let age = current_year-birthYear;

if (age > 60) {
    console.log("You may join the seniors’ program.");
} else if (age > 30) {
    console.log("You are not eligible. You may join other programs.");
} else if (age >= 18) {
    console.log("You are eligible. Start your application.");
} else {
    console.log("You may join the kids' program.");
}

let str22 = "OrAnGe";

let NreStr = "";


let index=0;

for (const strin of str22) {

      if(strin ===str22[index].toLowerCase() ){
        NreStr += str22[index].toUpperCase();

      }
      else{
          NreStr += str22[index].toLowerCase();
      }

      index++;
   
}
console.log(NreStr);

/**********************************************/


function Convert(str){

   let Word = str.split(" ");
   let str2="";


      Word.forEach(element =>  {
         
          str2 += element[0].toUpperCase() +element.slice(1)
      });
 console.log(str2);
}

Convert("Coding Academy by Orange")


function RemoveElmentInArray(arr,RemoveAt){

   
   let str2="";

   let newarr =[];
   
   for (let index = 0; index < arr.length; index++) {
      

      if(arr[index]!=arr[RemoveAt]){

         newarr.push(arr[index]); 

      }
      
   }

     
 console.log(newarr);
}

let arrTest = ["fuad","ahmed","Yousef","khalied"]
RemoveElmentInArray(arrTest,3);


function checkNumber(num) {
    if (num % 2 === 0) {
        console.log("Even");
    } else {
        console.log("Odd");
    }
}

checkNumber(7);

function checkNumber(input) {
    if (typeof input === "number") {
        console.log("It is a number");
    } else {
        console.log("It is not a number");
    }
}

checkNumber(25);
checkNumber("25");
function largest(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

console.log(largest(10, 20));


function checkTriangle(a, b, c) {
    if (a === b && b === c) {
        return "Equilateral";
    } else if (a === b || a === c || b === c) {
        return "Isosceles";
    } else {
        return "Scalene";
    }
}

console.log(checkTriangle(5, 5, 5)); 
console.log(checkTriangle(5, 5, 3)); 
console.log(checkTriangle(4, 5, 6)); 


function inRange(num, min, max) {
    if (num >= min && num <= max) {
        return true;
    } else {
        return false;
    }
}

console.log(inRange(5, 1, 10));  
console.log(inRange(15, 1, 10)); 


console.log("Leap Year");

function leapYear(year) {
    if (year % 400 === 0) {
        return true;
    } else if (year % 4 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(leapYear(2024)); // true
console.log(leapYear(2023)); // false
console.log(leapYear(1900)); // false
console.log(leapYear(2000)); // true





//Even numbers 1–50 
for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log(i);
         console.log(i);
    }
}
//Even numbers 1–50 
let i = 1;

while (i <= 50) {
    if (i % 2 === 0) {
        console.log(i);
         console.log(i);
    }
    i++;
}

// Try solving the previous exercise using a single for loop. 
for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log(i);
        
    }
}

// Even numbers
for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// Odd numbers
for (let i = 1; i <= 50; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

for (let i = 1; i <= 100; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }

}


function fizzBuzz(num) {

    if (num % 3 === 0 && num % 5 === 0) {
        return "FizzBuzz";
    } else if (num % 3 === 0) {
        return "Fizz";
    } else if (num % 5 === 0) {
        return "Buzz";
    } else {
        return "num";
    }
}


console.log(fizzBuzz(6))





function fizzBuzzRec(num) {

   if(num==100){
      return;

   }

    if (num % 3 === 0 && num % 5 === 0) {
        return "FizzBuzz";
    } else if (num % 3 === 0) {
        return "Fizz";
    } else if (num % 5 === 0) {
        return "Buzz";
    } else {
        return "num";
    }
   
   console.log( fizzBuzzRec(num+1));




}



 function banknotes ( amount , Note){

    let arr =[];
   Note.forEach(element => {

     while(amount>=element){

         arr.push(element);
         amount-=element;
     }

      
   });
   console.log(arr);

}

banknotes(66,[25,10,5,1]);


function existence(str , char){
   Counter =0;

   for (let index = 0; index < str.length; index++) {
      

      if(str[index].toLowerCase()==char.toLowerCase()){
          Counter++;

      }

      
   }

   console.log(Counter);
}


existence("Coding Academy by Orange","A");




   

 



