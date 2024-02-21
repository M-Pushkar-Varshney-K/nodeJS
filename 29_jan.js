const p = require('prompt-sync')();

let a=5;
while(true){
  let b=p('Enter a number: ');
  if(b==a){
    console.log("Correct!!!");
    break;
  }else{
    console.log("Wrong number .....!!");
  }
}


const bal = require("./second");
console.log("Hello",bal);

const ap = require("./push");
console.log("Hii !!!!",ap);


const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Ask the user to enter some text
rl.question('Enter some text: ', (userInput) => {
  console.log('You entered:', userInput);
  rl.close();
});
// statgin