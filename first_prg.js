let a0 = 10;

a0 = ++a0;
a0 = a0++;
a0 = --a0;
a0 = a0--;

console.log(a0); 


//1 question

var x=20;
var y=30;
console.log(x+y);

console.log(y-x);

console.log(x*y);

console.log(y/x);

console.log(y%x);

console.log(x**y);

var a=20,b=10,c=15,d=20;

//ASSIGNMENT OPERATOR
console.log(a+=b);
console.log(a-=b);
console.log(a*=b);
console.log(a/=b);

//perform 2 strict equality comparision operations in which one should return true and one should return false

const isEqualTrue = 5 === 5;
console.log(isEqualTrue); 
const isEqualFalse = 'hello' === 123;
console.log(isEqualFalse); 


//perform 2 strict non-equality comparision operation in which one should return true and one should return false.

const isNotEqualTrue = 'apple' !== 'orange';
console.log(isNotEqualTrue); 
const isNotEqualFalse = 10 !== 10;
console.log(isNotEqualFalse); 

//perform 2 less than comparision operations,in which one should return true and one should return false,

const isLessThanTrue = 3 < 5;
console.log(isLessThanTrue); 
const isLessThanFalse = 8 < 5;
console.log(isLessThanFalse); 

//perform 2 greatter than comparision operations,in which one should return true and one should return false,

const isGreaterThanTrue=3<5;
console.log(isGreaterThanTrue);
const isGreaterThanFalse=8<5;
console.log(isGreaterThanFalse);

let age =50;

if(age>10 && age<20){
    console.log("sufficient age");
}else{
    console.log("not sufficient age");
}

let myFavSuper = ['A', 'B', 'C', 'D', 'E'];
console.log(myFavSuper);

myFavSuper.push('F');//push back
console.log(myFavSuper);
myFavSuper.unshift('0');//push front
console.log(myFavSuper);
myFavSuper.shift();//remove from front
console.log(myFavSuper);
myFavSuper.pop();//remove form back
console.log(myFavSuper);

let fruits = ['apple', 'banana', 'orange', 'grapes', 'mango'];

// Adding 'kiwi' at index 2
fruits.splice(2, 0, 'kiwi');

console.log(fruits); // ['apple', 'banana', 'kiwi', 'orange', 'grapes', 'mango']

let fruits3 = ['apple', 'banana', 'kiwi', 'orange', 'grapes', 'mango'];

// Removing 2 elements starting from index 2
fruits3.splice(2, 2);

console.log(fruits3); // ['apple', 'banana', 'grapes', 'mango']

let fruits0 = ['apple', 'banana', 'kiwi', 'orange', 'grapes', 'mango'];

// Replacing the element at index 2 with 'pear'
fruits0.splice(2, 1, 'pear');

console.log(fruits0); // ['apple', 'banana', 'pear', 'orange', 'grapes', 'mango']

function addAtIndex(array, index, elementToAdd) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
      if (i === index) {
        newArray.push(elementToAdd);
      }
      newArray.push(array[i]);
    }
    return newArray;
  }
  
  let fruits2 = ['apple', 'banana', 'orange', 'grapes', 'mango'];
  let updatedFruits = addAtIndex(fruits2, 2, 'kiwi');
  
  console.log(updatedFruits); // ['apple', 'banana', 'kiwi', 'orange', 'grapes', 'mango']

  function removeAtIndex(array, index) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
      if (i !== index) {
        newArray.push(array[i]);
      }
    }
    return newArray;
  }
  
  let fruits1 = ['apple', 'banana', 'kiwi', 'orange', 'grapes', 'mango'];
  let updatedFruits1 = removeAtIndex(fruits1, 2);
  
  console.log(updatedFruits); // ['apple', 'banana', 'orange', 'grapes', 'mango']

//getDate() getDay()  getFullYear()  getHours()  getmilliseconds()  getminutes(),etc.... MANY MORE

// Creating a new Date object
let currentDate = new Date();

// Extracting the current day and time components
let currentDay = currentDate.toLocaleDateString('en-US', { weekday: 'long' });
let currentTime = currentDate.toLocaleTimeString('en-US');

// Printing the current day and time
console.log(`Current Day: ${currentDay}`);
console.log(`Current Time: ${currentTime}`);


//area of triangle 3 4 5
//