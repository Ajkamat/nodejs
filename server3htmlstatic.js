const express = require('express');
var app = express();
const port = 3000;
//using third party - using middleware, i.e., use()
app.use(express.static(__dirname + '/public')); //static() is used to inlude folder path
//HTTP route handlers
//http get request
app.get('/', (req, res) => { //req - request res- response
 res.send({
 name: 'Ajay',
 blog: 'https://webguruanik.blogspot.com',
 likes: ['Eat', 'Code', 'Sleep']
 });
});
app.get('/about', (req, res) => {
 res.send('THIS IS About Page');
});
app.get('/error', (req, res) => {
 res.send({
 errorMsg: 'Unable to find the page'
 });
});
app.listen(port, () => {
 console.log(`App listening on port number :- ${port}...!!!`);
});