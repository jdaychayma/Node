let fs = require('fs')
let directory = process.argv[2]
let ext = process.argv[3]
fs.readdir(directory, function (err, list) {
    if (err) {
        console.log(err)
    }
    console.log(list.filter(el => el.endsWith('.' + ext)).join('\n'))
})
