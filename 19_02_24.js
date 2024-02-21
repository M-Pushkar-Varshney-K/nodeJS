//const a = require('events');//ye class banai hai "a" naam ki "events" se..
// const event = new a();
// event.on("saySomething",(abc)=>{
//     console.log(" My name is Pushkar Varshney..!!");
//     console.log(abc);
// });
// var z=2000;
// setTimeout(()=>{
//     console.log("5 sec ka delay hai..");
// },z)
// event.emit("saySomething","-->call back func vo hai jo upper funct me jai.. ");

// const many_argu = (param1) => {
//     console.log(param1 + " CHALA jaa bsdk");
//   };
  
//   setTimeout(() => {
//     many_argu("Hutiye");
//   }, 3000);
  
// function dis(z){
//     setInterval(()=>{
//         console.log((z/1000)+"sec wala Hello")
//     },z);
// }
// dis(5000);
// dis(10000);

// const fun = breakOf=>{
//     console.log("hello afte "+breakOf+' sec\n');
// };
// setTimeout(fun,10000,'ten');
// setTimeout(fun,5000,'five');

// function abc() {
//   console.log("2 sec ka gap hai jisme setInterval aur setTimeout se rook raha hun");
// }

// // Set an interval and store the interval ID
// const intervalId = setInterval(abc, 2000);

// // After 10 seconds, clear the interval using the stored interval ID
// setTimeout(() => {
//   clearInterval(intervalId);
//   console.log("Interval cleared after 10 seconds.");
// }, 10000);


var x = 1;

const set_id = setInterval(() => {
    console.log("hiii " + x);
    x += 1;
    if (x > 5) {
        clearInterval(set_id);
    }
}, 2000);


// var x=1;
// const set_id = setTimeout(()=>{
//     console.log("hiii "+x);
//     x+=1;
//     if(x>5){
//         clearTimeout(set_id);
//     }
// },2000);