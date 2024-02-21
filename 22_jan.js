/*let age = prompt("Enter your current age: ");
let num = parseInt(age);
let currentDate = new Date();
let currentYear = currentDate.getFullYear();// promt ka dekhna hai ki vo Kesse KAAM KAREGA.... 

console.log(currentYear - num);*/


/*function addition(a, b) {
    let sum = a + b;
    console.log(sum);
    return sum;
}

addition(2, 3);*/


/*var x;
console.log(x);// Showing {undefined}
x= "I can access it.";
console.log(x);// Showing {I can access it.}*/


/* //ARROW function ALSO CALLED "Lambda function".
const gfg = ( x, y, z ) => { 
	console.log( x + y + z ) 
} 
gfg( 10, 20, 30 );*/


/*for(let x=2;x<=100;x++){
    if(x%2==0){
        console.log(x+" ");
    }
}*/

/*let x=1
while(x<100){
    if(x%2!=0){
        console.log(x);
    }
    x=x+1;
}*/


/*var x=1;
do{
    if(x%3==0){
        console.log(x);
    }x++;
}
while(x<100)*/


/*let x="I am a ";
let y="M.Pushkar Varshney.K";
console.log(x+y);*/


let x="I am a Student";
console.log(x.length);
console.log(x.toUpperCase());
console.log(x.toLowerCase());

console.log(x.replace("Student","Java Programming Student..."));
console.log(x.replace(/Student/gi,"Human."));//  /student/gi: This is a regular expression that matches the word "student" regardless of its case.
//gi: The "g" flag means "global," replacing all occurrences, and the "i" flag means "case-insensitive."
//    Remember that the replace() method creates a new string instead of modifying the original one.
console.log(x.repeat(3)+" ");

// Use the split() method with an empty string delimiter:
let myString = "Hello, world!";
let charArray = myString.split("");
console.log(charArray);  // Output: ["H", "e", "l", "l", "o", ",", " ", "w", "o", "r", "l", "d", "!"]

// Use the split() method with a specific delimiter (e.g., space):
let myString1 = "This is a sentence with multiple words.";
let wordArray = myString1.split();
console.log(wordArray);  // Output: ["This", "is", "a", "sentence", "with", "multiple", "words."]

