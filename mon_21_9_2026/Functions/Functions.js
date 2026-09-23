
function findSmallest(arr) {
  return Math.min(arr);
}
console.log(findSmallest([30, 45, 60, 7])); 


function AlphabeticalOrder(str) {
  return str.split('').sort().join("");
}
console.log(AlphabeticalOrder('hello')); 


function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}
console.log(factorial(8)); 

// 4. Even or odd
function oddOrEven(num) {
  return num % 2 === 0 ? 'Even' : 'Odd';
}
console.log(oddOrEven(9)); // "Odd"

// ---------- MID ----------


function addUp(n) {
  let sum = 0;
  for (let i = n; i >= 0; i--) {
    sum += i;
  }
  return sum;
}
console.log(addUp(4)); // 

// 6. Min, max, length and average of an array
function minMaxLengthAverage(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const length = arr.length;
 
  sum = function(){
     let x=0;
      for (let index = 0; index < arr.length; index++) {
       x+=arr[index];
        
      }
      return x;

  };
  avg = sum()/arr.length;
  return [min, max, length, sum(), avg];
}
console.log(minMaxLengthAverage([7, 13, 3, 77, 100])); // [ 3, 100, 5, 40 ]

// ---------- ADVANCED ----------



function countWords(str) {

  let counter =0;
    for (let index = 0; index < str.length; index++) {
        if(str[index]==" "){
            counter++;

        }
      
    }

    return counter+1;

}


console.log(countWords('hello from CodingAcademy! ')); 



function MultiplyByLength(arr) {

return arr.map(x=>x*arr.length );


}


console.log(MultiplyByLength([4, 2, 5,60,20]));


// 9. Does str1 end with str2?
function checkEnding(str1, str2) {
  return str1.endsWith(str2);
}




console.log(checkEnding('CodingSchool', 'asdSchool')); // false

// 10. Repeat each character twice
function doubleChar(str) {
return str.split(',').map(x=>x+x).join("#");
}
console.log(doubleChar('C,o,d,i,n,g')); // CCooddiinngg

// 11. Index of an element in an array (-1 if not found)
function findIndex(arr, element) {
  return arr.indexOf(element);
}
console.log(findIndex(['Ali', 'Mazen', 'Ayham', 'Murad'], 'Ali')); // 0