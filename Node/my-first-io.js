let fs = require('fs');
let file = process.argv[2]
let data = fs.readFileSync(file, 'utf-8')
console.log(data.split("\n").length - 1)