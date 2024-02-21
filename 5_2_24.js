const os = require('os');// PATH MODULE KHUD SE KARNA HAI
console.log("Platform: " + os.platform());
console.log("Architecture: " + os.arch());
// console.log(os);

const totalMemory = os.totalmem();
const freeMemory = os.freemem();
function formatBytes(bytes) {
  const units = ['B', 'KB', 'MB', 'GB', 'TB'];
  let i = 0;
  while (bytes >= 1024 && i < units.length - 1) {
    bytes /= 1024;
    i++;
  }
  return bytes.toFixed(2) + ' ' + units[i];
}
console.log('1.  Total Memory:', formatBytes(totalMemory));
console.log('2.  Free Memory:', formatBytes(freeMemory));
const host_name = os.hostname();
console.log('3.  ',host_name);
console.log('4.  ',os.platform());
console.log('5.  ',os.arch());
console.log('6.  ',os.type());

console.log('7.  ', os.arch());
console.log('8.  ', os.cpus());
console.log('9.  ', os.freemem());
console.log('10. ', os.totalmem());
console.log('11. ', os.hostname());
console.log('12. ', os.platform());
console.log('13. ', os.release());
console.log('14. ', os.tmpdir());
console.log('15. ', os.type());
console.log('16. ',os.uptime());
console.log('17. ', os.networkInterfaces());
console.log('18. ', os.userInfo());
console.log('19. ', os.version());
// console.log('20. ',os.EOL());

const path = require('path');

const filePath = 'D:\MPVK\WEB\java_script\5_2_24.js';
const baseName = path.basename(filePath);
const dirName = path.dirname(filePath);
const extName = path.extname(filePath);

console.log('Base Name:', baseName);   
console.log('Directory Name:', dirName);   
console.log('Extension Name:', extName); 