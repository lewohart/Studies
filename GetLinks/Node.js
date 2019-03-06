var http = require('http');

http.get('http://www.stroustrup.com/C++.html', function (res) {
    var data = '';
    res.on('data', function (d) {
        data += d;
    }).on('end', function () {
        console.log(data.match(/"https?:\/\/.*?"/g));
    }).setEncoding('utf8');
});