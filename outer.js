const helloWorld = require('./layer1/index');
const print = require('./layer2/index');
const oldYoung = require('./layer3/index');

console.log(helloWorld);
console.log('------');
console.log('This is the list of Users :');
print()
console.log("=======");
oldYoung()
