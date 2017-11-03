var express = require('express');
var pug     = require('pug');
var path = require('path');



app = express();

app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('pug').renderFile);
app.set("view engine", 'pug');

app.get('/', function (req, res) {
    res.render('index.pug', {

    });
});
// app.get('/', function (req, res) {
//   res.sendFile(__dirname + '/index.pug')
// });

app.listen(8080, function() {
    console.log('listening on 8080')
});
