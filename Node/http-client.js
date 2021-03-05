let http = require('http');
let url = process.argv[2];

http.get(url, function (res) {
    res.on('res', function (data) {
        console.log(data)
    })
})