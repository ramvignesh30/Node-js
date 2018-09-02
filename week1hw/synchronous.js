console.time("time (synchronous)");
const {readFileSync} = require('fs');
const helper = require('./libs/helper');

let fullText = "";
helper.getDirectoryFiles('myFiles/').forEach(file => {
    fullText += readFileSync(file, 'utf-8');
});
console.log(helper.wordsFrequency(fullText));
console.timeEnd("time (synchronous)");
