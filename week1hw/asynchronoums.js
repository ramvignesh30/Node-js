console.time("time (asynchronous)");

const {readFile} = require('fs');
const {promisify} = require('util');
const helper = require('./libs/helper');

const read = promisify(readFile);
let fullText = "";
const filesPromises = [];
helper.getDirectoryFiles('myFiles/').forEach(file => {
    filesPromises.push(read(file, 'utf-8'))
});

Promise.all(filesPromises)
    .then((filesContents) => {
        filesContents.forEach(fileContent => fullText += fileContent);
        console.log(helper.wordsFrequency(fullText));
        console.timeEnd("time (asynchronous)");
    });
