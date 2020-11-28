const express = require('express')
var path = require('path');
const app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static('./public'));
app.get('/', (req, res) => res.render('pages/home'));
app.get('/links',function (req, res) {
    //array with items to send
    var items = [
    {name:'node.js',url:'https://nodejs.org/en/'},
    {name:'ejs',url:'https://ejs.co'},
    {name:'expressjs',url:'https://expressjs.com'},
    {name:'vuejs',url:'https://vuejs.org'},
    {name:'nextjs',url:'https://nextjs.org'}];
    res.render('pages/links',{
    links:items
    })
    });
app.get('/list',function (req, res) {
    //array with items to send
    var items = ['node.js','expressjs','ejs','javascript','bootstarp'];
    res.render('pages/list',{
    list:items
    })
    });
    var bodyParser = require('body-parser');
    // parse application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({ extended: false }));
    // parse application/json
    app.use(bodyParser.json());
    //our tiny alert message midleware
    function messages(req,res,next){
    var message;
    res.locals.message = message;
    next();
    }
    app.get('/form',messages,function (req, res) {
    res.render('pages/form');
    });
    app.post('/form',function (req, res) {
    var message=req.body;
    res.locals.message = message;
    res.render('pages/form');
    });
app.listen(3000, () => console.log('Example app listening on port 3000!'))