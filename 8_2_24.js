//  const r = require('fs');

// // Writing in a file
// r.writeFileSync('8_2_24.txt',"Hii It's my first file by coding same like a file handling in cpp");

// //overwrite in a file
// r.writeFileSync('8_2_24.txt',"Now I am overwrite on it.");

// //appened mode in a file
// r.appendFileSync('8_2_24.txt',". Now I am appending the data");

// //read the file dara in buffer mode
// console.log(r.readFileSync('8_2_24.txt'));
// //read without buffer
// console.log(r.readFileSync("8_2_24.txt","utf-8"));

// //rename the file name
// r.renameSync("8_2_24.txt","FH.txt");


// //make folder
// r.mkdirSync("pushkar");
// r.writeFileSync("pushka.txt","My name is Pushkar Varshney.");
// r.appendFileSync("pushka.txt","Now I am appending the more data:-> I am persuing the Btech in IT from LPU.");
const fs = require('fs');

// const folderPath = 'pushkar';

// // Check if the folder already exists
// if (!fs.existsSync(folderPath)) {
//   // If it doesn't exist, create the folder
//   fs.mkdirSync(folderPath);
//   console.log(`Folder '${folderPath}' created successfully.`);

//   // Specify the file path within the folder
//   const filePath = `${folderPath}/pushkar.txt`;

//   // Specify the content you want in the file
//   const fileContent = 'This is the content of the text file.';

  // Create the file within the specified folder
//   fs.writeFileSync(filePath, fileContent);
//   console.log(`File '${filePath}' created successfully.`);
// } else {
//   console.log(`Folder '${folderPath}' already exists.`);
// }

const d = fs.readFile('FH.tx',"utf-8",(err,d)=>
{
  console.log(d);
});
console.log("after the data");