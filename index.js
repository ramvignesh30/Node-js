const fs = require('fs');
const util = require('util');
const readFile = util.promisify(fs.readFile)
const writeFile = util.promisify(fs.writeFile)

const promiseFile1 = readFile('file.txt','utf-8')
const promiseFile2 = readFile('file2.txt','utf-8')

Promise.all([promiseFile1,promiseFile2])
.then((data)=>{
    console.log(data[0] +' '+ data [1]);
    return data.join(" ");
})
.then((data)=>{
   return writeFile('message.txt', data)
})
.then(()=>{
    console.log('message written')
});
